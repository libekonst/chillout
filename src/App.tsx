/* eslint-env browser */

import React, { Component, SyntheticEvent, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppReadyState } from './AppContext';
import { Player } from './components/audio-player';
import { GridBodyRow, GridHeader } from './components/grid';
import { IndeterminateLoadingBar } from './components/loaders';
import { Radio, getRadios } from './data';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';
import { isLarge, theme } from './styles';
import { debounce, setDocTitle, useObservable } from './utils';
import './App.css';
import './normalize.css';
import './reset.css';

import { HomeView } from './views/HomeView';
import { CardPlayer } from './CardPlayer';
import radioBloc from './blocs/radio.bloc';
import audioService from './services/Audio.service';

interface IState {
	// App state
	appReady: boolean;
	isScreenLarge: boolean;

	// Radio state
	favoritesOpened: boolean;
	activeRadioId?: number;
	pendingRadioId?: number;
	favorites: Radio[];

	// Playback state
	isPlaying: boolean;
	isLoading: boolean;

	// Audio state
	volume: number;
	audioMuted: boolean;
}

interface Props {
	data: Radio[];
	loading: boolean;
	onFetch: () => void;
}

const initialVolume = '0.6';
const collections = {
	favorites: 'favorites',
	active: 'active'
};

const WrappedApp = () => {
	const radios = useObservable(radioBloc.radios$);
	const loading = useObservable(radioBloc.isLoading$);
	useEffect(() => radioBloc.fetchRadios(), []);

	return (
		<App
			data={radios || []}
			loading={!!loading}
			onFetch={() => radioBloc.fetchRadios()}
		/>
	);
};
export default WrappedApp;

class App extends Component<Props, IState> {
	/**
	 * Retrieves the favorites JSON from `window.localStorage.favorites` and converts it to a `IRadio[]`,
	 * or returns undefined if the collection is empty.
	 */
	getFavoritesFromLocalStorage = () => {
		const favorites = localStorage.getItem(collections.favorites);
		if (!favorites) return;

		return Object.values(JSON.parse(favorites)) as Radio[];
	};

	getActiveRadioFromLocalStorage = () => {
		const active = localStorage.getItem(collections.active);
		if (!active) return;

		return JSON.parse(active).id;
	};

	getVolumeFromLocalStorage = () =>
		parseInt(localStorage.getItem('volume') || initialVolume, 10);

	readonly state: IState = {
		// App state
		isScreenLarge: isLarge(),
		appReady: false,

		// Radio State
		favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
		pendingRadioId: this.getActiveRadioFromLocalStorage(),
		activeRadioId: this.getActiveRadioFromLocalStorage(),
		favorites: this.getFavoritesFromLocalStorage() || [], // Initialize to an empty array if the collection is empty.

		// Playback/Radio state
		isPlaying: false,
		isLoading: false,

		// Audio state
		audioMuted: false,
		volume: this.getVolumeFromLocalStorage()
	};

	// <- AUDIO ->
	changeAudioVolume = (e: any) => {
		const volume = e.target.value;
		audioService.volume = volume;

		return this.setState({ volume, audioMuted: false }, this.saveVolumeToLocalStorage);
	};

	/**
	 * Sets `volume` and `audioMuted` states to update the controlled range input element.
	 * This function is called only after the user stops moving the slider for 100ms.
	 */
	setVolumeState = debounce(() => {
		this.setState(
			{ volume: audioService.volume, audioMuted: false },
			this.saveVolumeToLocalStorage
		);
	}, 100);

	muteAudio = () => {
		this.setState(prev => {
			audioService.mute(!prev.audioMuted);
			return { audioMuted: !prev.audioMuted };
		});
	};

	handleAudioStopped = (e: any): void =>
		this.setState({ isPlaying: false }, setDocTitle);

	handleAudioError = (e: any): void => {
		const { data } = this.props;
		const radio = data.find(r => r.source === e.target.src);

		if (radio)
			return this.setState(
				prev => ({
					isLoading: false,
					isPlaying: false,
					pendingRadioId: prev.activeRadioId
				}),
				setDocTitle
			);

		return this.setState({ isLoading: false, isPlaying: false }, setDocTitle);
	};

	handleAudioStarted = (e: any): void => {
		const radio = this.props.data.find(r => r.source === e.target.src);
		if (radio) {
			this.setState(
				{ isPlaying: true, isLoading: false, activeRadioId: radio.id },
				() => {
					setDocTitle(radio.name);
					this.saveActiveRadioToLocalStorage(radio);
				}
			);
		}
	};

	saveActiveRadioToLocalStorage = (radio: Radio) => {
		try {
			localStorage.setItem(collections.active, JSON.stringify(radio));
		} catch (e) {
			console.error(e);
		}
	};

	saveVolumeToLocalStorage = () => {
		try {
			localStorage.setItem('volume', audioService.volume.toString());
		} catch (e) {
			console.error(e);
		}
	};

	handleLoadStarted = (e: any): void => {
		if (!audioService.source) return;

		const { data } = this.props;
		const radio = data.find(r => r.source === e.target.src);

		this.setState({
			isLoading: true,
			isPlaying: false,
			pendingRadioId: radio?.id
		});
	};

	/**
	 * Manipulates the audio element to play/stop the media.
	 * Separate event handlers respond to the events raised by the audio element.
	 */
	togglePlayRadio = (id?: number) => async (): Promise<void> => {
		// If the provided ID is undefined, then no radio is selected.
		if (id === undefined) return alert('Select a radio first!');

		const { activeRadioId, pendingRadioId, isPlaying, isLoading } = this.state;
		if ((activeRadioId === id && isPlaying) || (pendingRadioId === id && isLoading)) {
			return audioService.stop();
		}

		const { data } = this.props;
		const radio = data.find(r => r.id === id);
		if (!radio) return undefined;
		return audioService.play(radio.source);
	};

	// <- FAVORITES ->
	addFavorite = (radio: Radio) => (e: any): void => {
		e.stopPropagation(); // Parent's onClick event handler runs this.togglePlayRadio
		this.setState(prevState => {
			if (prevState.favorites.find(f => f.id === radio.id))
				return { favorites: prevState.favorites.filter(f => f.id !== radio.id) };
			return { favorites: [radio, ...prevState.favorites] }; // Add from left.
		}, this.saveFavoritesToLocalStorage);
	};

	/**
	 * Converts the `favorites: IRadio[]` into an object with each radio's id as a key
	 * and the radio object as the value, then stringifies it and saves it to local storage
	 * under the `window.localStorage.favorites` collection.
	 */
	saveFavoritesToLocalStorage = () => {
		const { favorites } = this.state;
		const favoritesObject = favorites.reduce(
			(acc, radio) => ({ ...acc, [radio.id]: radio }),
			{}
		);

		try {
			localStorage.setItem(collections.favorites, JSON.stringify(favoritesObject));
		} catch (e) {
			console.error(e);
		}
	};

	expandFavorites = (callback?: () => any): void => {
		this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }), callback);
	};

	openFavorites = (): void =>
		this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }));

	/**
	 * Exclusive OR. Evaluates to true if one and only one input is true.
	 * Only setState if `isLarge()` is not in agreement with `this.state.isScreenLarge`.
	 * If so, toggle `this.state.isScreenLarge`.
	 */
	toggleFavoritesComponent: () => void = debounce(() => {
		const { isScreenLarge } = this.state;
		if (isLarge() !== isScreenLarge)
			this.setState(prev => ({
				isScreenLarge: !prev.isScreenLarge,
				favoritesOpened: !prev.isScreenLarge
			}));
	});

	componentDidMount() {
		const { volume } = this.state;
		audioService.volume = volume;

		const handlers = {
			loadstart: this.handleLoadStarted,
			playing: this.handleAudioStarted,
			error: this.handleAudioError,
			ended: this.handleAudioStopped,
			suspend: this.handleAudioStopped
		};

		audioService.on(handlers);

		/** The load event is fired when everything has been loaded, including images and external resources. */
		window.addEventListener('load', this.renderComponentTree);
		window.addEventListener('resize', this.toggleFavoritesComponent);
		madeWithLove();
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.renderComponentTree);
		window.removeEventListener('resize', this.toggleFavoritesComponent);
	}

	renderComponentTree = () => this.setState({ appReady: true });

	render() {
		return (
			<>
				{/* {!this.state.appReady && <Tuner />} */}
				<AppReadyState.Provider value={this.state.appReady}>
					<div
						style={{
							opacity: this.state.appReady ? 1 : 0,
							transition: 'opacity 0.5s'
						}}>
						<ThemeProvider theme={theme}>
							<>
								<aside
									style={{
										position: 'fixed',
										top: 0,
										left: 0,
										right: 0,
										zIndex: 10
									}}>
									{this.state.isLoading && <IndeterminateLoadingBar />}
								</aside>
								<HomeView
									sidebar={
										<div
											style={{
												// minWidth: '300px',
												// minHeight: '100%',
												width: '100%',
												height: '100%',
												// backgroundColor: '#fafafa',
												backgroundColor: 'rgba(11, 10, 21, 0.05)',
												display: 'flex',
												flexDirection: 'column',
												justifyContent: 'space-between',
												alignItems: 'center',
												padding: '2rem 0 6rem',
												overflow: 'hidden'
											}}>
											<div>
												<p>Hello from the left side</p>
												<p>Hey hey</p>
												<button onClick={() => radioBloc.filter()} type="button">
													All
												</button>
												<button onClick={() => radioBloc.filter('news')} type="button">
													News
												</button>
												<button onClick={() => radioBloc.filter('music')} type="button">
													Music
												</button>
												<button onClick={this.props.onFetch}>Fetch</button>
											</div>
											<CardPlayer
												radio={this.props.data.find(
													it => it.id === this.state.pendingRadioId
												)}
												isPlaying={this.state.isPlaying || this.state.isLoading}
											/>
										</div>
									}
									footer={
										<Player
											// Play button
											isPlaying={this.state.isPlaying || this.state.isLoading}
											handlePlay={this.togglePlayRadio(this.state.pendingRadioId)}
											// Audio
											onMuteAudio={this.muteAudio}
											muted={this.state.audioMuted}
											changeAudioVolume={this.changeAudioVolume}
											volume={this.state.volume}
											// Radio
											radio={this.props.data.find(
												it => it.id === this.state.pendingRadioId
											)}
											isRadioFavorite={
												!!this.state.favorites.find(
													f => f.id === this.state.pendingRadioId
												)
											}
											handleAddFavorite={this.addFavorite(
												this.props.data.find(it => it.id === this.state.pendingRadioId)!
											)}
										/>
									}
									mainContent={
										<div style={{ width: '100%', height: '100%', display: 'flex' }}>
											<main
												style={{ paddingBottom: '6rem', width: '100%', height: '100%' }}>
												<div
													style={{
														width: '100%',
														height: '10rem',
														overflow: 'hidden',
														margin: '1rem'
													}}>
													<img
														style={{
															width: '100%',
															height: '100%',
															backgroundSize: 'stretch'
														}}
														src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80"
													/>
												</div>
												<div
													style={{
														height: '1.5rem',
														display: 'flex',
														width: '100%',
														backgroundColor: 'rgb(59, 140, 168)',
														color: 'white'
													}}>
													The Chillout App
												</div>
												{this.props.loading && <p>Loading...</p>}
												<Favorites
													expandFavorites={this.expandFavorites}
													openFavorites={this.openFavorites}
													togglePlayRadio={this.togglePlayRadio}
													{...this.state}
												/>
												<ul style={{ padding: '0 1rem' }}>
													{this.props.data.map((item, i) => (
														<li key={item.id}>
															<GridBodyRow
																style={{ animationDelay: `${i * 0.05}s` }}
																name={item.name}
																image={item.image}
																label={item.label}
																handleAddFavorite={this.addFavorite(item)}
																handlePlay={this.togglePlayRadio(item.id)}
																selected={item.id === this.state.pendingRadioId}
																isFavorite={
																	!!this.state.favorites.find(f => f.id === item.id)
																}
																isPlaying={
																	(this.state.isLoading &&
																		this.state.pendingRadioId === item.id) ||
																	(this.state.isPlaying &&
																		this.state.activeRadioId === item.id)
																}
															/>
														</li>
													))}
												</ul>
											</main>
										</div>
									}
								/>
							</>
						</ThemeProvider>
					</div>
				</AppReadyState.Provider>
			</>
		);
	}
}

// export default App;

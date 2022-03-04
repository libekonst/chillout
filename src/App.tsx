/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-env browser */

import React, { useEffect, useState, useCallback, useMemo, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppReadyState } from './AppContext';
import { Player } from './components/audio-player/Player';
import { GridBodyRow, GridHeader } from './components/grid';
import { IndeterminateLoadingBar } from './components/loaders';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';
import { isLarge, theme } from './styles';
import { debounce, useObservable } from './utils';
import './App.css';
import './normalize.css';
import './reset.css';

import { HomeView } from './views/HomeView';
import { Radio } from './data/radio/Radio';
import { htmlAudioControls } from './features/audio-engine/HtmlAudioEngine';
import { PlaybackStatus } from './features/audio-engine/PlaybackStatus';
import storageService from './features/storage/storage.service';
import collectionsBloc from './blocs/collections.bloc';
import { AppServices } from './context';
import { setDocumentTitle } from './utils/setDocumentTitle';
import { AudioEngineProvider } from './features/audio-engine/AudioEngineProvider';

interface IState {
	// App state
	appReady: boolean;
	isScreenLarge: boolean;

	// Radio state
	favoritesOpened: boolean;
	activeRadio?: Radio;
	pendingRadio?: Radio;
	favorites: Radio[];

	// Playback state
	isPlaying: boolean;
	isLoading: boolean;
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
	const audio = useMemo(() => htmlAudioControls(new Audio()), []);
	// const initVolume = audio.savedVolume;
	const initVolume = 0.6;
	useEffect(() => {
		if (initVolume) audio.setVolume(initVolume);
	}, []);

	return (
		<AudioEngineProvider>
			<AppServices.Provider value={{ audio }}>
				<App data={[]} loading={false} onFetch={() => {}} />
			</AppServices.Provider>
		</AudioEngineProvider>
	);
};
export default WrappedApp;

function App({ data, loading, onFetch }: Props) {
	// App State
	const [isScreenLarge, setIsScreenLarge] = useState(isLarge());
	const [appReady, setAppReady] = useState(false);

	// Radio State
	const [favoritesOpened, setFavoritesOpened] = useState(isLarge());
	const [pendingRadio, setPendingRadio] = useState<Radio>();
	const [activeRadio, setActiveRadio] = useState<Radio>();

	// Playback State
	const favorites = useObservable(collectionsBloc.favorites$, []) || [];

	// Methods
	const handleAudioStopped = () => {
		setDocumentTitle();
	};

	const handleAudioError = (e: any): void => {
		const radio = data.find(r => r.source === e.target.src);

		handleAudioStopped();
		if (radio) setPendingRadio(activeRadio);
	};

	const handleAudioStarted = (e: any): void => {
		const radio = data.find(r => r.source === e.target.src);
		if (!radio) return;

		// setIsPlaying(true);
		// setIsLoading(false);
		// setActiveRadio(radio);
		setDocumentTitle(radio.name);
		storageService.saveLatestRadio(radio);
	};

	const isFavorite = useCallback(
		(radio: Radio) => !!favorites.find(f => f.id === radio.id),
		[favorites]
	);

	const addFavorite =
		(radio: Radio) =>
		(e: any): void => {
			e.stopPropagation(); // Parent's onClick event handler runs this.togglePlayRadio
			collectionsBloc.addFavorite(radio);
		};

	const toggleOpenFavoritesAndThen = (cb?: () => any) => {
		setFavoritesOpened(prev => !prev);
		if (typeof cb === 'function') cb();
	};

	useEffect(() => {
		const renderComponentTree = () => setAppReady(true);
		window.addEventListener('load', renderComponentTree);

		return () => window.removeEventListener('load', renderComponentTree);
	}, []);

	useEffect(() => {
		const toggleFavoritesComponent = debounce(() => {
			if (isLarge() === isScreenLarge) return;

			setIsScreenLarge(prev => !prev);
			setFavoritesOpened(isLarge());
		});
		window.addEventListener('resize', toggleFavoritesComponent);
		return () => window.removeEventListener('resize', toggleFavoritesComponent);
	}, [isScreenLarge]);

	useEffect(() => madeWithLove());

	// useEffect(() => {
	// 	const handlers = {
	// 		loadstart: handleLoadStarted,
	// 		playing: handleAudioStarted,
	// 		error: handleAudioError,
	// 		ended: handleAudioStopped,
	// 		suspend: handleAudioStopped
	// 	};

	// 	audioService.onMany(handlers);
	// });

	const { audio } = useContext(AppServices);
	const playback = useObservable(audio.playbackState$);
	const isPlaying = useMemo(
		() => playback === PlaybackStatus.LOADING || playback === PlaybackStatus.PLAYING,
		[playback]
	);

	const playRadio = (radio: Radio) => () => {};

	return (
		<>
			{/* {!this.state.appReady && <Tuner />} */}
			<AppReadyState.Provider value={appReady}>
				<div style={{ opacity: appReady ? 1 : 0, transition: 'opacity 0.5s' }}>
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
								{loading && <IndeterminateLoadingBar />}
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
											<button type="button" onClick={onFetch}>
												Fetch
											</button>
										</div>
										{/* <CardPlayer radio={data.find(it => it.id === selectedRadio?.id)} /> */}
									</div>
								}
								footer={<Player />}
								mainContent={
									<div style={{ width: '100%', height: '100%', display: 'flex' }}>
										<main
											style={{ paddingBottom: '6rem', width: '100%', height: '100%' }}>
											<Favorites
												toggleFavoritesOpenAndThen={toggleOpenFavoritesAndThen}
												togglePlayRadio={playRadio}
												favorites={favorites}
												favoritesOpened={favoritesOpened}
												isPlaying={isPlaying}
												isScreenLarge={isScreenLarge}
												activeRadioId={activeRadio?.id}
											/>
											<ul style={{ padding: '0 1rem' }}>
												{data.map((radio, i) => (
													<li key={radio.id}>
														<GridBodyRow
															style={{ animationDelay: `${i * 0.05}s` }}
															name={radio.name}
															image={radio.image}
															label={radio.label}
															handleAddFavorite={addFavorite(radio)}
															handlePlay={playRadio(radio)}
															selected={radio.id === activeRadio?.id}
															isFavorite={isFavorite(radio)}
															isPlaying={isPlaying && activeRadio?.id === radio.id}
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

// class AppC extends Component<Props, IState> {
// 	readonly state: IState = {
// 		// App state
// 		isScreenLarge: isLarge(),
// 		appReady: false,

// 		// Radio State
// 		favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
// 		pendingRadio: undefined,
// 		activeRadio: undefined,
// 		favorites: [],

// 		// Playback/Radio state
// 		isPlaying: false,
// 		isLoading: false
// 	};

// 	// <- AUDIO ->
// 	handleAudioStopped = (e: any): void =>
// 		this.setState({ isPlaying: false }, setDocTitle);

// 	handleAudioError = (e: any): void => {
// 		const { data } = this.props;
// 		const radio = data.find(r => r.source === e.target.src);

// 		if (radio)
// 			return this.setState(
// 				prev => ({
// 					isLoading: false,
// 					isPlaying: false,
// 					pendingRadio: prev.activeRadio
// 				}),
// 				setDocTitle
// 			);

// 		return this.setState({ isLoading: false, isPlaying: false }, setDocTitle);
// 	};

// 	handleAudioStarted = (e: any): void => {
// 		const radio = this.props.data.find(r => r.source === e.target.src);
// 		if (!radio) return;

// 		this.setState({ isPlaying: true, isLoading: false, activeRadio: radio }, () => {
// 			setDocTitle(radio.name);
// 			storageService.saveLatestRadio(radio);
// 		});
// 	};

// 	handleLoadStarted = (e: any): void => {
// 		if (!audioService.source) return;

// 		const { data } = this.props;
// 		const radio = data.find(r => r.source === e.target.src);

// 		this.setState({
// 			isLoading: true,
// 			isPlaying: false,
// 			pendingRadio: radio
// 		});
// 	};

// 	selectRadio = (radio: Radio) => () => {
// 		// If the provided ID is undefined, then no radio is selected.
// 		if (!radio) return alert('Select a radio first!');

// 		return playerBloc.select(radio);
// 	};

// 	// <- FAVORITES ->
// 	addFavorite = (radio: Radio) => (e: any): void => {
// 		e.stopPropagation(); // Parent's onClick event handler runs this.togglePlayRadio
// 		collectionsBloc.addFavorite(radio);
// 	};

// 	expandFavorites = (callback?: () => any): void => {
// 		this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }), callback);
// 	};

// 	openFavorites = (): void => {
// 		this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }));
// 	};

// 	/**
// 	 * Exclusive OR. Evaluates to true if one and only one input is true.
// 	 * Only setState if `isLarge()` is not in agreement with `this.state.isScreenLarge`.
// 	 * If so, toggle `this.state.isScreenLarge`.
// 	 */
// 	toggleFavoritesComponent: () => void = debounce(() => {
// 		const { isScreenLarge } = this.state;
// 		if (isLarge() !== isScreenLarge)
// 			this.setState(prev => ({
// 				isScreenLarge: !prev.isScreenLarge,
// 				favoritesOpened: !prev.isScreenLarge
// 			}));
// 	});

// 	componentDidMount() {
// 		// const { volume } = this.state;
// 		// audioService.volume = volume;

// 		const handlers = {
// 			loadstart: this.handleLoadStarted,
// 			playing: this.handleAudioStarted,
// 			error: this.handleAudioError,
// 			ended: this.handleAudioStopped,
// 			suspend: this.handleAudioStopped
// 		};

// 		audioService.onMany(handlers);

// 		storageService.preferences$.subscribe(pref => {
// 			if (!pref) return;

// 			this.setState({
// 				// volume: pref.volume,
// 				activeRadio: pref.radio,
// 				pendingRadio: pref.radio
// 			});
// 		});

// 		collectionsBloc.favorites$.subscribe(favorites => {
// 			if (!favorites) return;

// 			this.setState({ favorites });
// 		});

// 		playerBloc.activeRadio$.subscribe(activeRadio =>
// 			this.setState({ activeRadio, pendingRadio: activeRadio })
// 		);

// 		/** The load event is fired when everything has been loaded, including images and external resources. */
// 		window.addEventListener('load', this.renderComponentTree);
// 		window.addEventListener('resize', this.toggleFavoritesComponent);
// 		madeWithLove();
// 	}

// 	componentWillUnmount() {
// 		window.removeEventListener('load', this.renderComponentTree);
// 		window.removeEventListener('resize', this.toggleFavoritesComponent);
// 	}

// 	renderComponentTree = () => this.setState({ appReady: true });

// 	render() {
// 		return (
// 			<>
// 				{/* {!this.state.appReady && <Tuner />} */}
// 				<AppReadyState.Provider value={this.state.appReady}>
// 					<div
// 						style={{
// 							opacity: this.state.appReady ? 1 : 0,
// 							transition: 'opacity 0.5s'
// 						}}>
// 						<ThemeProvider theme={theme}>
// 							<>
// 								<aside
// 									style={{
// 										position: 'fixed',
// 										top: 0,
// 										left: 0,
// 										right: 0,
// 										zIndex: 10
// 									}}>
// 									{this.props.loading && <IndeterminateLoadingBar />}
// 								</aside>
// 								<HomeView
// 									sidebar={
// 										<div
// 											style={{
// 												// minWidth: '300px',
// 												// minHeight: '100%',
// 												width: '100%',
// 												height: '100%',
// 												// backgroundColor: '#fafafa',
// 												backgroundColor: 'rgba(11, 10, 21, 0.05)',
// 												display: 'flex',
// 												flexDirection: 'column',
// 												justifyContent: 'space-between',
// 												alignItems: 'center',
// 												padding: '2rem 0 6rem',
// 												overflow: 'hidden'
// 											}}>
// 											<div>
// 												<p>Hello from the left side</p>
// 												<p>Hey hey</p>
// 												<button onClick={() => radioRepo.filter()} type="button">
// 													All
// 												</button>
// 												<button onClick={() => radioRepo.filter('news')} type="button">
// 													News
// 												</button>
// 												<button onClick={() => radioRepo.filter('music')} type="button">
// 													Music
// 												</button>
// 												<button type="button" onClick={this.props.onFetch}>
// 													Fetch
// 												</button>
// 											</div>
// 											<CardPlayer
// 												radio={this.props.data.find(
// 													it => it.id === this.state.pendingRadio?.id
// 												)}
// 												isPlaying={this.state.isPlaying || this.state.isLoading}
// 											/>
// 										</div>
// 									}
// 									footer={<Player />}
// 									mainContent={
// 										<div style={{ width: '100%', height: '100%', display: 'flex' }}>
// 											<main
// 												style={{ paddingBottom: '6rem', width: '100%', height: '100%' }}>
// 												<div
// 													style={{
// 														width: '100%',
// 														height: '10rem',
// 														overflow: 'hidden',
// 														margin: '1rem'
// 													}}>
// 													<img
// 														style={{
// 															width: '100%',
// 															height: '100%',
// 															backgroundSize: 'stretch'
// 														}}
// 														alt=""
// 														src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80"
// 													/>
// 												</div>
// 												<Favorites
// 													expandFavorites={this.expandFavorites}
// 													openFavorites={this.openFavorites}
// 													togglePlayRadio={this.selectRadio}
// 													{...this.state}
// 												/>
// 												<ul style={{ padding: '0 1rem' }}>
// 													{this.props.data.map((item, i) => (
// 														<li key={item.id}>
// 															<GridBodyRow
// 																style={{ animationDelay: `${i * 0.05}s` }}
// 																name={item.name}
// 																image={item.image}
// 																label={item.label}
// 																handleAddFavorite={this.addFavorite(item)}
// 																handlePlay={this.selectRadio(item)}
// 																selected={item.id === this.state.pendingRadio?.id}
// 																isFavorite={
// 																	!!this.state.favorites.find(f => f.id === item.id)
// 																}
// 																isPlaying={
// 																	(this.state.isLoading &&
// 																		this.state.pendingRadio?.id === item.id) ||
// 																	(this.state.isPlaying &&
// 																		this.state.activeRadio?.id === item.id)
// 																}
// 															/>
// 														</li>
// 													))}
// 												</ul>
// 											</main>
// 										</div>
// 									}
// 								/>
// 							</>
// 						</ThemeProvider>
// 					</div>
// 				</AppReadyState.Provider>
// 			</>
// 		);
// 	}
// }

// export default App;

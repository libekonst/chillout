import React, { Component } from 'react';
import { IRadio } from '../../data';
import { View } from './View';
import { chop } from '../../utils/chop';

interface IState {
  headerHovered: boolean;
  expanded: boolean;
  chopped: IRadio[][];
  renderIndex: number;
  cached: { [renderIndex: number]: boolean };
}
interface IProps {
  data: IRadio[];
  title?: string;
  step?: number;
}

export default class Carousel extends Component<IProps, IState> {
  readonly state: IState = {
    headerHovered: false,
    expanded: true,
    chopped: [],
    renderIndex: 0,
    cached: {}, // TODO: Use actual caching. https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));

  handleNext = (): (() => void) | undefined => {
    // Return early so the button becomes unclickable.
    // Throws error if not returned, because the array is eventually emptied.
    const { chopped, renderIndex } = this.state;
    if (chopped.length - 1 === renderIndex) return; // Check if the last array of items is already rendered.

    return () => {
      this.setState(prev => ({ renderIndex: prev.renderIndex + 1 }), this.fetchImages);
    };
  };

  handleBack = (): (() => void) | undefined => {
    if (this.state.renderIndex === 0) return;

    return () => this.setState(prev => ({ renderIndex: prev.renderIndex - 1 }));
  };

  componentWillMount() {
    const { data, step } = this.props;
    const chopped = chop(data, step!);
    const cached = chopped.reduce((prev, _, i) => ({ ...prev, [i]: false }), {});

    this.setState({ chopped, cached });
  }
  async componentDidMount() {
    // setTimeout(() => this.setState({ isLoading: false }), 2000);
    const res = await this.preload();
    this.setState(prev => ({ cached: { ...prev.cached, [0]: true } }));
  }

  fetchImages = async () => {
    const { cached, renderIndex } = this.state;
    if (!cached[renderIndex]) {
      let res = await this.preload();
      if (res[0] !== undefined) {
        this.setState({
          cached: { ...cached, [renderIndex]: true },
        });
      }
    }
  };
  preload = async () => {
    const { chopped, cached, renderIndex } = this.state;
    return await Promise.all(
      chopped[renderIndex].map(async el => {
        const res = await fetch(el.image, { mode: 'no-cors' });
        if (res.ok) return Promise.resolve(res);
      }),
    );
  };

  render() {
    const { headerHovered, expanded, chopped, renderIndex } = this.state;
    const { title } = this.props;
    return (
      <View
        title={title!}
        expanded={expanded}
        showExpandIcon={headerHovered}
        onExpand={this.handleExpand}
        onHeaderEnter={this.handleHeaderEnter}
        onHeaderLeave={this.handleHeaderLeave}
        onNext={this.handleNext()}
        onBack={this.handleBack()}
        radios={chopped[renderIndex]}
        show={expanded}
        isLoading={!this.state.cached[renderIndex]}
      />
    );
  }
}

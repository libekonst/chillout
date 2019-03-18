import React, { Component } from 'react';
import { IRadio } from '../../data';
import { View } from './View';
import { chop } from '../../utils/chop';
import { Card } from '../card';

interface IState {
  headerHovered: boolean;
  expanded: boolean;
  chopped: IRadio[][];
  renderIndex: number;
  cached: { [renderIndex: number]: boolean };
  fetchedImage: any;
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
    fetchedImage: false,
    cached: {}, // TODO: Use actual caching. https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };
  private carouselRef = React.createRef<HTMLDivElement>();
  private cardRef = React.createRef<any>();

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));

  handleNext = (): undefined | (() => void) => {
    // Return early so the button becomes unclickable.
    // Throws error if not returned, because the array is eventually emptied.
    if (this.state.chopped.length - 1 === this.state.renderIndex) return; // Check if the last array of items is already rendered.

    return (): void => {
      this.setState(prev => ({ renderIndex: prev.renderIndex + 1 }));
    };
  };

  handleBack = (): (() => void) | undefined => {
    if (this.state.renderIndex === 0) return;

    return (): void => this.setState(prev => ({ renderIndex: prev.renderIndex - 1 }));
  };

  calculateFittingItems = (carouselWidth: number, cardWidth: number): number => {
    if (typeof carouselWidth === 'number' && typeof cardWidth === 'number')
      return Math.floor(carouselWidth / cardWidth);

    return 1;
  };

  componentDidMount() {
    // Non-null assertion because ref updates before componentDidMount.
    const carouselWidth = this.carouselRef.current!.offsetWidth;
    const cardWidth = this.cardRef.current!.offsetWidth;
    const fittingItems = this.calculateFittingItems(carouselWidth, cardWidth);
    const chopped = chop(this.props.data, fittingItems);

    // const cached = chopped.reduce((prev, _, i) => ({ ...prev, [i]: false }), {});

    this.setState({ chopped });
    // this.setState({ chopped, cached });
  }

  componentDidUpdate() {
    // Non-null assertion because ref updates before componentDidUpdate.
    const carouselWidth = this.carouselRef.current!.offsetWidth;
    let cardWidth;
    if (this.cardRef.current)
      cardWidth =
        parseInt(
          window.getComputedStyle(this.cardRef.current).getPropertyValue('margin-left'),
        ) + this.cardRef.current.offsetWidth; // Also add margin-right if not NaN.
    // const cardWidth = this.cardRef.current!.offsetWidth;
    const fittingItems = this.calculateFittingItems(carouselWidth, cardWidth);

    const currentArr = this.state.chopped[this.state.renderIndex];
    if (
      currentArr.length !== fittingItems &&
      this.state.chopped.length - 1 !== this.state.renderIndex // There are no more items to show, don't try to recalculcate.
    ) {
      const chopped = chop(this.props.data, fittingItems);

      // TODO: Instead of chop, use Array.prototype.slice() and change the slice size dynamically
      // in order to always load new items at the end.
      this.setState({ chopped }); 
    }
    console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
    console.log(`cardWidth: ${cardWidth}`);
    console.log(fittingItems);
  }

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
        ref={this.carouselRef}
        cardRef={this.cardRef}
        isLoading={!this.state.cached[renderIndex]}
      />
    );
  }
}

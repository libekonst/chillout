import React, { Component, createRef } from 'react';
import { IRadio } from '../../data';
import { View } from './View';
import { chop } from '../../utils/chop';
import { parse } from '../../utils/parse';
import { debounce } from '../../utils/debounce';

interface IState {
  headerHovered: boolean;
  expanded: boolean;
  chopped: IRadio[][];
  renderIndex: number;
  cached: { [renderIndex: number]: boolean };
  fetchedImage: any;
  isFirstRender: boolean;
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
    isFirstRender: true, // Calculate the card's width before rendering the items.
    cached: {}, // TODO: Use actual caching. https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };
  private carouselRef = React.createRef<HTMLDivElement>();
  private cardRef = React.createRef<HTMLLIElement>();

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = (): void =>
    this.setState(prev => ({ expanded: !prev.expanded }), this.addItemsUntilFull); // Recalculate if window size changed before expanding.

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
    if (cardWidth === 0 || isNaN(carouselWidth) || isNaN(cardWidth)) return 1;

    return Math.floor(carouselWidth / cardWidth);
  };

  /** If the ref is available, get the carousel's current width. Else returns 1. */
  getCarouselWidth = (): number => {
    const carouselEl = this.carouselRef.current;
    if (!carouselEl) return 1; // 0?

    return carouselEl.offsetWidth;
  };

  /** If the ref is available, get the card's width (including margin). Else returns 0.*/
  getCardWidth = (): number => {
    const cardEl = this.cardRef.current;
    if (!cardEl) return 0; // ! Caution: 1/0 => Infinity

    const marginLeft = window.getComputedStyle(cardEl).getPropertyValue('margin-left');
    const marginLeftParsed = parse(marginLeft);

    return marginLeftParsed + cardEl.offsetWidth + 1; // Prevent rendering the exact number of items needed to overflow the container.
  };

  addItemsUntilFull = (): void => {
    // TODO: Lift up?
    const cardWidth: number = this.getCardWidth();
    if (!cardWidth) return console.log('No cards mounted.'); // If 0, the cards are unmounted. Don't recalculate.

    const carouselWidth: number = this.getCarouselWidth();
    const fittingItems = this.calculateFittingItems(carouselWidth, cardWidth);
    console.log(
      fittingItems,
      `carouselWidth: ${carouselWidth}`,
      `cardWidth: ${cardWidth}`,
      `fittingItems: ${fittingItems}`,
    );
    const itemsShown = this.state.chopped[this.state.renderIndex];
    if (
      itemsShown.length !== fittingItems && // Items shown are too many or too few.
      this.state.chopped.length - 1 !== this.state.renderIndex // There are no more items to show, don't try to recalculcate.
      // ! BUG: This causes a bug. If last item is shown, window resizing won't call setState. The carousel won't be responsive.
    ) {
      const chopped = chop(this.props.data, fittingItems);
      console.log('Im goint to set state!');

      // TODO: Instead of chopping, use Array.prototype.slice() and direct it show current first + fitting items.
      // in order to always load any new items at the end.
      this.setState({ chopped }, () => {
        console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
        console.log(`cardWidth: ${cardWidth}`);
        console.log(fittingItems);
        console.log('I just set state!');
      });
    }
  };
  handleWindowResize = debounce(this.addItemsUntilFull); // Store a reference to use both when adding and clearing the event listener.

  componentDidMount() {
    // Non-null assertion because ref updates before componentDidMount.
    const carouselWidth = this.carouselRef.current!.offsetWidth;
    const cardWidth = this.cardRef.current!.offsetWidth;
    const fittingItems = this.calculateFittingItems(carouselWidth, cardWidth);
    const chopped = chop(this.props.data, fittingItems);

    window.addEventListener('resize', this.handleWindowResize);
    // const cached = chopped.reduce((prev, _, i) => ({ ...prev, [i]: false }), {});
    this.setState({ chopped, isFirstRender: false }, this.addItemsUntilFull);
    // this.setState({ chopped, cached });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
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
        isFirstRender={this.state.isFirstRender}
      />
    );
  }
}

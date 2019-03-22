import React, { Component, createRef } from 'react';
import { IRadio } from '../../data';
import { View } from './View';
import { chop } from '../../utils/chop';
import { parse } from '../../utils/parse';
import { debounce } from '../../utils/debounce';

interface IState {
  expanded: boolean;
  chopped: IRadio[][];
  renderIndex: number;
  renderWidth: number;
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
    expanded: true,
    chopped: [],
    // TODO: Add isEmpty: boolean -> 'This collection is empty'
    renderIndex: 0,
    renderWidth: 1,
    fetchedImage: false,
    isFirstRender: true, // Calculate the card's width before rendering the items.
    cached: {}, // TODO: Use actual caching. https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };
  private carouselRef = React.createRef<HTMLDivElement>();
  private cardRef = React.createRef<HTMLLIElement>();

  handleExpand = (): void =>
    this.setState(prev => ({ expanded: !prev.expanded }), this.addItemsUntilFull); // Recalculate if window size changed before expanding.

  // ? !
  /**
   * Increases the renderIndex, causing rerendering to page through the data.
   * The new renderIndex should be the next item right after the last item rendered.
   * If the end of the data is reached, the handler won't respond, to prevent the carousel body from unmounting.
   */
  handleNext = (): void => {
    if (this.reachedEndOfData) return;

    return this.setState(prev => ({ renderIndex: prev.renderIndex + prev.renderWidth }));
  };

  // ? !
  /** Returns whether there are more items available in the data props. */
  get reachedEndOfData(): boolean {
    const { renderIndex, renderWidth } = this.state;
    const { data } = this.props;

    return renderIndex + renderWidth >= data.length;
  }

  // ? !
  /**
   * Reduces the renderIndex, attempting to show as few already rendered items as possible.
   * If the renderIndex is already at the zero position, the handler won't respond, to prevent the carousel body from unmounting.
   */
  handleBack = (): void => {
    if (this.reachedStartOfData) return;

    this.setState(prev => {
      const newRenderIndex = prev.renderIndex - prev.renderWidth;
      if (newRenderIndex < 0) {
        return { renderIndex: prev.renderIndex - prev.renderWidth };
      }
      return { renderIndex: newRenderIndex };
    });
  };

  // ? !
  /** Returns whether the renderIndex is already at the 0 position. */
  get reachedStartOfData(): boolean {
    return this.state.renderIndex === 0;
  }


  // <-! NYI -> 
  calculateRenderWidth = (carouselWidth: number, cardWidth: number): number => {
    if (cardWidth === 0 || isNaN(carouselWidth) || isNaN(cardWidth)) return 1;

    return Math.floor(carouselWidth / cardWidth);
  };

  /** If the ref is available, gets the carousel's current width. Else returns 1. */
  get carouselWidth(): number {
    const carouselEl = this.carouselRef.current;
    if (!carouselEl) return 1; // 0?

    return carouselEl.offsetWidth;
  }

  /** If the ref is available, gets the card's width (including margin). Else returns 0. */
  get cardWidth(): number {
    const cardEl = this.cardRef.current;
    if (!cardEl) return 0; // ! Caution: 1/0 => Infinity

    const marginLeft = window.getComputedStyle(cardEl).getPropertyValue('margin-left');
    const marginLeftParsed = parse(marginLeft);

    return marginLeftParsed + cardEl.offsetWidth + 1; // Prevent rendering exactly as many items needed to overflow the container.
  }

  // ? !
  /**
   * Starts from the current renderIndex and picks as many items fit in the screen.
   * If the renderWidth is greater than the available items in the array,
   * it will simply extract items through to the end of the collection.
   */
  get renderItems(): IRadio[] {
    return this.props.data.slice(
      this.state.renderIndex,
      this.state.renderIndex + this.state.renderWidth,
    );
  }
  // setRenderWidth = (): void => {
  //   this.setState({ renderWidth: fittingItems }, () => {
  //     console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
  //     console.log(`cardWidth: ${cardWidth}`);
  //     console.log(fittingItems);
  //     console.log('I just set state!');
  //   });
  // }
  addItemsUntilFull = (): void => {
    // TODO: Lift up?
    const cardWidth: number = this.cardWidth;
    if (cardWidth < 1) return console.log('No cards mounted.'); // If 0, no cards are mounted. Don't recalculate.

    const carouselWidth: number = this.carouselWidth;
    const fittingItems = this.calculateRenderWidth(carouselWidth, cardWidth);
    console.log(
      fittingItems,
      `carouselWidth: ${carouselWidth}`,
      `cardWidth: ${cardWidth}`,
      `fittingItems: ${fittingItems}`,
    );
    /* const itemsShown = this.state.chopped[this.state.renderIndex];
    if (
      itemsShown.length !== fittingItems && // Items shown are too many or too few.
      this.state.chopped.length - 1 !== this.state.renderIndex // There are no more items to show, don't try to recalculcate.
      // ! BUG: This causes a bug. If last item is shown, window resizing won't call setState. The carousel won't be responsive.
    ) {
      const chopped = chop(this.props.data, fittingItems);
      console.log('Im goint to set state!');

      // TODO: Instead of chopping, use Array.prototype.slice() and direct it show current first + fitting items.
      // in order to always load any new items at the end.
      this.setState({ renderWidth: fittingItems }, () => {
        console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
        console.log(`cardWidth: ${cardWidth}`);
        console.log(fittingItems);
        console.log('I just set state!');
      });
    } */
  };

  /** Stores a reference to the handler returned by debounce. Use that reference to add and clear the event listener. */
  handleWindowResize = debounce(this.addItemsUntilFull);

  componentDidMount() {
    // Non-null assertion because ref updates before componentDidMount.
    const carouselWidth = this.carouselRef.current!.offsetWidth;
    const cardWidth = this.cardRef.current!.offsetWidth;
    const fittingItems = this.calculateRenderWidth(carouselWidth, cardWidth);
    const chopped = chop(this.props.data, fittingItems);

    window.addEventListener('resize', this.handleWindowResize);
    // const cached = chopped.reduce((prev, _, i) => ({ ...prev, [i]: false }), {});
    // Render a placeholder to measure its size, then setState again to populate with the exact number of fitting items.
    // This intermediate state won't be visible to the user.
    this.setState({ chopped, isFirstRender: false }, this.addItemsUntilFull);
    // this.setState({ chopped, cached });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  render() {
    const { expanded, chopped, renderIndex } = this.state;
    const { title } = this.props;
    return (
      <View
        title={title!}
        expanded={expanded}
        onExpand={this.handleExpand}
        onNext={expanded && !this.reachedEndOfData ? this.handleNext : undefined}
        onBack={expanded && !this.reachedStartOfData ? this.handleBack : undefined}
        // radios={chopped[renderIndex]}
        radios={this.renderItems}
        show={expanded}
        ref={this.carouselRef}
        cardRef={this.cardRef}
        isFirstRender={this.state.isFirstRender}
      />
    );
  }
}

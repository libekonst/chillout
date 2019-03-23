import React, { Component, createRef } from 'react';
import { IRadio } from '../../data';
import { View } from './View';
import { chop } from '../../utils/chop';
import { parse } from '../../utils/parse';
import { debounce } from '../../utils/debounce';

interface IState {
  expanded: boolean;

  renderIndex: number;
  renderWidth: number;

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

    // TODO: Add isEmpty: boolean -> 'This collection is empty'
    renderIndex: 0,
    renderWidth: 1,
    fetchedImage: false,
    isFirstRender: true, // Calculate the card's width before rendering the items.
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };
  private carouselRef = React.createRef<HTMLDivElement>();
  private cardRef = React.createRef<HTMLLIElement>();

  // <- Event Handlers ->
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
  /**
   * Reduces the renderIndex, attempting to show as few already rendered items as possible.
   * If the renderIndex is already at the zero position, the handler won't respond, to prevent the carousel body from unmounting.
   */
  handleBack = (): void => {
    if (this.reachedStartOfData) return;

    this.setState(prev => {
      const renderIndex = prev.renderIndex - prev.renderWidth;
      if (renderIndex < 0) return { renderIndex: 0 };

      return { renderIndex };
    });
  };

  // <- Getters for computed properties ->

  // ? !
  /** Returns whether there are more items available in the data props. */
  get reachedEndOfData(): boolean {
    return this.state.renderIndex + this.state.renderWidth >= this.props.data.length;
  }

  // ? !
  /** Returns whether the renderIndex is already at the 0 position. */
  get reachedStartOfData(): boolean {
    return this.state.renderIndex === 0;
  }

  // ? !
  /**
   * Starts from the current renderIndex and extracts from props.data as many items as it can fit in the screen.
   * If the renderWidth is greater than the available items in the array, it will simply extract items
   * through to the end of the collection.
   */
  get renderItems(): IRadio[] {
    return this.props.data.slice(
      this.state.renderIndex,
      this.state.renderIndex + this.state.renderWidth,
    );
  }

  // ? !
  /**
   * If the ref is available, returns the card's width (including margin).
   * Returns 0 if the ref is not available or the element is hidden.
   * Caution: `[number] / 0 === Infinity`
   */
  get cardWidth(): number {
    const cardEl = this.cardRef.current;
    if (!(cardEl && cardEl.offsetWidth)) return 0; // De Morgan. <- not A or not B

    const marginString = window.getComputedStyle(cardEl).getPropertyValue('margin-left');
    const margin = parse(marginString);

    // +1 to prevent rendering exactly as many items as needed to overflow the container.
    return margin + cardEl.offsetWidth + 1;
  }

  // ? !
  /** If the ref is available, returns the carousel's current width. Else returns 1. */
  get carouselWidth(): number {
    const carouselEl = this.carouselRef.current;
    if (!carouselEl) return 1; // 0?

    return carouselEl.offsetWidth;
  }
  // <-! NYI ->

  handleExpand = (): void =>
    this.setState(prev => ({ expanded: !prev.expanded }), this.addItemsUntilFull); // Recalculate if window size changed before expanding.

  // setRenderWidth = (): void => {
  //   this.setState({ renderWidth: fittingItems }, () => {
  //     console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
  //     console.log(`cardWidth: ${cardWidth}`);
  //     console.log(fittingItems);
  //     console.log('I just set state!');
  //   });
  // }

  calculateRenderWidth = (carouselWidth: number, cardWidth: number): number => {
    // if (cardWidth === 0 || isNaN(carouselWidth) || isNaN(cardWidth)) return 1;
    if (!isFinite(cardWidth) || !isFinite(carouselWidth)) return 1;

    return Math.floor(carouselWidth / cardWidth);
  };
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

      
      this.setState({ renderWidth: fittingItems }, () => {
        console.log(`carouselWidth: ${carouselWidth}, ${typeof carouselWidth}`);
        console.log(`cardWidth: ${cardWidth}`);
        console.log(fittingItems);
        console.log('I just set state!');
      });
    } */
  };

  /** Stores a reference to the handler returned by debounce. Use that reference to add and clear the event listener. */
  private readonly handleWindowResize = debounce(this.addItemsUntilFull);

  componentDidMount() {
    // Non-null assertion because ref updates before componentDidMount.

    window.addEventListener('resize', this.handleWindowResize);

    // Render a placeholder to measure its size, then setState again to populate with the exact number of fitting items.
    // This intermediate state won't be visible to the user.
    this.setState({ isFirstRender: false }, this.addItemsUntilFull);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  render() {
    const { expanded, renderIndex } = this.state;
    const { title } = this.props;
    return (
      <View
        title={title!}
        expanded={expanded}
        onExpand={this.handleExpand}
        // onNext={expanded && !this.reachedEndOfData ? this.handleNext : undefined}
        // onBack={expanded && !this.reachedStartOfData ? this.handleBack : undefined}
        onNext={this.handleNext}
        onBack={this.handleBack}
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

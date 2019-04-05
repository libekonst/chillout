import React, { Component, MouseEvent } from 'react';
import { IRadio } from '../../data';
import { debounce } from '../../utils';
import { parse } from '../../utils/parse';
import { View } from './View';

interface IState {
  renderIndex: number;
  renderWidth: number;
}
interface IProps {
  data: IRadio[];
  handleExpand: (fn?: () => any) => void;
  onSelectRadio: (id: number) => (e: MouseEvent)=> void;
  expanded: boolean;
  selectedRadio?: number;
  title?: string;
  isPlaying?: boolean;
}

export default class Carousel extends Component<IProps, IState> {
  readonly state: IState = {
    renderIndex: 0,
    renderWidth: 1,
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites' };
  private carouselRef = React.createRef<HTMLUListElement>();
  private cardRef = React.createRef<HTMLLIElement>();

  // <- Getters for computed properties ->

  /** Returns whether there are more items available in the data props. */
  get reachedEndOfData(): boolean {
    return this.state.renderIndex + this.state.renderWidth >= this.props.data.length;
  }

  /** Returns whether the renderIndex is already at the 0 position. */
  get reachedStartOfData(): boolean {
    return this.state.renderIndex === 0;
  }

  /**
   * If the ref is available, returns the card's width, including margin.
   * Returns 0 if the ref is not available or if the element is hidden,
   * aligning with the standard HTMLElement.offsetWidth behavior.
   *
   * Caution: `[number] / 0 === Infinity`.
   */
  get cardWidth(): number {
    const cardEl = this.cardRef.current;
    if (!(cardEl && cardEl.offsetWidth)) return 0; // De Morgan. not A or not B -> not (A and B)

    const marginString = window.getComputedStyle(cardEl).getPropertyValue('margin-left');
    const margin = parse(marginString);

    // +1 to prevent rendering exactly as many items needed to overflow the container.
    return margin + cardEl.offsetWidth + 1;
  }

  /** Returns the carousel's current width, if available. Else returns 0. */
  get carouselWidth(): number {
    const carouselEl = this.carouselRef.current;
    if (!(carouselEl && carouselEl.offsetWidth)) return 0;

    return carouselEl.offsetWidth;
  }

  /**
   * Starts from the current `renderIndex`[start] and extracts from `this.props.data` as many items as it can fit on the viewport,
   * based on `renderWidth`[end]. This method passes the array of objects it wants to render to its View child.
   * Initially returns the first item in `this.props.data`, whenever it's available, because `this.state.renderWidth` is initialized to `1`.
   * This container component does not care if the returned array is empty, it still passes down an array.
   * The View component concerns itself with showing a placeholder if it receives an empty array instead.
   *
   * If the `renderIndex` is greater than the length of the collection, an empty array is returned.
   * If the `renderWidth` is greater than the length of the array, it will simply extract items
   * through the end of the collection.
   * If `renderWidth` is zero, an empty array is returned.
   */
  get renderWindow(): IRadio[] {
    return this.props.data.slice(
      this.state.renderIndex,
      this.state.renderIndex + this.state.renderWidth,
    );
  }

  // <- Handlers ->

  /**
   * Increases the renderIndex, allowing rerendering to page through the data.
   * The new renderIndex should be the next item right after the last item rendered.
   * If the end of the data is reached, the handler will do nothing.
   */
  handleNext = (): void => {
    if (this.reachedEndOfData) return;

    return this.setState(prev => ({ renderIndex: prev.renderIndex + prev.renderWidth }));
  };

  /**
   * Reduces the renderIndex, attempting to show as few already rendered items as possible.
   * If the renderIndex is already at the zero position, the handler will do nothing.
   */
  handleBack = (): void => {
    if (this.reachedStartOfData) return;

    this.setState(prev => {
      const renderIndex = prev.renderIndex - prev.renderWidth;
      if (renderIndex < 0) return { renderIndex: 0 }; // Normalize to 0.

      return { renderIndex };
    });
  };

  /** Expandes/collapses the carousel body, then attempts to setState if more/fewer items can be rendered. */
  handleExpand = (): void => this.props.handleExpand(this.updateRenderWidth);

  /**
   * Attempts to count the number of items that can fit within the carousel body. Calls `setState` to udpate `this.state.renderWidth`,
   * naturally updating the number of items displayed on the screen, thanks to the `this.renderItems` getter.
   */
  updateRenderWidth = (): void => {
    const { cardWidth, carouselWidth } = this; // Store their results to avoid calling the methods twice.
    if (cardWidth === 0 || carouselWidth === 0) return; // Cards or carousel body unmounted. Don't set state.

    const renderWidth = Math.floor(carouselWidth / cardWidth);
    if (this.state.renderWidth === renderWidth) return; // The renderWidth hasn't changed. Don't set state.

    this.setState({ renderWidth });
  };

  // <- Lifecycle Methods ->

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    // If props.data was initially empty, calculate the renderWidth after rendering the first item.
    if (prevProps.data.length === 0 && prevState.renderWidth === 1)
      return this.updateRenderWidth();
  }
  componentWillUpdate(nextProps: IProps) {
    // If the received collection has fewer items than the previous one, move the renderWindow to the start.
    if (nextProps.data.length < this.props.data.length)
      return (this.state.renderIndex = 0);
  }
  /** Stores a reference to the handler returned by debounce. Use that reference to add and clear the event listener for window resize. */
  private readonly handleWindowResize = debounce(this.updateRenderWidth);

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);

    // Once the refs are available, attempt to count the fitting items and re-render.
    this.updateRenderWidth();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  render() {
    return (
      <View
        title={this.props.title!}
        expanded={this.props.expanded}
        onSelectRadio={this.props.onSelectRadio}
        onExpand={this.handleExpand}
        canClickNext={!this.reachedEndOfData}
        canClickBack={!this.reachedStartOfData}
        onNext={this.handleNext}
        onBack={this.handleBack}
        radios={this.renderWindow}
        show={this.props.expanded}
        ref={this.carouselRef}
        cardRef={this.cardRef}
        selectedRadio={this.props.selectedRadio}
        isPlaying={this.props.isPlaying}
      />
    );
  }
}

import React, { Component } from 'react';
import { IRadio } from '../../data';
import { View } from './View';

interface IState {
  headerHovered: boolean;
  expanded: boolean;
  chopped: IRadio[][];
  renderIndex: number;
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

    return () => this.setState(prev => ({ renderIndex: prev.renderIndex + 1 }));
  };

  handleBack = (): (() => void) | undefined => {
    if (this.state.renderIndex === 0) return;

    return () => this.setState(prev => ({ renderIndex: prev.renderIndex - 1 }));
  };

  // TODO: UPDATE
  chunk = (arr: any[], size: number) => {
    const chunked = [];
    let sliced = [];
    for (let i = 0; i < arr.length; i++) {
      if (sliced.length < size) {
        sliced.push(arr[i]);
        if (i === arr.length - 1) {
          chunked.push(sliced);
        }
      } else {
        chunked.push(sliced);
        sliced = [];
        sliced.push(arr[i]);
      }
    }
    return chunked;
  };

  componentWillMount() {
    const { data, step } = this.props;
    this.setState({ chopped: this.chunk(data, step!) });
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
        content={chopped[renderIndex]}
        display={expanded}
      />
    );
  }
}

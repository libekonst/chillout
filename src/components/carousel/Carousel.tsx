import React, { Component } from 'react';
import { IRadio } from '../../data';
import { View } from './View';

interface State {
  headerHovered: boolean;
  expanded: boolean;
}
interface IProps {
  data: IRadio[];
  title?: string;
  step?: number;
}

export default class Carousel extends Component<IProps, State> {
  readonly state: State = {
    headerHovered: false,
    expanded: true,
  };

  readonly defaultProps = { title: 'Your Favorites', step: 5 };

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));
  handleNext = () => console.log('hi');

  render() {
    const { headerHovered, expanded } = this.state;
    const { title: defTitle, step: defStep } = this.defaultProps;
    const { title = defTitle, data } = this.props;
    return (
      <View
        title={title}
        expanded={expanded}
        showExpandIcon={headerHovered}
        onExpand={this.handleExpand}
        onHeaderEnter={this.handleHeaderEnter}
        onHeaderLeave={this.handleHeaderLeave}
        onNext={this.handleNext}
        data={data}
        display={expanded}
      />
    );
  }
}


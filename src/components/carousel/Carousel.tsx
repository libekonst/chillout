import React, { Component } from 'react';
import { IRadio } from '../../data';
import { View } from './View';

interface IState {
  headerHovered: boolean;
  expanded: boolean;
  displayedRadios: IRadio[] | null;
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
    displayedRadios: null,
  };

  static readonly defaultProps: Partial<IProps> = { title: 'Your Favorites', step: 5 };

  handleHeaderEnter = () => this.setState({ headerHovered: true });
  handleHeaderLeave = () => this.setState({ headerHovered: false });
  handleExpand = () => this.setState(prev => ({ expanded: !prev.expanded }));
  handleNext = () => {
    const { displayedRadios } = this.state;
    const { data, step } = this.props;
    // const lastId = displayedRadios![displayedRadios!.length - 1].id;
    const currentPosition = data.findIndex(
      r => r.id === this.lastRadioId(displayedRadios!),
    );
    this.setState({
      displayedRadios: data.slice(currentPosition, currentPosition + step! + 1),
    });
  };
  lastRadioId = (r: IRadio[]) => r[r.length - 1].id;
  hasMoreRadios = () =>
    this.lastRadioId(this.state.displayedRadios!) !== this.lastRadioId(this.props.data!);
  componentWillMount() {
    const { data, step } = this.props;
    this.state.displayedRadios = data.slice(0, step! + 1);
  }

  render() {
    const { headerHovered, expanded, displayedRadios } = this.state;
    const { title } = this.props;
    return (
      <View
        title={title!}
        expanded={expanded}
        showExpandIcon={headerHovered}
        onExpand={this.handleExpand}
        onHeaderEnter={this.handleHeaderEnter}
        onHeaderLeave={this.handleHeaderLeave}
        onNext={this.hasMoreRadios() ? this.handleNext : undefined}
        content={displayedRadios!}
        display={expanded}
      />
    );
  }
}

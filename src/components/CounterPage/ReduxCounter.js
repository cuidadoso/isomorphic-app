/**
 * Created by apyreev on 05-Apr-17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import Counter from './Counter';
import { incrementCounter } from '../../redux/actions/counterActions';

@connect(state => ({ value: state.counter.value }))
class ReduxCounter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
  };

  @autobind
  handleClick() {
    this.props.dispatch(incrementCounter());
  }

  render() {
    return <Counter value={this.props.value} onClick={this.handleClick} />;
  }
}

export default ReduxCounter;

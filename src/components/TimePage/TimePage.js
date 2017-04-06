/**
 * Created by apyreev on 05-Apr-17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap-button-loader';
import { timeRequest } from '../../redux/actions/timeActions';

@connect(state => ({ loading: state.time.loading, time: state.time.time }))
class TimePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    time: PropTypes.any
  };

  @autobind
  handleClick() {
    this.props.dispatch(timeRequest());
  }

  render() {
    const { loading, time } = this.props;

    return (
      <div>
        <PageHeader>Timestamp</PageHeader>
        <Button loading={loading} onClick={this.handleClick}>Запросить!</Button>
        {time && <div>Time: {time}</div>}
      </div>
    );
  }
}

export default TimePage;

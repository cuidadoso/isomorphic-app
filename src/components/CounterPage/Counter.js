/**
 * Created by apyreev on 05-Apr-17.
 */
import React, { Component, PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import './Counter.css';

class Counter extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.number
  };
  static defaultProps = {
    onClick: () => {},
    value: 0
  };

  render() {
    const { onClick, value } = this.props;

    return (
      <div>
        <div className='counter-label'>
            Value: {value}
        </div>
        <Button onClick={onClick}>+</Button>
      </div>
    );
  }
}

export default Counter;

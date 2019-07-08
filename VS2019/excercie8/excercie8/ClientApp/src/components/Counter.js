import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <p>Current count: <strong>{props.count}</strong></p>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Increment</button>
  </div>
);

export default
    connect(state => state.counter, dispatch => bindActionCreators(actionCreators, dispatch))
    (Counter);

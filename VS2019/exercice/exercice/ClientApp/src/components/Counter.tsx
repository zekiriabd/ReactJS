import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

interface IState {
    counter: number
}

const Counter = props => (
    <div>
        <p>Current count: <strong>{props.count}</strong></p>
        <button onClick={props.increment}>Increment</button>
    </div>
);

export default
    connect(state => (state as IState).counter, dispatch => bindActionCreators(actionCreators, dispatch))
        (Counter);

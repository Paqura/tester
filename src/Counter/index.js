import React from 'react';
import {compose, withState, withHandlers} from 'recompose';

const Counter = (props) => {
	return(
		<>
			<p>
				<button data-type="increment" onClick={props.incrementCounter}>Increment</button>
				<button data-type="decrement" onClick={props.decrementCounter}>Decrement</button>
			</p>
			<span data-type="counter">{props.counter}</span>
		</>
	)
};

export {Counter};

export default compose(
	withState('counter', 'changeCounter', 0),

	withHandlers({
		incrementCounter: props => () => {
			props.changeCounter((counter) => counter + 1);
		},

		decrementCounter: props => () => {
			props.changeCounter((counter) => counter - 1);
		},
	}),
)(Counter);
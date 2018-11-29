import React from 'react';

const Congrats = (props) =>
	<div data-type="congrats">{props.success ? 'You are win!' : ''}</div>;

export default Congrats;

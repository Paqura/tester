import React from 'react';

const Congrats = (props) =>
	<div
		className='notification is-info'
		data-type='congrats'
	>
		{props.success ? 'You are win!' : 'Try to win'}
	</div>;

export default Congrats;

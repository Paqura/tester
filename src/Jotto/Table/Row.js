import React from 'react';

const Row = props =>
	<tr data-type='row'>
		<td>{props.data.id}</td>
		<td>{props.data.word}</td>
		<td>{props.data.matchLetters}</td>
	</tr>;

export default Row;
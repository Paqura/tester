import React from 'react';
import List from './List';

const Table = props =>
	<table data-type='table' border='1' className='table'>
		<List guessedWords={props.guessedWords} />
	</table>;

export default Table;
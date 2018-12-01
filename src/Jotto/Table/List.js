import React from 'react';

import Row from './Row';

const TableList = props =>
	<>
		<thead>
			<tr>
				<th>№</th>
				<th>Word</th>
				<th>Match Letters</th>
			</tr>
		</thead>
		<tbody>
			{props.guessedWords.map(word =>
				<Row
					key={word.id}
					data={word}
				/>)}
		</tbody>
	</>;

export default TableList;

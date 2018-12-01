import _ from 'lodash';
import {compose, defaultProps} from 'recompose';
import React from 'react';

import Table from './Table';

const GuessWords = (props) =>
	!_.isEmpty(props.guessedWords)
		? <Table guessedWords={props.guessedWords} />
		: <p data-type="instruction">Try to guess the hide word!</p>;

export default compose(
	defaultProps({
		guessedWords: [
			{id: 1, word: 'train', matchLetters: 4},
			{id: 2, word: 'rain', matchLetters: 4},
			{id: 3, word: 'snow', matchLetters: 1},
		],
	}),
)(GuessWords);

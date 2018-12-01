import _ from 'lodash';
import React from 'react';

import Table from './Table';

const GuessWords = (props) =>
	!_.isEmpty(props.guessedWords)
		? <Table guessedWords={props.guessedWords} />
		: <p data-type="instruction">Try to guess the hide word!</p>;

export default GuessWords;

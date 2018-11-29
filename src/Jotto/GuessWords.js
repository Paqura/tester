import _ from 'lodash';
import React from 'react';

const GuessWords = (props) =>
	!_.isEmpty(props.guessWords)
		? props.guessWords.map(word => <div>{word}</div>)
		: <p data-type="instruction">Try to guess the hide word!</p>

export default GuessWords;
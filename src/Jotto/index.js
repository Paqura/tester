import {compose, defaultProps} from 'recompose';
import {connect} from 'react-redux';
import React from 'react';
import {correctGuess} from './actions';
import Congrats from './Congrats';
import GuessWords from './GuessWords';

const Jotto = (props) => {
	return(
		<div className='container'>
			<h1 class='title is-1'>Jotto</h1>
			<Congrats success={props.isWin} />
			<GuessWords guessedWords={props.guessedWords} />
		</div>
	);
};

export default compose(
	connect(
		state => ({
			isWin: state.success.isWin,
		}),

		{correctGuess},
	),

	defaultProps({
		guessedWords: [
			{id: 1, word: 'train', matchLetters: 4},
			{id: 2, word: 'rain', matchLetters: 4},
			{id: 3, word: 'snow', matchLetters: 1},
		],
	}),
)(Jotto)
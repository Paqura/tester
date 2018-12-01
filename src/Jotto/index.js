import {compose, defaultProps, withState} from 'recompose';
import React from 'react';
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
	withState('isWin', 'setGameState', false),

	defaultProps({
		guessedWords: [
			{id: 1, word: 'train', matchLetters: 4},
			{id: 2, word: 'rain', matchLetters: 4},
			{id: 3, word: 'snow', matchLetters: 1},
		],
	}),
)(Jotto)
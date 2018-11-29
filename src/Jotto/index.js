import React from 'react';
import Congrats from './Congrats';
import GuessWords from './GuessWords';

const Jotto = (props) => {
	return(
		<>
			<GuessWords />
			<Congrats />
		</>
	);
};

export default Jotto;
import {actionTypes, correctGuess} from './';

describe('Correct Guess Function', () => {
	it('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess();
		expect(action).toEqual({type: actionTypes.CORRECT_GUESS});
	});
});
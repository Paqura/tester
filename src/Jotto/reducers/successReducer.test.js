import {actionTypes} from '../actions';
import successReducer from './successReducer';

describe('Succes Reducer', () => {
	let newState;

	it('returns default initialState of `false`', () => {
		newState = successReducer(undefined, {});
		expect(newState).toEqual({isWin: false});
	});

	it('returns state after receiving type `CORRECT_GUESS`', () => {
		const initialState = {
			isWin: false,
		};

		newState = successReducer(initialState, {type: actionTypes.CORRECT_GUESS});
		expect(newState).toEqual({isWin: true});
	});
});
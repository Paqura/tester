import {actionTypes} from '../actions';

const initialState = {
	isWin: false,
};

export default (state = initialState, action) => {
	const {type, payload} = action;

	switch(type) {
		case actionTypes.CORRECT_GUESS:
			return {
				...state,
				isWin: true,
			}

		default: return state;
	}
};

import {combineReducers} from 'redux';
import {default as successReducer} from './successReducer';

export default combineReducers({
	success: successReducer,
});
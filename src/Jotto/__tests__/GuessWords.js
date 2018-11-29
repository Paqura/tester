import React from 'react';
import {shallow} from 'enzyme';

import GuessWords from '../GuessWords';

let instance;

const
	defaultProps = [{
		guessedWords: [{
			guessedWord: 'train',
			letterMatchCount: 3,
		}]
	}],

	createInstance = (props={}) => {
		return shallow(<GuessWords {...defaultProps} {...props} />);
	};

describe('GuessWords Test', () => {
	it('should correct render without errors', () => {
		instance = createInstance();
		expect(instance).toBeTruthy();
	});
});
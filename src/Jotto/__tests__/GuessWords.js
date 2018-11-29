import React from 'react';
import {shallow} from 'enzyme';

import {findElementByAttr} from '../utils/test-helpers';
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

describe('If there is empty guessWords list', () => {
	beforeEach(() => {
		instance = createInstance({ guessWords: [] });
	});

	it('renders without errors', () => {
		expect(instance.length).toBe(1);
	});

	it('renders with instructions to guess a word', () => {
		const instruction = findElementByAttr(instance, 'instruction');
		expect(instruction.text().length).not.toBe(0);
	});
});
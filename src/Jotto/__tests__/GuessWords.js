import React from 'react';
import {mount} from 'enzyme';

import {findElementByAttr} from '../utils/test-helpers';
import GuessWords from '../GuessWords';

let instance;

const
	createInstance = (props={}) => {
		return mount(<GuessWords {...props} />);
	};

describe('Guess words', () => {
	describe('if word is not enter', () => {
		beforeEach(() => {
			instance = createInstance({guessedWords: []});
		});

		it('renders without errors', () => {
			expect(instance.length).toBe(1);
		});

		it('renders with instructions to guess a word', () => {
			const instruction = findElementByAttr(instance, 'instruction');
			expect(instruction.text().length).not.toBe(0);
		});
	})

	describe('if words is render', () => {
		const guessedWords = [
			{id: 1, word: 'train', matchLetters: 4},
			{id: 2, word: 'rain', matchLetters: 4},
			{id: 3, word: 'snow', matchLetters: 1},
		];

		beforeEach(() => {
			instance = createInstance({guessedWords});
		});

		it('return table and rows', () => {
			const table = findElementByAttr(instance, 'table');
			const rows = findElementByAttr(instance, 'row');
			expect(table.length).toBe(1);
			expect(rows.length).toEqual(guessedWords.length);
		});
	});
});
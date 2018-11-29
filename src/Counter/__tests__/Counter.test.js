import React from 'react';
import {mount} from 'enzyme';

import Counter from '../';

let instance;

/**
 * Factory for create instance
 * @function createInstance
 * @param {Object} props - Component props for current instance
 * @param {any} state - Component state
 * @return {SwallowWrapper} - Enzyme wrapper
 */

const createInstance = (props = {}, state = null) => {
	const wrapper = mount(<Counter {...props} />);
	if(state) wrapper.setState(state);
	return wrapper;
};

/**
 * Find elements by attribute
 * @function findElementByAttr
 * @param {SwallowWrapper} wrapper - Created wrapper of the current instance
 * @param {string} val - Own name of the element
 * @return {SwallowWrapper}
 */

const findElementByAttr = (wrapper, val) => {
	return wrapper.find(`[data-type="${val}"]`)
};

describe('Counter Component Test', () => {
	describe('Is every important component is true', () => {
		beforeEach(() => {
			instance = createInstance();
		});

		it('decrement is true', () => {
			expect(findElementByAttr(instance, 'decrement')).toBeTruthy();
		});

		it('increment is true', () => {
			expect(findElementByAttr(instance, 'increment')).toBeTruthy();
		});

		it('counter is true', () => {
			expect(findElementByAttr(instance, 'counter')).toBeTruthy();
		});
	});

	describe('Checking functionality of the Counter', () => {
		it('Counter starts at 0', () => {
			instance = createInstance(null, { counter: 0 });
			const initialCounterState = instance.state('counter');
			expect(initialCounterState).toBe(0);
		});

		it('Counter correctly grow', () => {
			instance = createInstance();

			const incrementButton = findElementByAttr(instance, 'increment');
			incrementButton.simulate('click');
			instance.update();

			const counterText = findElementByAttr(instance, 'counter');
			expect(counterText.text()).toContain(1);
		});
	});
});
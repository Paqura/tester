import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from '../';

Enzyme.configure({adapter: new EnzymeAdapter()});

let instance;

/**
 * Factory for create instance
 * @function createInstance
 * @param {Object} props - Component props for current instance
 * @param {any} state - Component state
 * @return {SwallowWrapper} - Enzyme wrapper
 */

const createInstance = (props = {}, state = null) => {
	return shallow(
		<Counter {...props} />,
	);
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
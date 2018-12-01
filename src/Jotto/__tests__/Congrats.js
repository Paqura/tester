import React from 'react';
import {shallow} from 'enzyme';

import Congrats from '../Congrats';

let instance;

const createInstance = (props={}) => {
	return shallow(<Congrats {...props} />);
};

describe('Congrats Test', () => {
	it('renders without errors', () => {
		instance = createInstance();
		expect(instance.length).toBe(1);
	});

	it('returns empty string if [success] is false', () => {
		instance = createInstance({success: false});
		expect(instance.text()).toBe('Try to win');
	});

	it('returns non-empty string if [success] is true', () => {
		instance = createInstance({success: true});
		expect(instance.text()).toBe('You are win!');
	});
});
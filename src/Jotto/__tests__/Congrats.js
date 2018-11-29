import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from '../Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

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
		expect(instance.text()).toBe('');
	});

	it('returns non-empty string if [success] is true', () => {
		instance = createInstance({success: true});
		expect(instance.text()).not.toBe('');
	});
});
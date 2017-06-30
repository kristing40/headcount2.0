import { shallow, mount } from 'enzyme';
import React from 'react'
import Search from '../../src/components/Search'

const mockedFn = jest.fn();

it('Should have an input field', () => {
  const wrapper = shallow(<Search filteredLocations={mockedFn}/>)

  expect(wrapper.find('input').length).toBe(1)
});

it('Should update state of input on change', () => {

  const wrapper = shallow(<Search filteredLocations={mockedFn}/>);

  const inputField = wrapper.find('input');
  const obj = {input: 'hi'};

  expect(wrapper.state().input).toBe('');

  inputField.simulate('change', {target: {value: 'Colorado'}});

  expect(wrapper.state().input).toBe('Colorado');
});

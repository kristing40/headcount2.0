import { shallow, mount } from 'enzyme';
import React from 'react'
import Search from '../../src/components/Search'

it('Should have an input field', () => {
  const wrapper = shallow(<Search/>)

  expect(wrapper.find('input').length).toBe(1)
});

// it('Should update state in input field Onchange', () => {
//   const wrapper = shallow(<Search/>);
//
//   const inputField = wrapper.find('input');
//   const obj = {input: 'hi'};
//
//   inputField.simulate('change', {target: {value: 'hi'}});
//   console.log(inputField.debug());
//   // expect(inputField.node.value).toEqual(obj);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/components/Card';
import { shallow, mount } from 'enzyme';

const data = 0.964
const location = 'Aspen'

it('should have a classfield', () => {
  const wrapper = shallow(<Card location={location} data={data}/>)

  expect(wrapper.hasClass('data-card')).toBe(true)
});

it('should have one h2 className', () => {

  const wrapper = mount(<Card location={location} data={data}/>)
  
  expect(wrapper.find('.location').length).toBe(1)
});

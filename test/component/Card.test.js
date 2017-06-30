import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/components/Card';
import { shallow, mount } from 'enzyme';

const data = 0.963
const location = 'Aspen'

it('should have a classfield', () => {
  const wrapper = shallow(<Card location={location} data={data}/>)

  expect(wrapper.hasClass('data-card')).toBe(true)
});

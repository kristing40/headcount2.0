import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/components/Card';
import { shallow, mount } from 'enzyme';

const data = { '2004': 0,
        '2005': 0,
        '2006': 0,
        '2007': 0.605,
        '2008': 0.363,
        '2009': 0.33,
        '2010': 0.327,
        '2011': 0.334,
        '2012': 0.336,
        '2013': 0.38,
        '2014': 0.383 }
const location = 'Aspen'

it('should have a classfield', () => {
  const wrapper = shallow(<Card location={location} data={data}/>)

  expect(wrapper.hasClass('data-card')).toBe(true)
});

it('should have one h2 className', () => {

  const wrapper = mount(<Card location={location} data={data}/>)

  expect(wrapper.find('.location').length).toBe(1)
});

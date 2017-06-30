import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../../src/App';
import DistrictRepository from '../../src/helper'
import kinderData from '../../src/Data'

const district = new DistrictRepository(kinderData);
const parseData = district.data
const keys = Object.keys(parseData)
const dataList = keys.map((dataKey) => parseData[dataKey])

it('renders app with classname App', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.hasClass('app')).toBe(true)
});

it('Initial state should start with an array of data', () => {
  const wrapper = shallow(<App/>)

  expect(wrapper.state().dataObj).toEqual(dataList);
});

it('should only have two objects in an array on search', () => {
  const wrapper = mount(<App/>)
  const search =wrapper.find('input');

  expect(wrapper.state().dataObj.length).toEqual(181);

  search.simulate('change', {target: {value: 'Colorado'}});

  expect(wrapper.state().dataObj.length).toEqual(2);
});

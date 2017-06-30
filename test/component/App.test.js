import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../../src/App';

it('renders app with classname App', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.hasClass('app')).toBe(true)
});

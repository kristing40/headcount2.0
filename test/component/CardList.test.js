import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardList from '../../src/components/CardList';
import Card from '../../src/components/Card'

const mockData = [
  {
    data: {2014: 0.741},
    location: 'Colorado'
  },
  {
    data: {2012: 0.852},
    location: 'Durango'
  },
  {
    data: {2011: 0.963},
    location: 'Aspen'
  }
]

it('should have a classfield', () => {
  const wrapper = shallow(<CardList dataObj={mockData}/>)
  expect(wrapper.hasClass('card-list-wrapper')).toBe(true)
});

it('should have multiple classfields and cards', () => {
  const wrapper = mount(<CardList dataObj={mockData}/>)
  expect(wrapper.find('.data-card').length).toBe(3)
})

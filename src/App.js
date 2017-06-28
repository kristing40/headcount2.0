import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import kinderData from  './Data'
import DistrictRepository from './helper.js';

class App extends Component {
  constructor() {
    super ();
    const district = new DistrictRepository(kinderData);
    this.state = {
      data: [],
    }
  }

  render() {
    console.log(this.district)
    return (
      <div>
        <h1>Headcount 2.0</h1>
        <Card/>
      </div>
    );
  }
}

export default App;

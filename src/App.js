import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList'
import kinderData from  './Data'
import DistrictRepository from './helper.js';


class App extends Component {
  constructor() {
    super ();
    const district = new DistrictRepository(kinderData);
    this.state = {
      data: district.data
    }
  }

  render() {
    return (
      <div>
        <h1>Headcount 2.0</h1>
        <CardList data={this.state.data}/>
      </div>
    );
  }
}

export default App;

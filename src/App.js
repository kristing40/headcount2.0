import React, { Component } from 'react';
import './css/App.css';
import CardList from './components/CardList'
import Search from './components/Search'
import kinderData from  './Data'
import DistrictRepository from './helper.js';


class App extends Component {
  constructor() {
    super ();
    const district = new DistrictRepository(kinderData);
    this.state = {
      data: district.data,
      input: []
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>HEADCOUNT 2.0</h1>
        </div>
        <div>
          <Search/>
        </div>
        <CardList data={this.state.data}/>

      </div>
    );
  }
}

export default App;

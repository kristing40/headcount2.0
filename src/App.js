import React, { Component } from 'react';
import './css/App.css';
import CardList from './components/CardList'
import Search from './components/Search'
import kinderData from  './Data'
import DistrictRepository from './helper.js';


class App extends Component {

  constructor() {
    super ();
    this.state = {
      dataObj: null
    }

  }

  componentWillMount() {
    const district = new DistrictRepository(kinderData);
    const parseData = district.data
    const keys = Object.keys(parseData)
    const dataList = keys.map((dataKey) => parseData[dataKey])
    this.setState({dataObj: dataList})
  }

  filteredLocations(str) {
    const district = new DistrictRepository(kinderData);
    const matches = district.findAllMatches(str)
    this.setState({dataObj: matches })

  }


  render() {
    return (
      <div>
        <div className="header">
          <h1>HEADCOUNT 2.0</h1>
        </div>
        <div>
          <Search filteredLocations={this.filteredLocations.bind(this)}/>
        </div>
        <CardList dataObj={this.state.dataObj}/>
      </div>
    );
  }
}

export default App;

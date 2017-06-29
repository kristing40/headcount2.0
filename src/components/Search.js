import React, { Component } from 'react'
import '../css/Search.css'
import PropTypes from 'prop-types'


class Search extends Component {
  constructor () {
    super();
    this.state ={
      input: ''
    }
  }

handleChange(e) {
    this.setState({input: e.target.value})
  }

  render() {
    return(
      <div className="search-bar">
        <input type="text" placeholder="Enter district" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Search;

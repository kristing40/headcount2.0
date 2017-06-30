import React, { Component } from 'react'
import '../css/Search.css'
import PropTypes from 'prop-types'


class Search extends Component {
  constructor (props) {
    super(props);
    this.state ={
      input: ''
    }

  }

handleChange(e) {
    this.setState({input: e.target.value})
    this.props.filteredLocations(e.target.value)
  }

  render() {
    return(
      <div className="search-bar">
        <input type="text"
          value={this.state.input} placeholder="Enter district" onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

Search.propTypes = {
  filteredLocations: PropTypes.func.isRequired
}

export default Search;

import React from 'react'
import PropTypes from 'prop-types';
import Card from './Card'
import '../css/CardList.css'

const CardList = ({ dataObj }) => {

  const locationObj = dataObj.map((location,i) => {

    return <Card {...location} key={location.toString() + i} />
  })

  return(
    <div className="card-list-wrapper">
      {locationObj}
    </div>
  )
}

CardList.propTypes = {
  dataObj: PropTypes.array.isRequired
}

export default CardList;

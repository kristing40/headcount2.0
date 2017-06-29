import React from 'react'
import PropTypes from 'prop-types';
import Card from './Card'
import '../css/CardList.css'

const CardList = ({dataObj}) => {

  const locationObj = dataObj.map(location => {
    return <Card {...location} />
  })

  return(
    <div className="card-list-wrapper">
      {locationObj}
    </div>
  )
}

CardList.propTypes = {
  data: PropTypes.object
}

export default CardList;

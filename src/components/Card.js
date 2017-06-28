import React from 'react'
import PropTypes, {shape, string, func, arrayOf, number} from 'prop-types'

const Card = ({location, data}) => {
  const cardYear = Object.keys(data)
  
  const cardData = data[cardYear]
  console.log(cardData);

  return (
    <div className="data-card">
      <h2>{location}</h2>
      <p>{cardYear}</p>
    </div>
  )
}
export default Card;

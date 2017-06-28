import React from 'react'
import PropTypes, {shape, string, func, arrayOf, number} from 'prop-types'
import css from 'src/css/Card.css'

const Card = ({location, data}) => {
  console.log(data);
  const keyYear = Object.keys(data)

  const yearData = keyYear.map((year) => <div><p>{data[year]}</p> <p>{year}</p></div>)

  return (
    <div className="data-card">
      <h2>{location}</h2>
          {yearData}
    </div>
  )
}
export default Card;

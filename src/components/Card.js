import React from 'react'
import PropTypes, {shape, string, func, arrayOf, number} from 'prop-types'
import '../css/Card.css'

const Card = ({location, data}) => {
  console.log(data);
  const keyYear = Object.keys(data)

  const yearData = keyYear.map((year) =>
  <div className='year-data-wrapper'>

    <div className="year-wrapper">
      <p className='year'>{year}</p>
    </div>

    <div className="data-wrapper">
      <p className='data'>{data[year]}</p>
    </div>

  </div>)

  return (
    <div className="data-card">
      <div className="card-wrapper">

        <h2 className="location">{location}</h2>

          {yearData}
      </div>
    </div>
  )
}
export default Card;

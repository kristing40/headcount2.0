import React from 'react'
import PropTypes from 'prop-types';
import '../css/Card.css'

const Card = ({location, data}) => {

  const keyYear = Object.keys(data)

  const yearData = keyYear.map((year) => {
    let dataClass =  'year'

    if(data[year] > 0.5){
      dataClass = 'year highlight'
    } else {
      dataClass = 'year'
    }

    return <div key={year.toString()} className='year-data-wrapper'>
      <div className="year-wrapper">
        <p className={dataClass}>{year}</p>
      </div>
      <div className="data-wrapper">
        <p className={dataClass}>{data[year]}</p>
      </div>
    </div>
  })

  return (
    <div className="data-card">
      <div className="card-wrapper">
        <h2 className="location">{location}</h2>
          {yearData}
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  location: PropTypes.string.isRequired
}

export default Card;

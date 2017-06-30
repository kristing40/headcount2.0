import React from 'react'
import PropTypes from 'prop-types';
import '../css/Card.css'

const Card = ({ location, data }) => {
  const keyYear = Object.keys(data)

  const yearData = keyYear.map((year) => {
    let dataClass =  'year'

    if (data[year] >= 0.0 && data[year] <= 0.1){
      dataClass = 'year highlight1'
    } else if (data[year] > 0.1 && data[year] <= 0.2){
        dataClass = 'year highlight2'
    } else if (data[year] > 0.2 && data[year] <= 0.3){
        dataClass = 'year highlight3'
    } else if (data[year] > 0.3 && data[year] <= 0.4){
        dataClass = 'year highlight4'
    } else if (data[year] > 0.4 && data[year] <= 0.5){
        dataClass = 'year highlight5'
    } else if (data[year] > 0.5 && data[year] <= 0.6){
        dataClass = 'year highlight6'
    } else if (data[year] > 0.6 && data[year] <= 0.7){
        dataClass = 'year highlight7'
    } else if (data[year] > 0.7 && data[year] <= 0.8){
        dataClass = 'year highlight8'
    } else if (data[year] > 0.8 && data[year] <= 0.9){
        dataClass = 'year highlight9'
    } else if (data[year] > 0.9 && data[year] <= 1){
        dataClass = 'year highlight10'
    }


    return <div key={year.toString()} className='year-data-wrapper'>
      <div className="year-wrapper">
        <p className='year'>{year}</p>
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
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}

export default Card;

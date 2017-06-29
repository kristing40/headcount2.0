import React from 'react'
import PropTypes from 'prop-types';
import Card from './Card'
import '../css/CardList.css'

const CardList = ({ data }) => {
  console.log(data);

  const keys = Object.keys(data)

  const dataList = keys.map((dataKey) =>
  <Card {...data[dataKey]} key={dataKey.toString()} />)

  return(
    <div className="card-list-wrapper">
      {dataList}
    </div>
  )
}

CardList.propTypes = {
  data: PropTypes.object
}

export default CardList;

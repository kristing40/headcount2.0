import React from 'react'
import PropTypes, { object, string } from 'prop-types'
import Card from './Card'
import '../css/CardList.css'

const CardList = ({ data }) => {

  const keys = Object.keys(data)

  const dataList = keys.map((dataKey) =>
  <Card {...data[dataKey]} key={dataKey.toString()} />)

  return(
    <div className="card-list-wrapper">

      {dataList}

    </div>
  )
}

CardList.PropTypes = {
  data: React.PropTypes.object
}

export default CardList;

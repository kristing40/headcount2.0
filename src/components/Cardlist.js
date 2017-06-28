import React from 'react'
import PropTypes, {shape, string, func, arrayOf, number} from 'prop-types'
import Card from './Card'

const CardList = ({ data }) => {
  const keys = Object.keys(data)

  const dataList = keys.map((key) => <Card {...data[key]} />)
  
  return(
    <div className="card-list">
      {dataList}
    </div>
  )
}

export default CardList;

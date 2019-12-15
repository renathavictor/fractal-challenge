import React from 'react'

import './beer.scss'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card m-2 p-1">
      <h1 className="text-center">{props.name}</h1>
      <img src={props.image} alt="beer image" />
      <p>{props.tagline}</p>
    </div>
  )
}

export default Card

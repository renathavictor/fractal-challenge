import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <img src={props.image} alt="beer image" />
      <p>{props.tagline}</p>
    </div>
  )
}

export default Card

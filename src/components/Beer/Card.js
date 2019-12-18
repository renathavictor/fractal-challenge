import React from 'react'
import { Link } from 'react-router-dom'

import './beer.scss'

const Card = ({id, name, image, tagline}) => {
  return (
    <Link
      className="card m-2 p-1"
      to={{
        pathname: `beer/${(id)}`,
        state: {
          id: id 
        }
      }}
    >
        <h2 >{name}</h2>
        <img src={image} alt="beer" />
        <p>{tagline}</p>
    </Link>
  )
}

export default Card

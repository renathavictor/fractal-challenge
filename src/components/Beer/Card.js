import React from 'react'
import { Link } from 'react-router-dom'

import './beer.scss'

const Card = ({id, name, image, tagline}) => {
  return (
    <Link
      className="card m-2 p-1"
      to={{
        pathname: `beer/${(name).replace(' ', '')}`,
        state: {
          id: id 
        }
      }}
    >
      {/* <div className="card m-2 p-1"> */}
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="beer image" />
        <p>{tagline}</p>
      {/* </div> */}
    </Link>
  )
}

export default Card

import React from 'react'
import { Link } from 'react-router-dom'

import './beer.scss'

const Beer = ({id, name, image, tagline}) => {
  return (
    <Link
      className="beer m-2 p-1"
      to={{
        pathname: `beer/${name.replace(/ /gm, '')}`,
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

export default Beer

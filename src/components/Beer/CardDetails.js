import React, { useState, useEffect } from 'react'

import { getBeer } from '../../services/api'

import './beer.scss'


const CardDetails = (props) => {

  const [beer, setBeer] = useState([])

  const { id } = props.location.state
  console.log(id)
  console.log(beer)

  useEffect(() => {
    async function loadBeer() {
      const response = await getBeer(id)
      setBeer(response.data[0])
    }
    loadBeer()
  }, [])

  return (
    <div className="container-list m-auto p-2">
      <h1 className="beer-name text-center">{beer.name}</h1>
      <img src={beer.image_url} alt="beer image" />
      <p className="beer-description m-2">{beer.description}</p>
      <p className="m-auto">{beer.tagline}</p>

    </div>
  )
}

export default CardDetails

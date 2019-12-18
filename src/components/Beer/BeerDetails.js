import React, { useState, useEffect } from 'react'

import { getBeer } from '../../services/api'
import Header from '../Header'

import './beer.scss'
import Spinner from '../Spinner/Spinner'


const BeerDetails = (props) => {

  const [beer, setBeer] = useState([])
  const [loading, setLoading] = useState(false)


  const { id } = props.location.state

  useEffect(() => {
    async function loadBeer() {
      setLoading(true)
      const response = await getBeer(id)
      setBeer(response.data[0])
      setLoading(false)
    }
    loadBeer()
  }, [id])

  const screenDetails = loading ? <Spinner className="m-auto" /> : (
        <div className="container-list m-auto p-2">
          <h1 className="beer-name text-center">{beer.name}</h1>
          <img src={beer.image_url} alt="beer" />
          <p className="beer-description m-2">{beer.description}</p>
          <p className="m-auto">{beer.tagline}</p>
        </div>
  )
  
  return (
    <React.Fragment>
      <Header />
        {screenDetails}
    </React.Fragment>
  )
}

export default BeerDetails

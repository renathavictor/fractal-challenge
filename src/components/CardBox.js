import React, { useState, useEffect } from 'react'
import { getBeers } from '../services/api'

import Card from './Card'

const CardBox = () => {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    async function loadBeers() {
      const response = await getBeers();
      setBeers(response.data)
    }
    loadBeers()
  }, [])

  return (
    <div>
      <h1 className="primary-color">List of Beers</h1>
       {
         beers.map(beer => {
            return <Card key={beer.id} id={beer.id} name={beer.name} tagline={beer.tagline} image={beer.image_url} />
          })
        }       
    </div>
  )
}

export default CardBox
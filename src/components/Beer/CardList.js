import React from 'react'

import Card from './Card'
import './beer.scss'


const CarList = ({ beers, loading }) => {

  if (loading) {
    return <h2>Loading...colocar um spiner</h2>
  }

  return (
    <div>
      <div className="card-list">
        {
         beers.map(beer => {
           return <Card key={beer.id} id={beer.id} name={beer.name} tagline={beer.tagline} image={beer.image_url} />
          })
        }       
      </div>
    </div>
  )
}

export default CarList
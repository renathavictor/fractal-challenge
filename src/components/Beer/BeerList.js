import React from 'react'

import Beer from './Beer'
import Spinner from '../Spinner/Spinner'
import './beer.scss'


const BeerList = ({ beers, loading }) => {

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <div className="beer-list">
        {
         beers.map(beer => {
           return <Beer key={beer.id} id={beer.id} name={beer.name} tagline={beer.tagline} image={beer.image_url} />
          })
        }       
      </div>
    </div>
  )
}

export default BeerList
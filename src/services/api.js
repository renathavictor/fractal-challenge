import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export async function getBeers() {
  console.log("GET BEERS")
  return await api.get('beers')
    .then(res => res)
    .catch(err => console.log(err));
}

export async function getBeer(id) {
  console.log("GET BEER "+id)
  return await api.get(`beers/${id}`)
    .then(res => res)
    .catch(err => console.log(err));
}
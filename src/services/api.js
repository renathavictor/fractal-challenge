import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/'
})

export async function getBeers() {
  console.log('get')
  return await api.get('beers');
}
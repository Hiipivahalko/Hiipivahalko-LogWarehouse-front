import axios from 'axios'
require('express-async-errors')

const base_url = '/api/products'

const getAllProducts = async () => {
  const request = await axios.get(`${base_url}`)
  //return request.then(response => response.data)
  console.log('jee')
  return request.data
}

export default {
  getAllProducts
}
import axios from 'axios'

const base_url = '/api/products'

const getAllProducts = async () => {
  try {
    const request = await axios.get(`${base_url}`)
    return request.data
  } catch (exception) {
    console.log('Error')
    console.log(exception.meassage)
  }
  return null
}

const getSomeProducts = async (product) => {
  try {
    const request = await axios.get(`${base_url}/${product}`)
    return request.data
  } catch (exception) {
    console.log('Error')
    console.log(exception.meassage)
  }
  return null
}

const getAllProductTypes = async () => {
  try {
    const request = await axios.get(`${base_url}/types`)
    return request.data
  } catch (exception) {
    console.log('Error')
    console.log(exception.meassage)
  }
  return null
}


export default {
  getAllProducts,
  getSomeProducts,
  getAllProductTypes
}
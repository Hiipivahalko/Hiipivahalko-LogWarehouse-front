import React, { useState, useEffect } from 'react'
import storeService from './services/products'
import './styles/app.css'
import my_img from './images/logs_image.png'
import beanies_img from './images/beanies.png'
import facemasks_img from './images/facemasks.png'
import gloves_img from './images/gloves.png'

const image_map = new Map()
image_map.set('beanies', require('./images/beanies.png'))
image_map.set('facemasks', require('./images/facemasks.png'))
image_map.set('gloves', require('./images/gloves.png'))
image_map.set('All', require('./images/All.png'))


const Product = ({ product }) => {
  
  return (
    <div>
      <li key={product.id} className='product-container-item-small'>
        <p><b>{product.manufacturer}</b>
          , {product.name}, {product.type}, {product.price}$
          <span> </span>
          <span className={product.availability.toLowerCase()}> </span>
        </p>
      </li>
    </div>
  )
  
 /*
  return (
    <div>
      <li key={product.id} className='product-container-item-small'>
        <table>
          <tbody>
          <tr>
            <td><span className='info'>Manufacturer: </span></td>
            <td><span><b>{product.manufacturer}</b></span></td>
            <td><span className='info'>type: </span></td>
            <td><span><b>{product.type}</b></span></td>
          </tr>
          <tr>
            <td><span className='info'>Name: </span></td>
            <td><span><b>{product.name}</b></span></td>
            <td><span className='info'>price: </span></td>
            <td><span>{product.price}$</span></td>
          </tr>
          <tr>
            <td><span className='info'>Availability: </span></td>
            <td><span>{product.availability}</span></td>
            <td><span className={product.availability.toLowerCase()}> </span></td>
          </tr>
          </tbody>
        </table>
    </li>
    </div>
  )*/
}


const ProductIcons = ({ prodTypes, handleProductChange }) => {
  return (
    <div className='product-container'>
      <h2>Welcome to LogWarehouse</h2>
      <ul >
        {prodTypes.map(type =>
          <li key={type} className='product-container-item-big' onClick={handleProductChange}>
            <p>{type}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

const ProductList = ({ products }) => {
  return (
    <div >
      <h2 className='product-container-header'>Products</h2>
      <ul className='product-container'>
        {products.map(product =>
          <Product product={product} key={product.id} />
        )}
      </ul>
    </div>
  )
}

const Sidebar = ({ showProducts, prodTypes, handleClick }) => {
  console.log(showProducts)
  if (!showProducts) return null
  return (
    <div>
      <ul className='left-sidebar'>
        {prodTypes.map(type =>
          <li key={type} className='left-sidebar-item' onClick={handleClick}>
            {type}
          </li>
        )}
      </ul>
    </div>
  )
}

const App = () => {

  const [allProducts, setAllProducts] = useState([])
  const [productsToShow, setProductsToShow] = useState([])
  const [showProducts, setShowProducts] = useState(false)
  const [productTypes, setProductTypes] = useState([])
  const [manufacturers, setManufacturers] = useState([])
  const [product, setProduct] = useState('')

  useEffect(() => {
    storeService.getAllProducts().then(data => {
      setAllProducts(data)
      setProductsToShow(data)
      setProductTypes(['All'].concat([...new Set(data.map(product => product.type))]))
      setManufacturers(data.map(product => product.manufacturer))
      setShowProducts(false)
    })
    console.log('data set')
  }, [])


  const handleProductChange = (event) => {
    event.preventDefault()
    console.log(event.target.outerText, 'element clicked')
    if (event.target.outerText === product) {
      console.log('products are allready to be shown')
      return
    }
    setProductsToShow(event.target.outerText === 'All' ?
      allProducts :
      allProducts.filter(p => p.type === event.target.outerText))
    setShowProducts(true)
    setProduct(event.target.outerText)
  }

  const backToFrontPage = (event) => {
    event.preventDefault()
    console.log(event.target.outerText)
    if (!showProducts) {
      console.log('all ready at frontpage')
      return
    }
    
    setShowProducts(false)
    setProduct('')
  }

  return (
    <div className='main'>
      <div>
        <h1 onClick={backToFrontPage}>
          LogWarehouse
           <img src={my_img} alt='logs' height='35' width='35' />
        </h1>

        <div className='main-container'>
          <Sidebar
            prodTypes={productTypes}
            handleClick={handleProductChange}
            showProducts={showProducts}
          />
            {showProducts ?
              <ProductList products={productsToShow} /> :
              <ProductIcons prodTypes={productTypes} handleProductChange={handleProductChange} />
            }
          
        </div>
      </div>
    </div>
  )
}

export default App;

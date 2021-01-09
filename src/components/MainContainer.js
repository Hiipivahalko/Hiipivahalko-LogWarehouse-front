import React, { useState, useEffect } from 'react'
import storeService from '../services/products'
import '../styles/mainContainer.css'

import Sidebar from './Sidebar'
import ProductList from './Product'

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

const MainContainer = () => {
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

  return (
    <div className='main-container'>
      <Sidebar
        prodTypes={productTypes}
        handleClick={handleProductChange}
      />
      {showProducts ?
        <ProductList products={productsToShow} /> :
        <ProductIcons prodTypes={productTypes} handleProductChange={handleProductChange} />
      }
    </div>
  )
}

export default MainContainer;

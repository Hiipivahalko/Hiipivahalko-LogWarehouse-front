import React, { useState } from 'react'
import '../styles/product.css'

const SmallInfo = ({ product }) => (
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

const BigInfo = ({ product }) => (
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
)



const Product = ({ product }) => {

  const [showMore, setShowMore] = useState(false)

  const hide = { display: !showMore ? '' : 'none' }
  const show = { display: showMore ? '' : 'none' }

  return (
    <div>
      <div style={hide} onClick={() => setShowMore(true)}><SmallInfo product={product}/></div>
      <div style={show} onClick={() => setShowMore(false)}><BigInfo product={product}/></div>
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

export default ProductList
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductIconList = () => {

  const prod_types = useSelector(state => state.productTypes)

  return (
    <div className='product-container'>
      <h2>Welcome to LogWarehouse</h2>
      <ul >
        {prod_types.map(type =>
          <Link to={`/${type}`} key={type}>
            <li key={type} className='product-container-item-big'>{type}</li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default ProductIconList
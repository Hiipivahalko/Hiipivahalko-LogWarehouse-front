import React from 'react'
import logs_img from '../images/logs_image.png'

const Header = () => (
  <div>
    <h1>
      LogWarehouse
      <img src={logs_img} alt='logs' height='35' width='35' />
    </h1>
  </div>
)

export default Header
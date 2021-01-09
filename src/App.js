import React, { useState, useEffect } from 'react'
import storeService from './services/products'
import './styles/app.css'
import logs_img from './images/logs_image.png'
import MainContainer from './components/MainContainer'


const App = () => {

  return (
    <div className='main'>
      <div>
        <h1>
          LogWarehouse
           <img src={logs_img} alt='logs' height='35' width='35' />
        </h1>
        <MainContainer />
      </div>
    </div>
  )
}

export default App;

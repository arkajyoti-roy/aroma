/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './smcard.css'
const Smcard = ({fooddatapass}) => {
  return (
    <div>
      <div className="cardbodyyy">
        <img src={fooddatapass.foodimg} alt="" />
        <div className='carttt'>
        <img src={fooddatapass.cartimg} alt="" />
        </div>
        <div className='productnameei'>{fooddatapass.foodname}</div>
        <p className='pp'>Price:{fooddatapass.price}</p>
      </div>
      
      
    </div>
  )
}

export default Smcard

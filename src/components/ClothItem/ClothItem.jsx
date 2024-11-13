import React from 'react'
import './ClothItem.css'
import { assets } from '../../assets/assets'

const ClothItem = ({_id,name,price,image}) => {
  return (
    <div className='cloth-item'>
        <div className="cloth-item-img-container">
            <img className='cloth-item-image' src={image} alt=""/>
        </div>
        <div className="cloth-item-info">
            <div className="cloth-item-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className="cloth-item-price">Rs.{price}</p>

        </div>
      
    </div>
  )
}

export default ClothItem

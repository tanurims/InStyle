import React, { useContext } from 'react'
import './DisplayStyle.css'
import { StoreContext } from '../../Context/StoreContext'
import ClothItem from '../ClothItem/ClothItem'

const DisplayStyle = ({category}) => {

    const {cloths_list} = useContext(StoreContext)

  return (
    <div className='style-display' id='style-display'>
      <h2>Style with our new fashions made for you</h2>
      <div className="style-display-list">
        {cloths_list.map((item,index)=>{
            if(category==="All" || category===item.category){
                return <ClothItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            }
            
        })}
      </div>
    </div>
  )
}

export default DisplayStyle

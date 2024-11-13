import React from 'react'
import './Style.css'
import { style } from '../../assets/assets'

const Style = ({category,setCategory}) => {
  return (
    <div className='style' id='style'>
      <h1>Explore Our Collection</h1>
      <p className='style-text'> Dive into our collection now and discover the perfect pieces to enhance your summer wardrobe. Happy shopping!</p>
      <div className="style-list">
        {style.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.style_name?"All":item.style_name)} key={index} className="style-list-item">
                    <img  className={category===item.style_name?"active":""} src={item.style_image} alt=""/>
                    <p>{item.style_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default Style

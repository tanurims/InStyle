import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Style from '../../components/Style/Style'
import DisplayStyle from '../../components/DisplayStyle/DisplayStyle';

function Home() {

  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <Style category={category} setCategory={setCategory} />
      <DisplayStyle category={category}/>
      
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/NavBar/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  //initialize it with one string that will be all
  const [category,setCatogory] = useState("All")
  //we will create a prop using sate variable and can do structure this is in ExploreMenu filex
  return (
    <div>
      
      <Header/>
      
      <ExploreMenu category={category} setCatogory={setCatogory}/>
      <FoodDisplay category ={category}/>
      <AppDownload />
    </div>
  )
}

export default Home

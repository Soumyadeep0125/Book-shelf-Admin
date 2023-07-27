import React from 'react'
import Categories from './Categories'
import Topproducts from './Topproducts'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Main = (props) => {
  return (
    <div>
    <Navbar/>
      <Categories selectCategory={props.selectCategory}/>
     
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link to="/addcategories">
      <button className="btn btn-primary py-2 px-4 my-2 mx-5 " type="submit" id="sendMessageButton" >Add Categories</button></Link>
    </div>
      <Topproducts setProductDetails={props.setProductDetails}/>
      <Footer/>
    </div>
  )
}

export default Main

import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const NavBar = ({setshowLogin}) => {
    const [Menu,setMenu] = useState ("home");
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'> 
   <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
<ul className="navbar-menu">
    <Link onClick={()=>setMenu("home")} className={Menu==="home"?"active":""}>Home</Link>
    <a href='#explore-menu' onClick={()=>setMenu("menu")} className={Menu==="menu"?"active":""}>Menu</a>
    <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={Menu==="mobile-app"?"active":""}>Mobile-App</a>
    <a href='#footer' onClick={()=>setMenu("contact-us")} className={Menu==="contact-us"?"active":""}>Contact Us</a>
</ul>
<div className="navbar-right">
    <Link to='/Placeholder'><img src={assets.search_icon} alt="" /></Link>
    <div className="navbar-search-icon">
       <Link to='/cart'><img src={assets.basket_icon} alt="" /> </Link>
       <div className={getTotalCartAmount()===0?"":"dot"}></div>

    </div>
    <button onAuxClick={()=>setshowLogin(true)}>Sign in</button>

</div>
      
    </div>
  )
}

export default NavBar

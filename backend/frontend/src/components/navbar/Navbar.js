import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Profile from '../profile/Profile';
import './Navbar.css'

const Navbar = () => {
  const {user,dispatch}=useContext(AuthContext)
  const navigate= useNavigate()

  const [openModal,setOpenModal]= useState()

  const handleClick=()=>{
     dispatch({type:"LOGOUT"})
  }

  const handlebutton=()=>{
    navigate('/login')
  }


  return (
    <div className='navbar'>
        <div className='navContainer'>
           <Link to='/' style={{color:'inherit',textDecoration:'none'}}>
           <span className='logo'>Ticket booking system</span>
           </Link>
          {user? <div><button className='userprofile' onClick={()=>setOpenModal(true)} >{user.name}</button><button className='userprofile' onClick={handleClick}>Logout</button></div>:<div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton' onClick={handlebutton}>Login</button>
            </div>}
        </div>
        {openModal &&  <Profile user={user} setModal={setOpenModal} />}
    </div>
  )
}

export default Navbar;
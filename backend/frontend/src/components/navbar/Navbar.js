import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Profile from '../profile/Profile';
import './Navbar.css'

const Navbar = () => {
  const {user,dispatch,isAdmin}=useContext(AuthContext)
  const navigate= useNavigate()

  const [openModal,setOpenModal]= useState()

  const handleClick=()=>{
     dispatch({type:"LOGOUT"})
     navigate('/')
     
  }

  const handlebutton=()=>{
    navigate('/login')
  }


  return (
    <div className='navbar'>
        <div className='navContainer'>
           <Link to={isAdmin===true? '/adminboard':'/'} style={{color:'inherit',textDecoration:'none'}}>
           <span className='logo'>Ticket booking system</span>
           </Link>
          {user? <div><button className='navButton' onClick={()=>setOpenModal(true)} >{user.name}</button><button className='navButton' onClick={handleClick}>Logout</button></div>:<div className='navItems'>
                <button className='navButton' onClick={()=>navigate('/register')}>Register</button>
                <button className='navButton' onClick={handlebutton}>Login</button>
            </div>} 
        </div>
        {openModal &&  <Profile user={user} setModal={setOpenModal} />}
    </div>
  )
}

export default Navbar;
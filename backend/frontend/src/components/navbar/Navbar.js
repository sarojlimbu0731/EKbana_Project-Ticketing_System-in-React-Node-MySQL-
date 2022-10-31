import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css'

const Navbar = () => {
  const {user,dispatch}=useContext(AuthContext)
  const navigate= useNavigate()

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
          {user? <div><button className='userprofile'>{user.name}</button><button className='userprofile' onClick={handleClick}>Logout</button></div>:<div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton' onClick={handlebutton}>Login</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar;
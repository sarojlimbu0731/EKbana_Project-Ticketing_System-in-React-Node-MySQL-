import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from 'axios'

const Register = () => {
  const navigate= useNavigate()
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    name: undefined,
  });

  // const [error,setError]=useState()

  const handleChange = (e) => {
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleClick=async (e)=>{
    e.preventDefault()
   try {
     await axios.post('auth/registeruser',credentials)
     navigate('/login')
   } catch (error) {
    alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)
    // setError(error.name)
   }
    
  }

  const handleNavigate =() =>{
    navigate('/login')
  }
 
  return (
    <div className="register">
      <div className="rContainer">
        <h3>Welcome to signup page?</h3>
       <form onSubmit={handleClick} className="form">
       <input
          type="text"
          className="rInput"
          id="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          required
          className="rInput"
          id="email"
          placeholder="Email "
          onChange={handleChange}
        />
          <input
          type="password"
          className="rInput"
          required
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" className="button" >Signup</button>
       </form>
       <span>have an account ? <button onClick={handleNavigate}>Login</button></span>
       {/* {error && <span className="error">{error.response.data.message}</span>} */}
      </div>
    </div>
  );
};

export default Register;

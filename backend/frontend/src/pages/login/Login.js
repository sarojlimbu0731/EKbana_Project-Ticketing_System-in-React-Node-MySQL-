import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axios from 'axios'
import {useNavigate } from "react-router-dom";
import { BusContext } from "../../context/BusContext";

const Login = () => {
  const {dispatched}= useContext(BusContext)

    const navigate= useNavigate()
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,

  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange=(e)=>{
    setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))

  }

  const handleClick=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
        const res= await axios.post('auth/loginuser',credentials)
        const data=res.data
        const status=(res.data.isAdmin)
        dispatch({type:"LOGIN_SUCCESS", payload:{data,status}})
        

      if(status=== true){
        dispatch({type:"FETCH_START"})
        const res=await axios.get("/buses/getallbuses")
        const data=res.data
        dispatched({type:"FETCH_SUCCESS",payload:{data}})
        navigate('/adminboard')
      }else{
        navigate('/')
      }
        
    } catch (error) {
      alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)
        dispatch({type:"LOGIN_FAILURE",payload:error.response.data,})
    }
  }

  const handleNavigate=()=>{
    navigate('/register')
  }

  return (
    <div className="login">
      <div className="lContainer">
        <h3>Welcome to Login page</h3>
        <input
          type="text"
          className="lInput"
          id="email"
          placeholder="email "
          onChange={handleChange}
        />
        <input
          type="password"
          className="lInput"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
        {error && <span>{error.message}</span>}
        <span>please signup an account ? <button onClick={handleNavigate}>Signup</button></span>
        <button className="home" onClick={()=>navigate('/')}>Home</button>
      </div>
   
    </div>
  );
};

export default Login;

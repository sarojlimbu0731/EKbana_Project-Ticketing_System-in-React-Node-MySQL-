import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const naviagete= useNavigate()
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
        naviagete('/')
        
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error.response.data,})
    }
  }


  return (
    <div className="login">
      <div className="lContainer">
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
      </div>
    </div>
  );
};

export default Login;

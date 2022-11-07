import React, { useContext, useState } from "react";
import "./profile.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { AuthContext } from "../../context/AuthContext";


const Profile = ({ user, setModal }) => {

const {dispatch}=useContext(AuthContext)
  const [credentials, setCredentials] = useState({
    name: user.name,
    password:null,
    newpassword:"",
    email:user.email,
    isAdmin:user.isAdmin
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 
  const handleClick=async(e)=>{
    e.preventDefault()
    setModal(false)
    try {
      
     const res=await axios.patch(`/users/updateuser/${user.userId}?userId=${user.userId}`,credentials)
     const data=res.data
     const status=(res.data.isAdmin)
     dispatch({type:"USER_DATA",payload:{data,status}})
    } catch (error) {
      alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)
    }


}

  return (
    <div className="profile">
      <div className="pcontainer">
        <FontAwesomeIcon
          className="pclose"
          icon={faCircleXmark}
          onClick={() => setModal(false)}
        />
        <form onSubmit={handleClick} className="pForm">
          <h3>Update Profile Details</h3>
          <div class="pUpdateDetail">
            <label>User Name</label>
            <input
              type="text"
              className="pInputs"
              id="name"
              value={credentials.name}
              placeholder="User name"
              required
              onChange={handleChange}
            />
          </div>

          <div class="pUpdateDetail">
          <label>Email</label>
          <input
            type="email"
            required
            className="pInputs"
            id="email"
            value={credentials.email}
            placeholder="email"
            onChange={handleChange}
          />
          </div>
          <div class="pUpdateDetail">
          <label>old password</label>
          <input
            type="password"
            required
            className="pInputs"
            id="password"
            value={credentials.password}
            placeholder="old password"
            onChange={handleChange}
          />
          </div>
          <div class="pUpdateDetail">
          <label>New Password</label>
          <input
            type="password"
            className="pInputs"
            id="newpassword"
            value={credentials.newpassword}
            placeholder="New Password"
            onChange={handleChange}
          />
          </div>

          <button type="submit" className="pButton">
            Update now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

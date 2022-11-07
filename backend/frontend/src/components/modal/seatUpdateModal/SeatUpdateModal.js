import React, { useContext, useState } from "react";
import './seatUpdateModal.css'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { SeatContext } from "../../../context/SeatContext";
import { AuthContext } from "../../../context/AuthContext";

const SeatUpdateModal = ({ seat, setModal,busId}) => {
  const [credentials, setCredentials] = useState({
    seatName: seat.seatName,
    isAval:seat.isAval,
    busId:seat.busId
  });

  const {dispatch}= useContext(SeatContext)
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const {user}=useContext(AuthContext)
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        let res=await axios.patch(`/seats/updateseat/${seat.seatId}?userId=${user.userId}&busId=${busId}`,credentials)
        let data=res.data
        dispatch({type:"FETCH_SUCCESS",payload:{data}})
        setModal(false)
    } catch (error) {
        console.log(error)
    }
}

const handleStatus=(e)=>{
    e.preventDefault()

    if(e.target.value=== 'yes'){
      setCredentials((prev)=>({...prev,[e.target.id]:true}));
    }

    else if(e.target.value=== 'no'){
      setCredentials((prev)=>({...prev,[e.target.id]:false}));
    }
  }

  return (
    <div className="reserve1">
    <div className="rContainer1">
      <FontAwesomeIcon
        className="rClose1"
        icon={faCircleXmark}
        onClick={() => setModal(false)}
      />
     <form onSubmit={handleSubmit} className="form">
      <h3>Add seat details</h3>
     <input
        type="text"
        className="rInput"
        id="seatName"
        value={credentials.seatName}
        placeholder="Seat Name"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        required
        id="isAval"
        className="rInput"
        placeholder={credentials.isAval?"yes":"no"}
        onChange={handleStatus}
      />
        <input
        type="text"
        className="rInput"
        required
        id="busId"
        value={id}
        placeholder="Bus Id"
        onChange={handleChange}
      />
  
      <button  type="submit" className="button" >update now</button>
     </form>
    </div>
  </div>
  );
};

export default SeatUpdateModal;

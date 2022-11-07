import React, {useContext, useState} from 'react';
import './adminBusAdd.css'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { BusContext } from '../../../context/BusContext';
import { AuthContext } from '../../../context/AuthContext';

const AdminBusAdd = ({setModal}) => {

  const {user}=useContext(AuthContext)
  const {dispatched}=useContext(BusContext)
    const [credentials, setCredentials] = useState({
        name: undefined,
        from: undefined,
        to: undefined,
        date:undefined,
        rate:undefined
      });
   
        const handleChange = (e) => {
            setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
          };


    const handleClick=async(e)=>{
        e.preventDefault()
         const res=await axios.post(`/buses/addbus?userId=${user.userId}`,credentials)
         const data=res.data
         dispatched({type:"FETCH_SUCCESS",payload:{data}})
        setModal(false)

    }
  return (

        <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          className="rClose"
          icon={faCircleXmark}
          onClick={() => setModal(false)}
        />
       <form onSubmit={handleClick} className="form">
        <h3>Add bus Description</h3>
       <input
          type="text"
          className="rInput"
          id="name"
          placeholder="Bus Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          required
          className="rInput"
          id="to"
          placeholder="Destination"
          onChange={handleChange}
        />
          <input
          type="text"
          className="rInput"
          required
          id="from"
          placeholder="From"
          onChange={handleChange}
        />
        <input
          type="number"
          min={0}
          className="rInput"
          required
          id="rate"
          placeholder="Rate"
          onChange={handleChange}
        />
        <input
          type="date"
          className="rInput"
          required
          id="date"
          placeholder="Travel Date"
          onChange={handleChange}
        />
        <button  type="submit" className="button" >Add now</button>
       </form>
      </div>
    </div>
  )
}

export default AdminBusAdd
import React, {useContext, useState} from 'react';
import './seatAddModal.css'
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { SeatContext } from '../../../context/SeatContext';

const SeatAddModal = ({setModal,id}) => {

  const {dispatch}= useContext(SeatContext)
    const [credentials, setCredentials] = useState({
        seatName: undefined,
        busId: id,
        isAval: undefined
      });
   
        const handleChange = (e) => {
            setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}));
          };

    const handleClick=async(e)=>{
        e.preventDefault()
         const res=await axios.post(`/seats/addseat`,credentials)
         const data=res.data
         dispatch({type:"FETCH_SUCCESS",payload:{data}})
        setModal(false)

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
       <form onSubmit={handleClick} className="form">
        <h3>Add seat details</h3>
       <input
          type="text"
          className="rInput"
          id="seatName"
          placeholder="Seat Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          required
          id="isAval"
          className="rInput"
          placeholder="Seat Status"
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
    
        <button  type="submit" className="button" >Add now</button>
       </form>
      </div>
    </div>
  )
}

export default SeatAddModal
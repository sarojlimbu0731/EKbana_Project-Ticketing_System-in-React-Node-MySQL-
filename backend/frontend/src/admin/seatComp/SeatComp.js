import React, { useContext, useState } from 'react';
import './seatComp.css';
import axios from 'axios';
import SeatUpdateModal from '../../components/modal/seatUpdateModal/SeatUpdateModal';
import { SeatContext } from '../../context/SeatContext';

const SeatComp = ({seat,busId}) => {
const {dispatch}=useContext(SeatContext)

    const [openModal,setOpenModal]= useState(false)
    const handleDelete= async(e)=>{
        const id=e.target.value
        const res=await axios.delete(`/seats/deleteseat/${id}?busId=${busId}`)
        const data=res.data
          dispatch({type:"FETCH_SUCCESS",payload:{data}})
    }

    const handleModal= () =>{
        setOpenModal(true)
    }
  return (
    <div className="seat">
                <div className="seatItem">
                  <span className="header1">Seat Id</span>
                  <span>{seat.seatId}</span>
                </div>
                <div className="seatItem">
                  <span className="header1">Seat Name</span>
                  <span>{seat.seatName}</span>
                </div>
                <div className="seatItem">
                  <span className="header1">Available</span>
                  <span>{seat.isAval ? "Yes" : "No"}</span>
                </div>
                <div className="seatItem">
                  <button onClick={handleModal} className="update">Update</button>
                  <button value={seat.seatId} onClick={handleDelete}  className="delete">Delete</button>
                </div>
                {openModal && <SeatUpdateModal busId={busId} seat={seat} setModal={setOpenModal} /> }
              </div>
  )
}

export default SeatComp;
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./reserve.css";

import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ setModal, bus }) => {

  const [selectedTicket, setSelectedTicket] = useState([]);
  const [selectedseat, setSelectedSeat] = useState([]);
  const {user}= useContext(AuthContext)
  const { data, loading } = useFetch(`/seats/getallseats/${bus.busId}`);
  

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const name=e.target.placeholder
    setSelectedTicket(
      checked
        ? [...selectedTicket, value]
        : selectedTicket.filter((item) => item !== value)
    );

    setSelectedSeat(
      checked
        ? [...selectedseat, name]
        : selectedseat.filter((item) => item !== name)
    );
  };

  var totalprice = selectedTicket.length * bus.rate;
  const handleClick = async () => {
    try {
     
      setModal(false)
     let res= await axios.patch(`/seats/updateticket/${bus.busId}?userId=${user.userId}`, {
        selectedTicket,
        isAval: false,
        userId:user.userId,
        busName:data.data.name,
        seatName:selectedseat.toString(),
        totalPrice:totalprice,
        date:data.data.date,
        userEmail:user.email        
      })
      if(res.data==="update successful"){
        alert(`${user.name} has booked ${selectedseat} seat successfully`)
      }
    
 
    } catch (error) {
      alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)
      // console.log(error)
    }
  
  };

  return (
    <div className="reserveT">
      <div className="rContainerT">
        <FontAwesomeIcon
          className="rCloseT"
          icon={faCircleXmark}
          onClick={() => setModal(false)}
        />
        <span>Select available seats</span>
        <h4>{bus.name}</h4>
        <div className="rItemT">
          {loading
            ? "loading please wait"
            : data.data.seatDetails.map((seat) =>{
 
              return  <div className="seatT">
                  <label>{seat.seatName}</label>
                  <input
                  placeholder={seat.seatName}
                    className="inputT"
                    type="checkbox"
                    disabled={!seat.isAval}
                    value={seat.seatId}
                    onChange={handleSelect}
                  />
                </div>
})}
        </div>
        <div>
          Total Price: <strong>Rs.{totalprice}</strong>
        </div>
       {(selectedseat.length===0)?<button>Book Now</button>:<button onClick={handleClick}>Book Now</button>}
      </div>
    </div>
  );
};

export default Reserve;

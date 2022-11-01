import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import "./reserve.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";

const Reserve = ({ setModal, bus }) => {
  const [selectedTicket, setSelectedTicket] = useState([]);

  const { data, loading } = useFetch(`/seats/getallseats/${bus.busId}`);
  const {user}= useContext(AuthContext)
  console.log(user)

  let seats = data.data;

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedTicket(
      checked
        ? [...selectedTicket, value]
        : selectedTicket.filter((item) => item !== value)
    );
  };

  var totalprice = selectedTicket.length * bus.rate;
  const handleClick = async () => {
    try {
      let res = await axios.patch(`/seats/updateticket/${bus.busId}`, {
        selectedTicket,
        isAval: false,
        userId:user.userId
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          className="rClose"
          icon={faCircleXmark}
          onClick={() => setModal(false)}
        />
        <span>Select available seats</span>
        <h4>{bus.name}</h4>
        <div className="rItem">
          {loading
            ? "loading please wait"
            : seats.map((seat) => (
                <div className="seat">
                  <label>{seat.seatName}</label>
                  <input
                  placeholder={seat.seatName}
                    className="input"
                    type="checkbox"
                    disabled={!seat.isAval}
                    value={seat.seatId}
                    onChange={handleSelect}
                  />
                </div>
              ))}
        </div>
        <div>
          Total Price: <strong>Rs.{totalprice}</strong>
        </div>
        <button onClick={handleClick}>Book Now</button>
      </div>
    </div>
  );
};

export default Reserve;

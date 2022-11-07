import React, { useContext, useState } from "react";
import "./adminBusUpdate.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { BusContext } from "../../../context/BusContext";
import { AuthContext } from "../../../context/AuthContext";

const AdminBusUpdate = ({ bus, setUpdate }) => {
  const {user}=useContext(AuthContext)
  const {dispatched}= useContext(BusContext)
  const [credentials, setCredentials] = useState({
    name: bus.name,
    from: bus.from,
    to: bus.to,
    date: bus.date,
    rate: bus.rate,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
  const handleClick=async(e)=>{
    e.preventDefault()
try {
  const res=await axios.patch(`/buses/updatebus/${bus.busId}?userId=${user.userId}`,credentials)
  const data=res.data
  dispatched({type:"FETCH_SUCCESS",payload:{data}})
} catch (error) {
  console.log(error)
}
    setUpdate(false)

}

  return (
    <div className="reserved">
      <div className="rcontainer">
        <FontAwesomeIcon
          className="rclose"
          icon={faCircleXmark}
          onClick={() => setUpdate(false)}
        />
        <form onSubmit={handleClick} className="Form">
          <h3>Update bus Details</h3>
          <div class="UpdateDetail">
            <label>Bus Name</label>
            <input
              type="text"
              className="rInputs"
              id="name"
              value={credentials.name}
              onChange={handleChange}
              placeholder="Bus Name"
              required
            
            />
          </div>

          <div class="UpdateDetail">
          <label>Destination</label>
          <input
            type="text"
            required
            className="rInputs"
            id="to"
            value={credentials.to}
            placeholder="Destination"
            onChange={handleChange}
          />
          </div>
          <div class="UpdateDetail">
          <label>From</label>
          <input
            type="text"
            className="rInputs"
            required
            id="from"
            value={credentials.from}
            placeholder="From"
            onChange={handleChange}
          />
          </div>
          <div class="UpdateDetail">
          <label>Rate</label>
          <input
            type="number"
            min={0}
            className="rInputs"
            required
            id="rate"
            value={credentials.rate}
            placeholder="Rate"
            onChange={handleChange}
          />
          </div>
          <div class="UpdateDetail">
          <label>Date</label>
          <input
            type="date"
            className="rInputs"
            required
            id="date"
            value={credentials.date}
            placeholder="Travel Date"
            onChange={handleChange}
          />
          </div> 
          <button type="submit" className="Button">
            Update now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBusUpdate;

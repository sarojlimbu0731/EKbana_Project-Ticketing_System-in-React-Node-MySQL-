import React, { useState } from "react";
import "./adminBusUpdate.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'

const AdminBusUpdate = ({ bus, setUpdate }) => {
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
    await axios.patch(`/buses/updatebus/${bus.busId}`,credentials)
    setUpdate(false)

}

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          className="rClose"
          icon={faCircleXmark}
          onClick={() => setUpdate(false)}
        />
        <form onSubmit={handleClick} className="form">
          <h3>Update bus Details</h3>
          <div class="updateDetail">
            <label>Bus Name</label>
            <input
              type="text"
              className="rInput"
              id="name"
              value={credentials.name}
              placeholder="Bus Name"
              required
              onChange={handleChange}
            />
          </div>

          <div class="updateDetail">
          <label>Destination</label>
          <input
            type="text"
            required
            className="rInput"
            id="to"
            value={credentials.to}
            placeholder="Destination"
            onChange={handleChange}
          />
          </div>
          <div class="updateDetail">
          <label>From</label>
          <input
            type="text"
            className="rInput"
            required
            id="from"
            value={credentials.from}
            placeholder="From"
            onChange={handleChange}
          />
          </div>
          <div class="updateDetail">
          <label>Rate</label>
          <input
            type="number"
            min={0}
            className="rInput"
            required
            id="rate"
            value={credentials.rate}
            placeholder="Rate"
            onChange={handleChange}
          />
          </div>
          <div class="updateDetail">
          <label>Date</label>
          <input
            type="date"
            className="rInput"
            required
            id="date"
            value={credentials.date}
            placeholder="Travel Date"
            onChange={handleChange}
          />
          </div> 
          <button type="submit" className="button">
            Update now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminBusUpdate;

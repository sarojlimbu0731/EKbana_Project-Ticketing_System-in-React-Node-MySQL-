import axios from "axios";
import React, { useContext, useState } from "react";
import AdminBusUpdate from "../modal/adminBusUpdate/AdminBusUpdate";
import { useNavigate } from "react-router-dom";
import "./adminBus.css";
import { SeatContext } from "../../context/SeatContext";
import { BusContext } from "../../context/BusContext";
import { AuthContext } from "../../context/AuthContext";

const AdminBus = ({ bus }) => {
  const { dispatched } = useContext(BusContext);
  const navigate = useNavigate();
  const [openUpdate, setOpenUpdate] = useState(false);
  const {user}=useContext(AuthContext)
  const handleUpdate = () => {
    setOpenUpdate(true);
  };

  const { dispatch } = useContext(SeatContext);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/buses/deletebus/${bus.busId}?userId=${user.userId}`);
      const data = res.data;
      dispatched({ type: "FETCH_SUCCESS", payload: { data } });
    } catch (error) {
      alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)

    }
  };

  ///updated code
  const handleNavigate = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const res = await axios.get(`/seats/getseats/${bus.busId}`);
      let data = res.data;
      dispatch({ type: "FETCH_SUCCESS", payload: { data } });
      navigate(`/adminbus/seats/${bus.busId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="adminBus">
      <div className="aContainer">
        <div className="abus1">
          <div className="busfeature">
            <span>{bus.busId}</span>
          </div>
          <div className="busfeature">
            <span>{bus.name}</span>
          </div>
          <div className="busfeature">
            <span>{bus.from}</span>
          </div>
          <div className="busfeature">
            <span>{bus.to}</span>
          </div>
          <div className="busfeature">
            <span>Rs.{bus.rate}</span>
          </div>
          <div className="busfeature">
            <span>{bus.date}</span>
          </div>
          <div className="busfeature">
            <button className="update" onClick={handleUpdate}>
              Update
            </button>
          </div>
          <div className="busfeature">
            <button className="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="busfeature">
            <button className="seat1" onClick={handleNavigate}>
              Seats
            </button>
          </div>
        </div>
      </div>
      {openUpdate && <AdminBusUpdate bus={bus} setUpdate={setOpenUpdate} />}
    </div>
  );
};

export default AdminBus;

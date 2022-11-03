import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminBus from "../../components/adminBus/AdminBus";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import AdminBusAdd from "../../components/modal/adminBusAdd/AdminBusAdd";
import Navbar from "../../components/navbar/Navbar";
import "./adminHome.css";


const AdminHome = () => {
  const [data, setData] = useState();

  const [openModal,setOpenModal]= useState(false)


   
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "http://localhost:8000/api/v1/buses/getallbuses"
      );
      setData(data.data);
    }

    fetchData();
  });


  return (
    <div className="admin">
      <Navbar />
      <Header />
      <div className="adduser">
        <div className="user">
          <div className="content">
            <span>Add new bus record</span>
          </div>
          <div className="content">
            <button onClick={()=>setOpenModal(true)}>Add</button>
          </div>
        </div>
      </div>
      <div className="aContainer">
        <div className="aBuses">
            <div className="busheader">
                <span>BusId</span>
                <span>Bus Name</span>
                <span>From</span>
                <span>Destination</span>
                <span>Rate</span>
                <span>Travel Date</span>
                <span>Update</span>
                <span>Delete</span>
                <span>Seats</span>
            </div>
          {data &&
            data.map((bus, index) => (
              <AdminBus bus={bus} key={index} />
            ))}
        </div>
        <MailList/>
                <Footer />
      </div>
                {openModal && <AdminBusAdd setModal={setOpenModal}/>}
                
             
    </div>
  
  );
};

export default AdminHome;

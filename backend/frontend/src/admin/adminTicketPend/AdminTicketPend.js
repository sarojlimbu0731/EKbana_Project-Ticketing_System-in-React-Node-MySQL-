import axios from "axios";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./adminTicketPend.css";



const AdminTicketPend = () => {

    useEffect(()=>{
        async function fetchrecord(){
            const data= await axios.get('/btickets/ticketpend')
            console.log(data)
        }
        fetchrecord()
    },[])

  return (
    <div className="ticketpend">
      <Navbar />
      <Header />
      <div className="tpendContainer">

      </div>
    </div>
  );
};

export default AdminTicketPend;

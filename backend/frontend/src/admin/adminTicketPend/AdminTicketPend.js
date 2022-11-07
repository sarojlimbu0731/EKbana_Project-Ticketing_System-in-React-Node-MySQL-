import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./adminTicketPend.css";
import MailList from '../../components/mailList/MailList'

import Footer from '../../components/footer/Footer'
import { AuthContext } from "../../context/AuthContext";



const AdminTicketPend = () => {
  const [tickets, setTickets] = useState();
  const  {user}=useContext(AuthContext)
  useEffect(() => {
    async function fetchrecord() {
      const data = await axios.get("/btickets/ticketpend");
      setTickets(data.data);
    }
    fetchrecord();
  },);


  const handlechange=async(e)=>{

    try {
      const index=e.target.value
      tickets[index].bookStatus=true
      const value =tickets[index]
      const  bookId=value.bookId
      await axios.patch(`/btickets/updateticket/${bookId}?userId=${user.userId}`,value)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>    <Navbar />
    <Header />
    <div className="ticketpend">
    <h3>Pending status ticket</h3>
      <div className="tpendContainer">
     
        <div className="tWrapper">
          {tickets &&
            tickets.map((ticket, index) => (
              <div className="ticket" key={index}>
                <h3>{ticket.busName}</h3>
                <div className="tickdet">
                    <span>pEmail</span>
                    <span>{ticket.userEmail}</span>
                </div>
       
                <div className="seatstick">
                    <h4>Book Seats </h4>
                    {ticket.seatName.map(seat=>(
                        <div className="seattick">{seat}</div>
                    ))}
                </div>
   
                <div className="tickdet">
                    <span>Travel Date</span>
                    <span>{ticket.date}</span>
                </div>
                <div className="tickdet">
                    <span>Total Price </span>
                    <span>Rs.{ticket.totalPrice}</span>
                </div>
  
                <div className="tickdet">
                    <span>Book status:</span>
                    <span className="pend">Pending</span>
                    <button value={index} onClick={handlechange}>Approve</button>
                </div>
              </div>
            ))}
        </div>
  
      </div>
      <MailList/>
      <div className="foot">
      <Footer/>
      </div>


    </div>
    </div>
  );
};

export default AdminTicketPend;

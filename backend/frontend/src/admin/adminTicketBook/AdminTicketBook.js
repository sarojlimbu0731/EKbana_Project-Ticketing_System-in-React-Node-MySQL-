import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./adminTicketBook.css";
import MailList from '../../components/mailList/MailList'
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";


const AdminTicketBook = () => {
  const [tickets, setTickets] = useState();
  const {user}=useContext(AuthContext)

  useEffect(() => {
    async function fetchrecord() {
      const data = await axios.get("/btickets/ticketsuccess");
      setTickets(data.data);
    }
    fetchrecord();
  },);

  const handleDelete=async()=>{
    try {
      await axios.delete(`/btickets/ticketdelete?userId=${user.userId}`)
    } catch (error) {
      alert(`Success: ${error.response.data.success} \nMessage: ${error.response.data.message}`)

    }
  }

  return (
    <div>    <Navbar />
    <Header />
    <div className="ticketpend">
      <div className="twrapper">
      <div className="theader">
      <h3>Approved ticket status</h3>
    <button onClick={handleDelete}>Clear all record</button>
      </div>  
      </div>
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
                    <span className="appro">Approved</span>
           
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

export default AdminTicketBook;

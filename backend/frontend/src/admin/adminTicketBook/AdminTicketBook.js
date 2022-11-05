import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./adminTicketBook.css";
import MailList from '../../components/mailList/MailList'
import Footer from "../../components/footer/Footer";


const AdminTicketBook = () => {
  const [tickets, setTickets] = useState();

  useEffect(() => {
    async function fetchrecord() {
      const data = await axios.get("/btickets/ticketsuccess");

      console.log(data)
      setTickets(data.data);
    }
    fetchrecord();
  },);


  return (
    <div>    <Navbar />
    <Header />
    <div className="ticketpend">
    <h3>Approved status ticket</h3>
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

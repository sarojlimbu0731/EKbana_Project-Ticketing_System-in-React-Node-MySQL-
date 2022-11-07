import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import "./adminUsers.css";

const AdminUsers = () => {
  const { user } = useContext(AuthContext);
  const { data, loading } = useFetch(
    `/users/alluserdetail?userId=${user.userId}`
  );

  return (
    <div>
      <Navbar />
      <Header />
      <h3 className="headp">List of passenger</h3>
      <div className="acontainer1">
        <div className="awrapper1">
          {loading
            ? "loading"
            : data.data.map((user, index) => (
                <div className="user1" key={index}>
                  <div className="userDet">
                    <span>Name</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="userDet">
                    <span>Email</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="userDet">
                    <div className="tickets">
                      <h3>Ticket status</h3>
                      {user.bookTickets.map((ticket) => (
                        <div className="ticket">
                          <div className="tickwrapper">
                            <div className="ticketdet">
                              <span>Bus</span>
                              <span>{ticket.busName}</span>
                            </div>
                            <div className="ticketdet">
                              <span>Seat</span>
                              <span>{ticket.seatName}</span>
                            </div>
                            <div className="ticketdet">
                              <span>Travel date</span>
                              <span>{ticket.date}</span>
                            </div>
                            <div className="ticketdet">
                              <span>Total price</span>
                              <span>{ticket.totalPrice}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default AdminUsers;

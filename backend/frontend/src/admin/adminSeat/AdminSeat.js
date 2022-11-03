import React, { useContext,useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./adminSeat.css";
import { useLocation } from "react-router-dom";
import SeatAddModal from "../../components/modal/seatAddModal/SeatAddModal";
import SeatComp from "../seatComp/SeatComp";
import { SeatContext } from "../../context/SeatContext";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const AdminSeat = () => {

  // const [data,setData]= useState()
  const [openAddModal, setOpenAddModal] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const {loading,data} = useContext(SeatContext)
 
  // useEffect(() => {
  //   async function fetchData() {
  //     dispatch({type:"FETCH_START"})
  //       try {
  //         const res = await axios.get(`/seats/getseats/${id}`);
  //         let data1=res.data
  //         dispatch({type:"FETCH_SUCCESS",payload:{data1}})
  //       } catch (error) {
  //         console.log(error)
  //       }
  //   }
  //   fetchData();
  // },[]);

   

  




  return (
    <div className="admin">
      <Navbar />
      <Header />
      <div className="addseat">
        <div className="seats">
          <div className="content">
            <span>[BusID: {id}] Add  new seat </span>
          </div>
          <div className="content">
            <button onClick={() => setOpenAddModal(true)}>Add</button>
          </div>
        </div>
      </div>
      <div className="aContainer">
        <div className="busseat">
          {loading?"Loading please wait": data.data.map((seat, index) => <SeatComp busId={id} seat={seat} key={index}/>)
            }
        </div>
        <MailList/>
            <Footer/>
      </div>
      {openAddModal && <SeatAddModal id={id} setModal={setOpenAddModal}/>}
      
    </div>
  );
};

export default AdminSeat;

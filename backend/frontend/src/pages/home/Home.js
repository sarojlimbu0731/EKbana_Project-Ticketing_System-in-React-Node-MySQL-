import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Home = () => {



  const {data,loading ,error}= useFetch('/buses/getallbuses')
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">

{
  loading? "Loading please wait": <div className="items">
  {data.data.map(item=> <SearchItem item={item} key={item.busId}/>)}
 
  </div>
}
       


     <MailList />
<Footer />  
      </div>
 
      

    </div>
  );
};

export default Home;

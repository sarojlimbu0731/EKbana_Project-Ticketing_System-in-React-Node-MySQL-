import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./buses.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {

  const location = useLocation()
 const busId=location.pathname.split('/')[2]

 const state= useContext(SearchContext)
 

 const {data,loading,error}= useFetch(`/buses/getOnebus/${busId}`)



  const photos = [
    {
      src: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1",
    },
    {
      src: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl/5900_pool_b92df465-0c67-4161-b8bb-67f9fc301094.jpg",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy-NE86GcPn8THeAUo3lEsY2H05snxVGpzQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZyIZM4HWe-GkpeTUcuAZmVuHuuIWQJJUQg&usqp=CAU",
    },
  ];
  return (
    <div className="hotel">
      <Navbar />
      { loading?"loading":console.log(data)}
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 124 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $112 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of florida</h1>
              <p className="hotelDesc">
                A hotel and Restaurants are the place where providing products
                such as food, accommodation and services to the guests who
                willing to pay for whatever consumed or experienced by them.
                Basically when the people like to stay or eat out of the home,
                first they expect the good services, quality products and
                satisfaction because of this the classification systems is
                introduced to in hotel and restaurant Industry. Once we search
                about why people using the classifications systems in hotel and
                restaurants; The people can find the hotel and restaurant in
                easily according to their budgets, because every one can’t stay
                in five star hotels and they can’t eat in luxury restaurants, so
                they can find the hotels and restaurants in their capacity.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a night</h1>
              <span>
             
                A hotel and Restaurants are the place where providing products
                such as food, accommodation and services to the guests who
              </span>
              <h2>
                <b>$234</b>(7 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
      <Footer />
      </div>

    </div>
  );
};

export default Hotel;

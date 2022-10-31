import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./buses.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  const busId = location.pathname.split("/")[2];

  // const state = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

    const { data, loading} = useFetch(`/buses/getOnebus/${busId}`);



  const photos = [
    {
      src: "https://balitransports.com/wp-content/uploads/hiace-commuter-interior.jpg",
    },
    {
      src: "https://toyotanigeria.com/wp-content/uploads/2018/11/Toyota-Hiace-2019-Model-30.jpg",
    },
    {
      src: "https://www.fordtransitusaforum.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.fordtransitusaforum.com/attachments/img-0357-jpg.159866/",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oxW1N6ZEpoIG5XWAqi0b2opkUmM-_wbofbESBGNMe5ts0Wz_DKD7J8c7N1Ko1RyQElQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlArthtlCMAgPP7HSPxOKEZfaYWXcDnTKVoVvB5flG1Pfvy9yghBLu96ugmP0qHLwIJAw&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFSme8LuTbM_KHOBQKkvsh35scdXWrSt1eA&usqp=CAU",
    },
  ];

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="buses">
      <Navbar />
      {loading ? (
        "loading"
      ) : (
        <>
          <Header type="list" />
          <div className="busesContainer">
            <div className="busesWrapper">
              <button className="bookNow">Reserve or book ticket</button>
              <h1 className="busesTitle">AC Hiace</h1>
              <div className="busesAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.data.from}</span>
              </div>

              <div className="busesImages">
                {photos.map((photo) => (
                  <div className="busesImgWrapper">
                    <img src={photo.src} alt="" className="busesImg" />
                  </div>
                ))}
              </div>
              <div className="busesDetails">
                <div className="busesDetailText">
                  <h1 className="busesTitle">
                    Have a comfort journey with us!
                  </h1>
                  <p>
                    <strong>{data.data.name}</strong>
                  </p>
                  <p className="busesDesc">
                    <span>
                      From:- <strong>{data.data.from}</strong>
                    </span>{" "}
                    {" "}
                    <span>
                      To:- <strong>{data.data.to}</strong>
                    </span>
                  </p>
                  <p>
                    <span>Travel date:- </span>
                    <strong>{data.data.date}</strong>
                  </p>
                </div>
                <div className="busesDetailPrice">
                  <h1>Perfect for a travel</h1>

                  <h2>
                    <b>Rs.{data.data.rate} </b>Per ticket
                  </h2>
                  <button onClick={handleClick}>Reserve or book ticket</button>
                </div>
              </div>
              {openModal && (
                <Reserve
               
                  setModal={setOpenModal}
                  bus={data.data}
                />
              )}
            </div>
            <MailList />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;

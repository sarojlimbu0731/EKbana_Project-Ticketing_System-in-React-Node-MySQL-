import React, { useContext, useState } from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  // faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";


import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Header = ({type}) => {

  const [destination,setDestination]= useState("")
  const [cLocation,setClocation]= useState("")
  const [date, setDate] = useState()
  const navigate =useNavigate()


  const {dispatch}=useContext(SearchContext)

  const handleSearch=() =>{
    dispatch({type:"NEW_SEARCH",payload:{cLocation,destination,date}})
   if(cLocation && destination && date){
    navigate("/buses",{state:{ cLocation, destination, date}})
   }
  }

  return (
    <div className="header">
      <div className={type=== "list"? "headerContainer listmode": "headerContainer"}>
        {type !=="list" && <>
        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
        <p className="headerDesc">
          Get reward for your travel, unlock instant savings of money with a
          ticket booking app
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          {/* ------current location----------- */}
        <div className="headerSearchItem">
          <FontAwesomeIcon icon= {faLocationPin} className="headerIcon"/>
            <input
              type="text"
              placeholder="Current Location?"
              className="headerSearchInput"
              onChange={e=>setClocation(e.target.value)}
            />
          </div>

                  {/* -------------destination--------------- */}
          <div className="headerSearchItem">
          <FontAwesomeIcon icon= {faLocationPin} className="headerIcon"/>
            <input
              type="text"
              placeholder="Destination?"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            /> 
          </div>

          {/* -------------travel date------------- */}
          <div className="headerSearchItem">
         {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
            <input
              type="date"
              className="headerSearchInput"
              onChange={e=>setDate(e.target.value)}
            /> 
          </div>
        
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Header;

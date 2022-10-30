import React, { useState } from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [cLocation, setClocation] = useState(location.state.cLocation);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);

  //fetching the search data from backend
  const { data, loading, error, reFetchData } = useFetch(
    `/buses/searchbus?to=${destination}&from=${cLocation}&date=${date}`
  );

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            {/* ------current-location-------- */}
            <div className="lsItem">
              <label>Current Location </label>
              <input type="text" placeholder={cLocation} />
            </div>

            {/* --------destination------------- */}
            <div className="lsItem">
              <label>Destination </label>
              <input type="text" placeholder={destination} />
            </div>

              {/* -------travel date----------- */}
            <div className="lsItem">
              <label>Travel date </label>
              <input type="date" value={date}   onChange={(e)=>setDate(e.target.value)}/>
            </div>

            <button>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.data.map((item) => (
                  <SearchItem item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

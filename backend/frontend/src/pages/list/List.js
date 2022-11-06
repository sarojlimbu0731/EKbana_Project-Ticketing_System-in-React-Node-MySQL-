import React, { useState } from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  // const [cLocation, setClocation] = useState(location.state.cLocation);
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);

  const [credentials, setCredentials] = useState({
    cLocation: location.state.cLocation,
   destination: location.state.destination,
    date: location.state.date,
  });

  //fetching the search data from backend
  // const { data, loading, reFetchData } = useFetch(
  //   `/buses/searchbus?to=${destination}&from=${cLocation}&date=${date}`
  // );

  const { data, loading } = useFetch(
    `/buses/searchbus?to=${credentials.destination}&from=${credentials.cLocation}&date=${credentials.date}`
  );

 


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // const handleClick = () => {
  //   reFetchData(
  //     // `/buses/searchbus?to=${credentials.destination}&from=${credentials.cLocation}&date=${credentials.date}`
  //   );
  // };
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
              <input
                id="cLocation"
                value={credentials.cLocation}
                onChange={handleChange}
                type="text"
                // placeholder={cLocation}
              />
            </div>

            {/* --------destination------------- */}
            <div className="lsItem">
              <label>Destination </label>
              <input
                type="text"
                id="destination"
                value={credentials.destination}
                onChange={handleChange}
                // placeholder={destination}
              />
            </div>

            {/* -------travel date----------- */}
            <div className="lsItem">
              <label>Travel date </label>
              <input
                type="date"
                id="date"
                value={credentials.date}
                onChange={handleChange}
              />
            </div>

  
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

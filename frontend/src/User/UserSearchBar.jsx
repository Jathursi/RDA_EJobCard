import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const vehicleNum = e.target.vehicle_num.value;

    axios.get(`http://rda-e-job-card.vercel.app/api/search/vehicleUser/${vehicleNum}`)
      .then((response) => {
        // Redirect to the results page with the vehicle data
        navigate(`/user/details/${vehicleNum}`, { state: { vehicleData: response.data } });
      })
      .catch((error) => {
        console.log(error);
        alert('Vehicle not found');
      });
  };

  return (
    <div className="search-container">
      <div className="form-wrapper">
        <div className="search-title">Find your vehicle here ..</div>
        <div className="glow-container">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Enter your search here"
              className="search-input"
              name="vehicle_num"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="glow glow-3"></div>
          <div className="glow glow-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

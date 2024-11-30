import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState([]);
  const { vehicle_num } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/api/search/vehicleUser/${vehicle_num}`)
      .then((response) => {
        // Check if the response is an array and get the first element
        const vehicleData = Array.isArray(response.data) ? response.data[0] : response.data;
        setData(vehicleData);
        console.log('Vehicle data:', vehicleData);
      })
      .catch((error) => {
        console.error(error);
        alert('Vehicle not found');
      });
  }, [vehicle_num]);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/userdet/useveh/${vehicle_num}`)
      .then((response) => {
        setDetails(response.data);
        console.log('User details:', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [vehicle_num]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='feedCont'>
      <div className='feedTitle'>Vehicle Details</div>
      <div className='feedForm'>
        <div className='feedFormRow'>
          <label>Vehicle Number:</label>
          <span>{data.Vehicle_num}</span>
        </div>
        <div className='feedFormRow'>
          <label>Vehicle Type:</label>
          <span>{data.Vehicle_type}</span>
        </div>
        {details.map((detail, index) => (
          <div key={index} className='feedFormRowtit'>
            <label>{detail.title}</label>
            <span>{detail.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetail;
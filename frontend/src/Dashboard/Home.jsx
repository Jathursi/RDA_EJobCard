import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home({ searchTerm }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/api/reg/Regist', { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError('An error occurred. Please try again.');
        console.error('Error fetching data:', err);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm?.toLowerCase() ?? '')
    )
  );

  return (
    <div className="tablePage">
      <div className='tableContainer'>
        <table className='dataTable'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Vehicle No</th>
              <th>Vehicle Type</th>
              <th className='hid'>Vehicle Allocation</th>
              <th className='hid'>Reference No</th>
              <th className='hid'>TR/checklist</th>
              <th className='hid'>Date</th>
              <th className='hid'>Time</th> 
              <th className='hid'>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.Vehicle_num}</td>
                <td>{book.Vehicle_type}</td>
                <td className='hid'>{book.Location}</td>
                <td className='hid'>{book.Reference}</td>
                <td className='hid'>{book.Response}</td>
                <td className='hid'>{new Date(book.createdAt).toLocaleDateString()}</td>
                <td className='hid'>{new Date(book.createdAt).toLocaleTimeString()}</td>
                <td className='hid'>{book.Year}</td>
                <td className='sucbtn'>
                  <Link to={`/dashes/${book.id}`}>
                    <button className='btn-suc' type="button">Data</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
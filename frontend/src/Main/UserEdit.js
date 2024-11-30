import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserEdit() {
  const { id } = useParams();
  const [data, setData] = useState({
    first_Name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    // Send the token in cookies (if already set during login)
    axios.get(`http://localhost:8081/api/users/log/${id}`, { withCredentials: true })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    await axios.put(`http://localhost:8081/api/users/logup/${id}`, data, { withCredentials: true });
    alert('User data updated successfully');
  } catch (err) {
    console.error('Error updating user data:', err);
    alert(err.response?.data?.error || 'An error occurred');
  }
};


  return (
    <div className='formContainer'>
      <div className='formTitle'>
        User Data
      </div>
      <form className='form' onSubmit={handleUpdate}>
        <div className='formGroup'>
          <label className='label'>User Name</label>
          <input
            type='text'
            name='first_Name'
            className='input'
            value={data.first_Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label className='label'>Email</label>
          <input
            type='email'
            name='email'
            className='input'
            value={data.email}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className='formGroup'>
          <label className='label'>Role</label>
          <input
            type='text'
            name='role'
            className='input'
            value={data.role}
            onChange={handleChange}
            required
          />
        </div>
        <button className='submitButton' type='submit'>Update</button>
      </form>
    </div>
  );
}

export default UserEdit;
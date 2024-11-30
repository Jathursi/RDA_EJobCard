// Admin.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Dashboard/Home';
import Regist from '../Dashboard/Regist';
import Topbar from '../Dashboard/Topbar';
import UserEdit from '../Main/UserEdit';
import Feeds from '../Dashboard/Feeds';

function Admin() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='cover'>
      <Topbar onSearch={handleSearch} />
      <div className='main'>
        <Routes>
          <Route path='/*' element={<Navigate to='/home' />} />
          <Route path='/useredit/:id' element={<UserEdit />} />
          <Route path='/home' element={<Home searchTerm={searchTerm}/>} />
          <Route path='/dash' element={<Dashboard searchTerm={searchTerm} />} />
          <Route path='/regist' element={<Regist />} />
          <Route path='/feeds' element={<Feeds />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
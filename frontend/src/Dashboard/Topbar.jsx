import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import { IoReorderThree } from "react-icons/io5";
import Moview from './Moview'; // Ensure Moview is correctly imported
import { IoMdLogOut } from "react-icons/io";

function Topbar({ onSearch }) {
  const navigate = useNavigate();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false); // Close the sidebar
  };

  return (
    <div className='top-bar'>
      <div className='top-bar-title'>Road Development Authority</div>
      <div className='top-bar-hid'>RDA</div>
      <div className='top-bar-middle'>
        <Search onSearch={onSearch} />
      </div>
      <div className='top-bar-hidrig' onClick={toggleSideNav}>
        <IoReorderThree />
        <div className='top-bar-mob'>
          <Moview isOpen={isSideNavOpen} onClose={closeSideNav} /> {/* Pass onClose handler */}
        </div>
      </div>
      <div className='top-bar-right'>
        <div className='top-bar-home'>
          <div className='top-bar-item' onClick={() => navigate('/home')}>Home</div>
          <div className='top-bar-item' onClick={() => navigate('/dash')}>Entroll</div>
          <div className='top-bar-item' onClick={() => navigate('/regist')}>Regist</div>
          <div className='top-bar-item' onClick={() => navigate('/feeds')}>Feedbacks</div>
          <div className='top-bar-items' onClick={() => navigate('/')}><IoMdLogOut /></div>
          
        </div>
      </div>
    </div>
  );
}

export default Topbar;

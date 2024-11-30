import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Search from './Search';
import { IoReorderThree } from "react-icons/io5";
import MobUser from './MobUser';

function UserTopbar() {
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
      <div className='top-bar-hidrig' onClick={toggleSideNav}>
        <IoReorderThree />
        <div className='top-bar-mob'>
          <MobUser isOpen={isSideNavOpen} onClose={closeSideNav} /> 
        </div>
      </div>
      <div className='top-bar-right'>
        <div className='top-bar-home'>
          <div className='top-bar-item' onClick={() => navigate('search')}>Home</div>
          <div className='top-bar-item' onClick={() => navigate('feedback')}>Feedback</div>
          <div className='top-bar-item' onClick={() => navigate('/')}>Log out</div>
        </div>
      </div>
    </div>
  )
}

export default UserTopbar
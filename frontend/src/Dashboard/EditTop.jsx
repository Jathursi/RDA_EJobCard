import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Search from './Search';
import { IoReorderThree } from "react-icons/io5";
// import MobEstView from '../Outlet/MobEstView';
import MobViewEstimate from '../Outlet/MobViewEstimate';

function EditTop() {
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
          <MobViewEstimate isOpen={isSideNavOpen} onClose={closeSideNav} /> {/* Pass onClose handler */}
        </div>
      </div>
      <div className='top-bar-right'>
        <div className='top-bar-item' onClick={() => navigate('/home')}>Home</div>
      </div>
    </div>
  )
}

export default EditTop
import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'
import Dashtop from '../Dashboard/Dashtop'
function Dash() {
  return (
    <div className='main_dash'>
      <div className='top-bar'>
        <Dashtop />
      </div>
        {/* <Dashtop /> */}
      <div className='mainContent'>
        <SideNav />
        <div className='main_dash_content'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dash
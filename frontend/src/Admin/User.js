import React from 'react'
import UserTopbar from '../User/UserTopbar'
import {Outlet} from 'react-router-dom'

function User() {
  return (
    <div className='cover'>
      <UserTopbar />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  )
}

export default User
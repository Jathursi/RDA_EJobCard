import React from 'react'
import { useNavigate } from 'react-router-dom'
function Image() {
    const navigate = useNavigate();
  return (
    <div className='popup'>
        {/* when click on it an external pop up box should open with  3 list when i click on it it should routes */}
        <div className='popup_menu' onClick={()=>navigate('implement')}>
            Initial
        </div>
        <div className='popup_menu' onClick={()=>navigate('others')}>
            Implement
        </div>
        <div className='popup_menu' onClick={()=>navigate('estimation')}>
            Completion
        </div>
    </div>
  )
}

export default Image
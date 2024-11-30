import React from 'react';
import { useNavigate } from 'react-router-dom';

function MobUser({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <div className={`mob-nav ${isOpen ? 'open' : ''}`}>
      <div className="mob-nav-content">
        <button className="close-btn" onClick={onClose}>×</button> {/* Add this for closing */}
        <div className="mob-bar-right">
          <div className="mob-bar-item" onClick={() => navigate('search')}>Home</div> {/* Close on click */}
          {/* <div className="mob-bar-item" onClick={() => navigate('detail')}>impEdit</div> */}
          <div className="mob-bar-item" onClick={() => navigate('feedback')}>Feedback</div>
        </div>
      </div>
    </div>
  );
}

export default MobUser;

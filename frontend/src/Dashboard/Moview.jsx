import React from 'react';
import { useNavigate } from 'react-router-dom';

function Moview({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <div className={`mob-nav ${isOpen ? 'open' : ''}`}>
      <div className="mob-nav-content">
        <button className="close-btn" onClick={onClose}>×</button> {/* Add this for closing */}
        <div className="mob-bar-right">
          <div className="mob-bar-item" onClick={() => navigate('/home')}>Home</div> {/* Close on click */}
          <div className="mob-bar-item" onClick={() => navigate('/dash')}>Entroll</div>
          <div className="mob-bar-item" onClick={() => navigate('/regist')}>Regist</div>
          <div className="mob-bar-item" onClick={() => navigate('/feeds')}>Feedbacks</div>
          <div className="mob-bar-item" onClick={() => navigate('/')}>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Moview;

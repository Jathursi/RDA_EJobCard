import React from 'react';
import { useNavigate } from 'react-router-dom';

function MobViewEstimate({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <div className={`mob-nav ${isOpen ? 'open' : ''}`}>
      <div className="mob-nav-content">
        <button className="close-btn" onClick={onClose}>×</button> {/* Add this for closing */}
        <div className="mob-bar-right">
          <div className="mob-bar-item" onClick={() => navigate('regEdit')}>regEdit</div> {/* Close on click */}
          <div className="mob-bar-item" onClick={() => navigate('impEdit')}>impEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('otherEdit')}>otherEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('estEdit')}>estEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('supEdit')}>supEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('compEdits')}>compEdits</div>
          <div className="mob-bar-item" onClick={() => navigate('outEdit')}>outEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('resEdit')}>resEdit</div>
          <div className="mob-bar-item" onClick={() => navigate('/home')}>Home</div>
        </div>
      </div>
    </div>
  );
}

export default MobViewEstimate;

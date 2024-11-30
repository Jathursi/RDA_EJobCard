import React from 'react';
import { useNavigate } from 'react-router-dom';

function MobEstView({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <div className={`mob-nav ${isOpen ? 'open' : ''}`}>
      <div className="mob-nav-content">
        <button className="close-btn" onClick={onClose}>×</button> {/* Add this for closing */}
        <div className="mob-bar-right">
          <div className="mob-bar-item" onClick={() => navigate('implement')}>Implement</div> {/* Close on click */}
          <div className="mob-bar-item" onClick={() => navigate('others')}>Other Cost</div>
          <div className="mob-bar-item" onClick={() => navigate('estimation')}>Estimation</div>
          <div className="mob-bar-item" onClick={() => navigate('suppliment')}>Supplimentary</div>
          <div className="mob-bar-item" onClick={() => navigate('completion')}>Completion</div>
          <div className="mob-bar-item" onClick={() => navigate('outsource')}>Out Source</div>
          <div className="mob-bar-item" onClick={() => navigate('userInf')}>User</div>
          <div className="mob-bar-item" onClick={() => navigate('images')}>Inital Images</div>
          <div className="mob-bar-item" onClick={() => navigate('imimage')}>Implement Image</div>
          <div className="mob-bar-item" onClick={() => navigate('compimg')}>Completion Images</div>
          <div className="mob-bar-item" onClick={() => navigate('resourse')}>Resource</div>
          <div className="mob-bar-item" onClick={() => navigate('estPrint')}>Estimation Print</div>
          <div className="mob-bar-item" onClick={() => navigate('estPrint')}>Job_card Print</div>
          <div className="mob-bar-item" onClick={() => navigate('authEmail')}>Estimation Email</div>
          <div className="mob-bar-item" onClick={() => navigate('compEmail')}>Authority Email</div>

          <div className="mob-bar-item" onClick={() => navigate('/home')}>Home</div>
        </div>
      </div>
    </div>
  );
}

export default MobEstView;

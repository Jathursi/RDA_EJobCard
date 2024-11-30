import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, style, onButtonClick }) {
  // const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()} style={{ top: `${style.top}px`, left: `${style.left}px` }}>
      <div className="modal-header">
        <h2>Image</h2>
        <span className="close-icon" onClick={onClose}>&times;</span>
      </div>
      <div className="modal-options">
        <button onClick={() => onButtonClick('images')}>Initial</button>
        <button onClick={() => onButtonClick('imimage')}>Implement</button>
        <button onClick={() => onButtonClick('compimg')}>Completion</button>
      </div>
    </div>
  );
}

export default Modal;

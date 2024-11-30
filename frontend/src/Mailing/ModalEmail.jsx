import React from 'react';

function ModalEmail({ isOpen, onClose, style, onButtonClick }) {

  if (!isOpen) return null;
  
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()} style={{ top: `${style.top}px`, left: `${style.left}px` }}>
      <div className="modal-header">
        <h2>Email</h2>
        <span className="close-icon" onClick={onClose}>&times;</span>
      </div>
      <div className="modal-options">
        <button onClick={() => onButtonClick('authEmail')}>Estimation</button>
        <button onClick={() => onButtonClick('compEmail')}>Completion</button>
      </div>
    </div>
  );
}

export default ModalEmail;

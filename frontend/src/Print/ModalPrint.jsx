import React from 'react';

function ModalPrint({ isOpen, onClose, style, onButtonClick }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()} style={{ top: `${style.top}px`, left: `${style.left}px` }}>
      <div className="modal-header">
        <h2>Print</h2>
        <span className="close-icon" onClick={onClose}>&times;</span>
      </div>
      <div className="modal-options">
        <button onClick={() => onButtonClick('estPrint')}>Estimation</button>
        <button onClick={() => onButtonClick('comPrint')}>Completion</button>
      </div>
    </div>
  );
}

export default ModalPrint;

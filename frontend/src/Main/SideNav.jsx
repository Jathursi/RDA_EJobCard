import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ModalEmail from '../Mailing/ModalEmail';
import ModalPrint from '../Print/ModalPrint';
function SideNav() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEmailOpen, setIsModalEmailOpen] = useState(false);
  const [isModalPrintOpen, setIsModalPrintOpen] = useState(false); // State for Print Modal
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [modalEmailPosition, setModalEmailPosition] = useState({ top: 0, left: 0 });
  const [modalPrintPosition, setModalPrintPosition] = useState({ top: 0, left: 0 });

  // Opens the modal on hover
  const handleMouseEnter = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.top, left: rect.right });
    setIsModalOpen(true);
    setIsModalEmailOpen(false); // Close email modal if opening image modal
    setIsModalPrintOpen(false); // Close print modal if opening image modal
  };

  // Opens the modal on hover for Print
  const handleMouseEnterPrint = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPrintPosition({ top: rect.top, left: rect.right });
    setIsModalPrintOpen(true);
    setIsModalOpen(false); // Close image modal if opening print modal
    setIsModalEmailOpen(false); // Close email modal if opening print modal
  };

  // Opens the modal on hover for Email
  const handleMouseEnterEmail = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalEmailPosition({ top: rect.top, left: rect.right });
    setIsModalEmailOpen(true);
    setIsModalOpen(false); // Close image modal if opening email modal
    setIsModalPrintOpen(false); // Close print modal if opening email modal
  };

  // Close the modals when clicking outside of them
  const handleOverlayClick = () => {
    setIsModalOpen(false);
    setIsModalEmailOpen(false);
    setIsModalPrintOpen(false); // Close Print modal when overlay is clicked
  };

  const handleButtonClick = (route) => {
    navigate(route);
    // Close modals when navigating
    setIsModalOpen(false);
    setIsModalEmailOpen(false);
    setIsModalPrintOpen(false); // Close Print modal when navigating
  };

  return (
    <div className='sideNav'>
      {/* <div className='side_head'>RDA</div> */}
      <ul className='sidenav-menu'>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('implement'); }}>Implement</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('others'); }}>Other Cost</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('estimation'); }}>Estimation</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('suppliment'); }}>Supplimentary</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('completion'); }}>Completion</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('outsource'); }}>Out Source</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('userInf'); }}>User</li>
        <li onClick={() => { setIsModalOpen(false); setIsModalEmailOpen(false); setIsModalPrintOpen(false); navigate('resourse'); }}>Resource</li>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => {}} // Do not close on mouse leave
        >
          Image
        </li>
        <li
          onMouseEnter={handleMouseEnterPrint}
          onMouseLeave={() => {}} // Do not close on mouse leave
        >
          Print
        </li>
        <li 
          onMouseEnter={handleMouseEnterEmail}
          onMouseLeave={() => {}} // Do not close on mouse leave
        >
          Email
        </li>
      </ul>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          style={{ top: modalPosition.top, left: modalPosition.left }}
          onButtonClick={handleButtonClick} // Handle button clicks
        />
        <ModalEmail 
          isOpen={isModalEmailOpen} 
          onClose={() => setIsModalEmailOpen(false)} 
          style={{ top: modalEmailPosition.top, left: modalEmailPosition.left }}
          onButtonClick={handleButtonClick} // Handle button clicks
        />
        <ModalPrint 
          isOpen={isModalPrintOpen}  // Use the updated state
          onClose={() => setIsModalPrintOpen(false)}  // Close Print modal
          style={{ top: modalPrintPosition.top, left: modalPrintPosition.left }}
          onButtonClick={handleButtonClick} // Handle button clicks
        />
      </div>
    </div>
  );
}

export default SideNav;

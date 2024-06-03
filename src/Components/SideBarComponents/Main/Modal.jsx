import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ show, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

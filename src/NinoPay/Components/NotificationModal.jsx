import React from 'react';
import '../pages/pages-css/modal.css';

const NotificationModal = ({ isOpen, onClose, messages }) => {
  if (!isOpen || messages.length === 0) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Notifications</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li> // Fixed missing return in map
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotificationModal;
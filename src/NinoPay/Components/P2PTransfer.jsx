import React, { useState } from 'react';
import '../pages/pages-css/transferform.css';

const P2PTransfer = () => {
  const [amount, setAmount] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleSearch() {
    if (!username || !amount) {
      alert('Please fill in all details');
      return;
    }
    setIsLoading(true); // Start loading
    console.log('Sending...', { username, amount });

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setShowModal(true); // Show success modal
    }, 2000);
  }

  function closeModal() {
    setShowModal(false); // Close the modal
    setUsername(''); // Reset username
    setAmount(''); // Reset amount
  }

  return (
    <>
  
    <div className="transfer-form">
      <h2>P2P Transfer</h2>
      <input
        type="text"
        placeholder="Enter Recipient Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="send-btn" onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Money'}
      </button>
      {isLoading && <div className='progress-bar'></div>}
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Transfer Successful!</h3>
            <p>
              You have successfully transferred <strong>${amount}</strong> to{' '}
              <strong>{username}</strong>.
            </p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div></>
  );
};

export default P2PTransfer;
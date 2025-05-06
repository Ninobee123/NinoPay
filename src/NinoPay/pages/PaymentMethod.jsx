import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaWallet, FaMobileAlt, FaQrcode } from 'react-icons/fa';
import '../pages/pages-css/paymentmethod.css';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
const [proceed,setProceed] = useState(false)
const [isLoading, setIsLoading] = useState(false);
  const PaymentMethods = [
    { id: 'card', name: 'Debit/Credit Card', icon: <FaCreditCard /> },
    { id: 'bank', name: 'Bank Transfer', icon: <FaUniversity /> },
    { id: 'wallet', name: 'Wallet', icon: <FaWallet /> },
    { id: 'ussd', name: 'USSD', icon: <FaMobileAlt /> },
    { id: 'qr', name: 'QR CODE', icon: <FaQrcode /> },
  ];

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleProceed = () => {
    // alert(`Proceeding with ${selectedMethod?.name}`);
   if (selectedMethod?.name) {
    setProceed(true)
    setIsLoading(true); // Start loading

    setTimeout(() => {
      setIsLoading(false); // Stop loading
     
    }, 4000);
  }
   
  };

  return (
    <div className="payment-container">
      <h2>Select a Payment Method</h2>
      <div className="methods">
        {PaymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method)}
            className={`method-card ${selectedMethod?.id === method.id ? 'selected' : ''}`}
          >
            <span>{method.icon}</span>
            <p>{method.name}</p>
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="proceed-section fade-in">
          <p className="confirmation">Selected: {selectedMethod.name}</p>
          <button onClick={handleProceed} className="proceed-btn">
            Proceed
          </button>
        </div>
      )}
      <p>{proceed?`Proceeding with ${selectedMethod?.name}`:""}</p>
      {isLoading && <div className='progress-bar'></div>}
      {isLoading===false}
    </div>
  );
};

export default PaymentMethod;
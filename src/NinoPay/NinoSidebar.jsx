import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClock, FiRefreshCw, FiMapPin, FiHelpCircle } from 'react-icons/fi';
import { FaBell, FaCreditCard, FaPaperPlane } from 'react-icons/fa';

const NinoSidebar = ({ isOpen, setModalOpen }) => {
  const [activeItem, setActiveItem] = useState('dashboard'); // State to track the active menu item

  const styles = {
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease', // Smooth transition for sliding effect
  };

  const handleItemClick = (item) => {
    setActiveItem(item); // Update the active item
  };

  return (
    <>
      <aside className="nino-sidebar" style={styles}>
        <div className={activeItem === 'dashboard' ? 'active' : ''}>
          <Link to="/" onClick={() => {handleItemClick('dashboard')  
             setModalOpen(false)}}>
            <p>
              <span>
                <FiHome />
              </span>{' '}
              Dashboard
            </p>
          </Link>
        </div>

        <div className={activeItem === 'transactions' ? 'active' : ''}>
          <Link to="/transactions" onClick={() => {handleItemClick('transactions')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FiClock />
              </span>{' '}
              Transactions
            </p>
          </Link>
        </div>

        <div className={activeItem === 'sendMoney' ? 'active' : ''}>
          <Link to="/send money" onClick={() => {handleItemClick('sendMoney')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FaPaperPlane />
              </span>{' '}
              Send Money
            </p>
          </Link>
        </div>

        <div className={activeItem === 'notification' ? 'active' : ''}>
          <Link  onClick={() => {handleItemClick('notification')
          setModalOpen(true) }
          }>
            <p>
              <span>
                <FaBell />
              </span>{' '}
             Notification
            </p>
          </Link>
        </div>

        <div className={activeItem === 'converter' ? 'active' : ''}>
          <Link to="/converter" onClick={() => {handleItemClick('converter')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FiRefreshCw />
              </span>{' '}
              Converter
            </p>
          </Link>
        </div>

        <div className={activeItem === 'trackPayment' ? 'active' : ''}>
          <Link to="/trackPayment" onClick={() => {handleItemClick('trackPayment')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FiMapPin />
              </span>{' '}
              Track Payment
            </p>
          </Link>
        </div>

        <div className={activeItem === 'paymentMethod' ? 'active' : ''}>
          <Link to="/payment method" onClick={() => {handleItemClick('paymentMethod')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FaCreditCard />
              </span>{' '}
              Payment Methods
            </p>
          </Link>
        </div>

        <div className={activeItem === 'helpSupport' ? 'active' : ''}>
          <Link to="/helpSupport" onClick={() => {handleItemClick('helpSupport')
             setModalOpen(false)
          }}>
            <p>
              <span>
                <FiHelpCircle />
              </span>{' '}
              Help & Support
            </p>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default NinoSidebar;
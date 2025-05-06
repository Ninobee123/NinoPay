import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import allMessages from './NinoPay/data/notificationMessages';
import HeaderNino from './NinoPay/HeaderNino';
import NinoSidebar from './NinoPay/NinoSidebar';
import NotificationModal from './NinoPay/Components/NotificationModal';
import exchangeRates from './NinoPay/data/exchangeRates';
import Dasboard from './NinoPay/pages/Dasboard';
import Transactions from './NinoPay/pages/Transactions';
import SendMoney from './NinoPay/pages/SendMoney';
import CurrencyConverter from './NinoPay/pages/CurrencyConverter';
import PaymentMethod from './NinoPay/pages/PaymentMethod';
const App = () => {
  const [isdarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [newMessages, setNewMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * allMessages.length);
      const newMessage = allMessages[randIndex];

      setNewMessages((prev) => [...prev, newMessage]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply the theme class to the body
    if (isdarkMode) {
      document.body.classList.add('green-mode');
    } else {
      document.body.classList.remove('green-mode');
    }
  }, [isdarkMode]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Router>
        <NinoSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setModalOpen={setModalOpen}
        />

        <HeaderNino
          isdarkMode={isdarkMode}
          setIsDarkMode={setIsDarkMode}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
        <NotificationModal
          isOpen={modalOpen}
          onClose={handleClose}
          messages={newMessages}
        />
        <main >
          <Routes>
            <Route
              path="/"
              element={
                <Dasboard
                  exchangeRates={exchangeRates}
                  isdarkMode={isdarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/send money" element={<SendMoney/>} />
            <Route path="/converter" element={<CurrencyConverter/>}/>
            <Route path='/payment method' element={<PaymentMethod/>}/>
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
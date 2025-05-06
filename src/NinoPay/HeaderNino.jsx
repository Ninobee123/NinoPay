import React from 'react';
import { FiBell } from 'react-icons/fi';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import userImg from '../assets/flag-image/user-2.png';

const HeaderNino = ({ isdarkMode, setIsDarkMode, isOpen, toggleMenu }) => {
  return (
    <div className="header" style={{ background: "white" }}>
      <div className="header-left">
        <h2>
          <span>&#9992;</span> NinoPay
        </h2>
      </div>
      <div className="toggleMenu">
        <button className="toggle-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="header-right">
        <div className="right-content">
          <div className="notification">
            <span>
              <FiBell />
            </span>
            <span className="notis">5</span>
          </div>
          <div className="user-profile">
            <img src={userImg} alt="username" />
          </div>
          <div className="drop-down">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              {isdarkMode ? <FaMoon /> : <FaSun />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNino;
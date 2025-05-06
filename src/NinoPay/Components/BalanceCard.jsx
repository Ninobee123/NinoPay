import React, { useEffect, useState } from 'react'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import background1 from '../../assets/flag-image/BG-1.jpg'
import background2 from '../../assets/flag-image/BG-2.jpg'
import background3 from '../../assets/flag-image/BG-3.jpg'
import background4 from '../../assets/flag-image/BG-4.jpg'
import background5 from '../../assets/flag-image/BG-5.jpg'
import green1 from '../../assets/flag-image/green-bg-1.jpg'
import green2 from '../../assets/flag-image/green-bg-2.jpg'
import green3 from '../../assets/flag-image/green-bg-3.webp'
import green4 from '../../assets/flag-image/green-bg-4.webp'
import green5 from '../../assets/flag-image/green-bg-5.jpg'
const BalanceCard = ({ eyeSeen, setEyeSeen,isdarkMode, setIsDarkMode }) => {
  const images =!isdarkMode?[background2, background1,background3,background4,background5]:[green1,green2,green3,green4,green5]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const styles = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderTopRightRadius: "12px"
  };

  return (
    <div className="balance-card" style={styles}>
      <div className="balance-header">
        <h4>Your Balance</h4>
        <button className="eye-btn" onClick={() => setEyeSeen(!eyeSeen)}>
          {eyeSeen ? <FiEyeOff className="eye-icon"/> : <FiEye className="eye-icon" />}
        </button>
      </div>
      <h1 className="balance-amount">
        {eyeSeen ? "$200,730.09" : "******"}
        <span>{eyeSeen ? " Available" : ""}</span>
      </h1>
    </div>
  );
};

export default BalanceCard;

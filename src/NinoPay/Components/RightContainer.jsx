import React, { useState, useEffect } from 'react';

const RightContainer = ({ exchangeRates }) => {
  const [rates, setRates] = useState(exchangeRates);
  const [lastUpdated, setLastUpdated] = useState(0);

  // Update rates every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(prevRates =>
        prevRates.map(rate => {
          const randNumber = (Math.random() * 0.5); // small random change

          const newTrend = Math.random() > 0.5 ? 'rose' : 'fall';

          const newPercentageChange = newTrend === 'rose'
            ? rate.percentageChange + randNumber
            : rate.percentageChange - randNumber;

          const newExchangeRate = newTrend === 'rose'
            ? rate.exchangeRate + (randNumber / 5)
            : rate.exchangeRate - (randNumber / 5);

          return {
            ...rate,
            trend: newTrend,
            percentageChange: newPercentageChange,
            exchangeRate: newExchangeRate,
          };
        })
      );

      setLastUpdated(0); // Reset last updated timer
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Increase "last updated" seconds every 3 second
  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(prev => prev + 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="exchange-card">
      <div className="exchange-header">
        <h2>Exchange Rates</h2>
        <p style={{color:'#333'}}>{lastUpdated} seconds ago</p>
      </div>

      {rates.map((rate, index) => (
        <div className="rate-item" key={index}>
          <img src={rate.image} alt={rate.country} />
          <div className="info">
            <div>{rate.baseCurrency}/{rate.abbreviation}</div>
            <small>{rate.currency}</small>
          </div>
          <div className="value">
            <strong>
              {rate.exchangeRate.toFixed(2)} {rate.abbreviation}
            </strong>
            <span className={rate.trend === 'rose' ? 'up' : 'down'}>
              {rate.percentageChange.toFixed(2)}% {rate.trend === 'rose' ? '↑' : '↓'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightContainer;

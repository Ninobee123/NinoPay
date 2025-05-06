import React, { useState } from 'react'
import CurrencyExchange from '../data/currencyExchange' // Commented out as it's unused
import '../pages/pages-css/currency-converter.css'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const currencyRate = CurrencyExchange; // Commented out as it's unused
  
  const currencyList = ['NGN', 'USD', "EUR", "GBP", "JPY", "INR", "CAD", "BRL", "ZAR", "CNY"]

  const handleConvert = () => {
    setIsLoading(true)
    setTimeout(() => {
      const rate = currencyRate[fromCurrency]?.[toCurrency] // Commented out as it's unused

      if (!rate) {
        setConvertedAmount("Rate not available") // Commented out as it's unused
      } else {
        const result = (parseFloat(amount) * rate).toFixed(2) // Commented out as it's unused
        setConvertedAmount(result) // Commented out as it's unused
      }
      setIsLoading(false)
    }, 2000);
  }
function swapBtn(){
  const temp = fromCurrency;
  setFromCurrency(toCurrency)
setToCurrency(temp)
}
  return (
    <div className='currency-converter'>
      <div className='form'>
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={(e) => {
          setFromCurrency(e.target.value)
        }}>
          {currencyList.map(curr => (
            <option value={curr} key={curr}>{curr}</option>
          ))}
        </select>

        <label>To Currency:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyList.map(curr => (
            <option value={curr} key={curr}>{curr}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="convert-btn" onClick={handleConvert}>Convert</button>
        <button className='swap-btn' onClick={swapBtn}>&#8644; Swap</button>
        <p className="converted-result">
          {isLoading ? 'Loading...' : convertedAmount ? `${convertedAmount}` : ''}
          {isLoading && <div className='progress-bar'></div>}
        </p>
      </div>
    </div>
  )
}

export default CurrencyConverter


import React, { useEffect, useState } from 'react';
import './pages-css/Transactionpages.css';
import transactions from '../data/transaction';

const Transactions = () => {
  const [transaction, setTransaction] = useState([]);
  const [originalTransactions, setOriginalTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
const [progress,setProgress] = useState(0)
  // Load transactions on component mount
  useEffect(() => {
    let progressInterval = setInterval(() => {
      setProgress((prev)=>{
if (prev >= 100) {
  clearInterval(progressInterval)
  setLoading(false); // Simulate loading for 2 seconds
  return 100
}
return prev + 10
      })
    }, 500);
    return ()=> clearInterval(progressInterval)
  }, []);
  useEffect(()=>{
    setTimeout(() => {
      setTransaction(transactions);
      setOriginalTransactions(transactions);
     
    }, 3000);
  },[])

  // Filter transactions by "Success" status
  function handleFilterSuccess() {
    const filtered = originalTransactions.filter((tx) => tx.status.toLowerCase() === 'success');
    setTransaction(filtered);
  }
//filter failed transactions
function handleFailed(){
  const failed = originalTransactions.filter((tx) => tx.status.toLowerCase() === 'failed');
  setTransaction(failed);
}
  // Reset transactions and search input
  function handleReset() {
    setTransaction(originalTransactions);
    setSearch('');
  }

  // Search transactions by name
  function handleSearch(e) {
    const searchValue = e.target.value;
    setSearch(searchValue);
    const filtered = originalTransactions.filter((tx) =>
      tx.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setTransaction(filtered);
  }

  return (
    <div className="transactionPage">
      <h2>Transactions</h2>
      <div className="transactionActions">
        <input
          type="text"
          placeholder="Search by name.."
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleFilterSuccess}>&#9989;</button>
        <button onClick={handleFailed}>&#10060;</button>
        <button onClick={handleReset}>&#9851;</button>
      </div>
      {loading ? (
        <div className='style1'>
          <div className="style2">
            <div style={{
              width:`${progress}%`,height:"100%",backgroundImage:"linear-gradient(90deg,#6a11cb 0%, #2575fc 100%)",transition:"width 0.3s ease"
            }}></div>
          </div>
          <p className='style-text'>
            Loading transactions... {progress}%
          </p>
        </div>
      ) : (
        <div className="transactionlist">
          {transaction.map((tx) => (
            <div key={tx.id} className={`transaction-card ${tx.status.toLowerCase()}`}>
              <div className="transactionInfo">
                <h4>{tx.name}</h4>
                <p>
                  {tx.type} - ${tx.amount}
                </p>
                <p>
                  Status: <span className={tx.status==="success"?"green":tx.status==="failed"?"red":tx.status==="pending"?"orange":null}>{tx.status}</span>
                </p>
                <p>Date: {tx.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transactions;
import React,{useState} from 'react'
import recent from '../data/recentTransactions'
const RecentTransactions = ({recentShown}) => {
  const [details,setDetails] = useState(recent)
let personal = details.map(detail=>{
  return <>
  {recentShown &&
   <div className="transaction-item">
     <div className="transaction-info" key={detail.name}>
  <img src={detail.image} alt={detail.name} className='profile-pic' />
  <div className="transaction-text">
    <span className="transaction-to">To: {detail.name}</span>
  </div>
  </div>
  <div className="transaction-amount">
  <span className={detail.status ==="outgoing"?"amount-outgoing":"amount-incoming"}>USD {detail.amount}</span>
  </div>
     </div>}
   
  </>
})
  return (
    <>
      <div className="transaction-card">
        <div className="transaction-header">
          <h3>Recent Transaction</h3>
          <a href="#">View All &gt;</a>
        </div>
    {personal}
      </div>
    </> 
  )
}

export default RecentTransactions
// <div className="transaction-item">
{/* 
</div> */}
import React from 'react'
import { FaGlobeAmericas, FaUserFriends } from 'react-icons/fa'
import { FiPlus,FiClock } from 'react-icons/fi'

const QuickAction = ({recentShown,setRecentShown}) => {
  return (
    <div className="quick-action">
      <h3>Quick Actions</h3>
      <div className="action-buttons">
        <div className='action-card'>
         <div className="icon-container">
          <span><FaUserFriends/></span>
         </div>
         <p>P2P Transfer</p>
        </div>

        <div className='action-card'>
        <div className="icon-container">
          <span><FaGlobeAmericas/></span>
        </div>
          <p>International Transfer</p>
        </div>
        <div className='action-card'>
       <div className="icon-container">
      <span> <FiPlus/></span>
       </div>
          <p>Setup Wallet</p>
        </div>
        <div className='action-card' onClick={()=>{recentShown?setRecentShown(false):setRecentShown(true)}}>
         <div className="icon-container">
          <span> <FiClock/></span>
        
         </div>
          <p>{!recentShown?"View Transactions History":"Close Transactions History"}</p>
        </div>
      </div>
    </div>
  )
}

export default QuickAction

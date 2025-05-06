import React from 'react'
import { FaMoneyBillWave, FaPaperPlane, FaPlusCircle } from 'react-icons/fa'
const BalanceAction = () => {
  return (
    <div className="balance-actions">
        <button className="action-btn">
          <span><FaPaperPlane/> Send Money</span>
        </button>
        <button className="action-btn">
          <span><FaMoneyBillWave/> Add Money</span>
        </button>
      </div>
  )
}

export default BalanceAction

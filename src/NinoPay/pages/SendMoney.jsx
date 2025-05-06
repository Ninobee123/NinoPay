import React,{useState,useEffect} from 'react'
import P2PTransfer from '../Components/P2PTransfer'
import './pages-css/SendMoney.css'
import InternationalTransfer from '../Components/InternationalTransfer'
const SendMoney = () => {
  const [activeTab,setActiveTab] = useState('p2p')

  return (
    <div className='send-money-container'>
      <h1 className="send-money-title">Send Money</h1>
    <div className="tab-buttons">
      <button className={activeTab === 'p2p'? "tab-btn clicked":"tab-btn"} onClick={()=>{setActiveTab("p2p")}}>
        P2P Transfer
      </button>
      <button className={activeTab === 'international'? "tab-btn clicked":"tab-btn"} onClick={()=>{setActiveTab("international")}}>
      International Transfer
      </button>
    </div>
    <div className="tab-content">
      {activeTab==="p2p" && <P2PTransfer/>}
      {activeTab==="international" && <InternationalTransfer/>}
    </div>
    </div>
  )
}

export default SendMoney

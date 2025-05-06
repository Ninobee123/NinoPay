import React,{useState} from 'react'
import RecentTransactions from './RecentTransactions'
import QuickAction from './QuickAction'
import BalanceAction from './BalanceAction'
import BalanceCard from './BalanceCard'
// import Transactions from './pages/Transactions'
const MainContent = ({isdarkMode, setIsDarkMode}) => {
  const [eyeSeen,setEyeSeen] = useState(true)
const [recentShown,setRecentShown] = useState(false)
  return (
    <div className='main-container'>
   <BalanceCard eyeSeen={eyeSeen} setEyeSeen={setEyeSeen} isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode}/>
    {/* actionnn */}
   <BalanceAction/>
     <QuickAction recentShown={recentShown} setRecentShown={setRecentShown}/>
   <RecentTransactions recentShown={recentShown}/>
    </div>
  )
}

export default MainContent




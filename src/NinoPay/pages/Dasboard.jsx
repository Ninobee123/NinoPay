import React from 'react'
import MainContent from '../Components/MainContent'
import RightContainer from '../Components/RightContainer'
const Dasboard = ({exchangeRates,isdarkMode, setIsDarkMode}) => {
  return (
    <>
    <MainContent isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode}/>
    < RightContainer exchangeRates={exchangeRates} />
    </>
  )
}

export default Dasboard

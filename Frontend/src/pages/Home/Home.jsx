// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Slidebar from '../../components/Slidebar/Slidebar' 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LoginPopup from '../../components/LoginPopup/LoginPopup'

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className='home'>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Header/>
      <Slidebar/>
      <Footer/>
    </div>
  )
}

export default Home

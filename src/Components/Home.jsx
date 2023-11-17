import React from 'react'
import Header from './Header'
import HeroSec from './HeroSec'
import Nav, { SubNavbar } from './Nav'
import DealOFTheWeek from './DealOFTheWeek'
import Poster from './Poster'
import Login from './Login'
import ProductPage from './ProductPage'

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <HeroSec/>
      <DealOFTheWeek />
      <Poster />
<SubNavbar />
      <Login />
      < ProductPage/>
    </div>
  )
}

export default Home

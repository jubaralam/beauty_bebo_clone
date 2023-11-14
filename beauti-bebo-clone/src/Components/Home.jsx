import React from 'react'
import Header from './Header'
import HeroSec from './HeroSec'
import Nav, { SubNavbar } from './Nav'
import DealOFTheWeek from './DealOFTheWeek'
import Poster from './Poster'

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <HeroSec/>
      <DealOFTheWeek />
      <Poster />
<SubNavbar />
    </div>
  )
}

export default Home

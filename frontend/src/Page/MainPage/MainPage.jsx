import React from 'react'
import Hero from './Hero'
import Contact from './Contact'
import Forum from './Forum'
const MainPage = () => {
  return (
    <div className='py-32'>
      MainPage
      <div>
        <Hero />
        <Forum />
        <Contact />
      </div>
    </div>
  )
}

export default MainPage
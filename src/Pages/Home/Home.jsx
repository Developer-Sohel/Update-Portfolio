import React from 'react'
import Hero from '../Hero/Hero'
import Expertise from '../Expertise/Expertise'
import { About } from '../About/About'
import Project from '../Project/Project'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Expertise/>
      <About/>
      <Project/>
    </div>
  )
}

export default Home
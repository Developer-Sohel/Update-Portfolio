import React from 'react'
import Hero from '../Hero/Hero'
import Expertise from '../Expertise/Expertise'
import { About } from '../About/About'
import Project from '../Project/Project'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Expertise/>
      <About/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home
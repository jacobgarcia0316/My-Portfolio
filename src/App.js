import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import AboutMe from './Components/AboutMe'
import Github from './Components/Github'
import Projects from './Components/Projects'

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/AboutMe" element = {<AboutMe />} />
          <Route path = "/Github" element = {<Github />} />
          <Route path = "/Projects" element = {<Projects />} />
        </Routes>
      </div>
    </>
  )
}

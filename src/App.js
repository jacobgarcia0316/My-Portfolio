import React from 'react'
import AboutMe from './Components/AboutMe';
import Github from './Components/Github';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import { Routes } from 'react-router-dom';
import CSS from './styles.css'

export default function App() {

  return (
    <div>
      <AboutMe />
      <Github />
          <Projects />
      <Navbar />
    </div>
  )
 
  return (
    <div>
      <h2>App.js functioning</h2>
    </div>
  )
}

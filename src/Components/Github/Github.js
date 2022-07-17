import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../Projects/Projects'
import CSS from './Github.css'


export default function Github() {
  return (
    <div className='github-page-container'>
      <div className='github-page-text'>
        <h1>github.js is up</h1>
      </div>
      <div className='github-link'>
        <a target = "_blank" href="https://github.com/jacobgarcia0316" >Link to Github</a>
      </div>
    </div>
  )
}


// https://github.com/jacobgarcia0316
import React from 'react'
import CSS from './AboutMe.css'
import image from '../Images/placeholder.jpg'


export default function AboutMe() {
  return (
    <div className='about-me-container'>
      <div className='about-me-text'>
        <h1>Jacob Roxas Garcia</h1>
      </div>
        <h2>my name is jacob and i like to eat sushi, work on cars and go to the gym </h2>
        <img src={image} alt="portrait" height={300} width={300} />
    </div>
  )
}

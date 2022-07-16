import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className="nav">
      <Link to ="/" className="home-page">Home Page</Link>
    <ul>
      <PageLink to ="/AboutMe">About Me</PageLink>
      <PageLink to ="/Github">Github</PageLink>
      <PageLink to ="/Projects">Projects</PageLink>
    </ul>
    </nav>
  )
}

function PageLink ({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch ({path: resolvedPath.pathname, end: true })

  return (
    <li className= {isActive ? "active" : ""}>
        <Link to = {to} {...props}> {children} </Link>
    </li>
  )
}

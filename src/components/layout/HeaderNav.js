import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <span>LR</span>
        <h1>Luciano Romero</h1>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to='/home' className={({isActive}) => isActive ? 'active' : '' }>Home</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio'>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/curriculum'>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

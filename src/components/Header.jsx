import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../assets/images/kasa-main.svg'


function Header() {
  let location = useLocation().pathname

  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} alt=''/>
      </Link>
        <div className='navBar'>
            <Link style={{textDecoration: location === '/' && 'underline'}} to="/">Accueil</Link>
            <Link style={{textDecoration: location === '/About' && 'underline'}} to="/About">À propos</Link>
        </div>
    </div>
  )
}

export default Header
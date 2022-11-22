import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../assets/images/kasa-main.svg'
import { DEVICE } from '../assets/styles/Device'

const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 7rem;
    @media ${DEVICE.tablet} {
    padding: 2rem;
    }
    a {
      &:hover {
            text-decoration: underline;
      }
    }
    .navBar {
        display: flex;
        gap: 2rem;
    }
`

function Header() {
  let location = useLocation().pathname

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt=''/>
      </Link>
        <div className='navBar'>
            <Link style={{textDecoration: location === '/' && 'underline'}} to="/">Accueil</Link>
            <Link style={{textDecoration: location === '/About' && 'underline'}} to="/About">À propos</Link>
        </div>
    </HeaderContainer>
  )
}

export default Header
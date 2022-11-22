import React from 'react'
import styled from 'styled-components'
import { PRIMARYCOLORS } from '../assets/styles/PrimaryColors'
import logo from '../assets/images/kasa-white.svg'

const FooterContainer = styled.div `
    background-color: ${PRIMARYCOLORS.black};
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
`

function Footer() {
  return (
    <FooterContainer>
        <div>
            <img src={logo} alt='' />
        </div>
        <span>© 2020 Kasa. All rights reserved© 2020 Kasa.</span>
    </FooterContainer>
  )
}

export default Footer
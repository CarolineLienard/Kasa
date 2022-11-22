import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'

import MainContainer from '../assets/styles/MainContainer'
import { PRIMARYCOLORS } from '../assets/styles/PrimaryColors'

const ErrorContainer = styled.div `
    text-align: center;
    padding: 7rem 7rem;
    span {
        color: ${PRIMARYCOLORS.kasa};
        font-weight: 700;
        font-size: 134px;
    }
    p {
        font-size: 26px;
        margin-top: 2rem;
        margin-bottom: 10rem;

    }
    a {
        &:hover {
            text-decoration: underline;
        }
    }
`

function Error() {
  return (
    <MainContainer>
        <Header />
        <ErrorContainer>
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </ErrorContainer>
    </MainContainer>
  )
}

export default Error
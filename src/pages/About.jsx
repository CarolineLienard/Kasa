import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'

import MainContainer from '../assets/styles/MainContainer'
import background from '../assets/images/background.png'
import { DEVICE } from '../assets/styles/Device'

const AboutContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 7rem;
    @media ${DEVICE.mobileL} {
    padding: 2rem;
    }
    .dropdown-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`

function About() {
  return (
    <MainContainer>
        <Header />
        <AboutContainer>
            <div>
                <img src={background} alt='' />
            </div>
            <div className='dropdown-container'>
                <Dropdown 
                    dropdownTitle='Fiabilité'
                    dropdownContent='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
                />
                <Dropdown 
                    dropdownTitle='Respect'
                    dropdownContent='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
                <Dropdown 
                    dropdownTitle='Service'
                    dropdownContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Dropdown 
                    dropdownTitle='Sécurité'
                    dropdownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </AboutContainer>
        <Footer />
    </MainContainer>
  )
}

export default About
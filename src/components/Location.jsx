import React from 'react'
import styled from 'styled-components'
import { DEVICE } from '../assets/styles/Device'

const LocationContainer = styled.div `
    display: flex;
    align-items: flex-end;
    width: 340px;
    height: 340px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-size: cover;
    border-radius: 10px;
    @media ${DEVICE.mobileL} {
      width: 380px;
    }
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    span {
        font-weight: 500;
        padding: 1rem;
    }
`

function Location({location}) {
  return (
    <LocationContainer style={{backgroundImage: `url(${location.cover})`}}>
        <span>{location.title}</span>
    </LocationContainer>
  )
}

export default Location
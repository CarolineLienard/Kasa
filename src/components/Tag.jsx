import React from 'react'
import styled from 'styled-components'
import { PRIMARYCOLORS } from '../assets/styles/PrimaryColors'

const TagContainer = styled.div `
  background-color: ${PRIMARYCOLORS.kasa};
  border-radius: 10px;
  text-align: center;
  width: fit-content;
  p {
    color: ${PRIMARYCOLORS.white};
    font-size: 14px;
    padding: 0.2rem 2rem;
  }
`

function Tag({tagName}) {
  return (
    <TagContainer>
      <p>{tagName}</p>
    </TagContainer>
  )
}

export default Tag
import React, { useState } from 'react'
import styled from 'styled-components'

import { PRIMARYCOLORS } from '../assets/styles/PrimaryColors'
import chevronDown from '../assets/icons/chevron-down.svg'
import chevronUp from '../assets/icons/chevron-up.svg'


const DropdownContainer = styled.div `
    width: 100%;
    .dropdown-title {
        background-color: ${PRIMARYCOLORS.kasa};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        position: relative; 
        cursor: pointer;
    }
    .dropdown-content {
        background-color: ${PRIMARYCOLORS.lightGrey};
        border-radius: 0px 0px 5px 5px;
        padding: 1.5rem;
        margin-top: -5px;
    }
`

function Dropdown({dropdownTitle, dropdownContent, mode}) {
  const [isOpen, setIsOpen] = useState(false)  

  function handleOpen () {
    setIsOpen(!isOpen)
  }

  return (
    <DropdownContainer>
        <div className='dropdown-title' onClick={handleOpen}>
            <span>{dropdownTitle}</span>
            <img src={isOpen ? chevronUp : chevronDown} alt='' />
        </div>
        <div className='dropdown-content' style={{display: isOpen ? 'block' : 'none'}}>
          { mode === 'list' ? 
            <ul>
              {dropdownContent?.map((el, i)=> {
                return(
                  <li key={i}>{el}</li>
                )
              })}
            </ul>
          : <p>{dropdownContent}</p>
          }
        </div>
    </DropdownContainer>
  )
}

export default Dropdown
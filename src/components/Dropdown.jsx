import React, { useState } from 'react'

import chevronDown from '../assets/icons/chevron-down.svg'
import chevronUp from '../assets/icons/chevron-up.svg'


function Dropdown({dropdownTitle, dropdownContent, mode}) {
  const [isOpen, setIsOpen] = useState(false)  

  function handleOpen () {
    setIsOpen(!isOpen)
  }

  return (
    <div className='dropdown'>
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
    </div>
  )
}

export default Dropdown
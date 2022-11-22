import React, { useEffect } from 'react'
import styled from 'styled-components'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

const SliderContainer = styled.div `
  width: 100%;
  box-sizing: border-box;
  .image-container {
    display: none;
    .image {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 415px;
      border-radius: 25px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      img {
        cursor: pointer;
        margin: 1rem;
      }
    }
  }
`

function Slider({options}) {
  let slideIndex = 1

  useEffect(() => {
    showSlides(slideIndex)
  })

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("image-container")

    if (slides.length > 0){
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {slides[i].style.display = "none"}
      slides[slideIndex-1].style.display = "block"
    }
  }
  
  return (
    <SliderContainer>
      {options?.map((picture, i) => {
        return (
          <div key={i} className='image-container'>
            <div className='image' style={{backgroundImage: `url(${picture})`}}>
              <img className="chevron" src={chevronLeft} onClick={() => plusSlides(-1)} alt='' />
              <img className="chevron" src={chevronRight} onClick={() => plusSlides(1)} alt='' />
            </div>
          </div>
        )
      })}
    </SliderContainer>
  )
}

export default Slider
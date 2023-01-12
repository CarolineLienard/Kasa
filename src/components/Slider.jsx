import React, { useEffect } from 'react'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

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
    <div className='sliderContainer'>
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
    </div>
  )
}

export default Slider
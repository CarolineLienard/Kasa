import React, { useEffect, useState } from 'react'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

function Slider({options}) {
  let [slideIndex, setSlideIndex] = useState(1)
  let slides = document.getElementsByClassName("image-container")

  useEffect(() => {
    showSlides(slideIndex)
  })

  // Next/previous controls
  function handleStepSlides(n) {
    setSlideIndex(slideIndex += n)
    showSlides()
  }

  function showSlides() {
    if (slides.length > 0){
      if (slideIndex > slides.length) {setSlideIndex(1)}
      if (slideIndex < 1) {setSlideIndex(slides.length)}
      //Avoid errors in console when index < 0 or index > slides.length 
      if(slideIndex <= slides.length && slideIndex > 0){
        for (let i = 0; i < slides.length; i++) {slides[i].style.display = "none"}
        slides[slideIndex-1].style.display = "block"
      }
   
    }
  }
  
  return (
    <div className='sliderContainer'>
      {options?.map((picture, i) => {
        return (
          <div key={i} className='image-container'>
            <div className='image' style={{backgroundImage: `url(${picture})`}}>
              <img className="chevron" src={chevronLeft} onClick={() => handleStepSlides(-1)} alt='' />
              <img className="chevron" src={chevronRight} onClick={() => handleStepSlides(1)} alt='' />
            </div>
            <span className='slider-position'>{slideIndex}/{options.length}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Slider
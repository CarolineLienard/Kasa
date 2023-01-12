import React from 'react'

function Location({location}) {
  return (
    <div className='locationContainer' style={{backgroundImage: `url(${location.cover})`}}>
        <span>{location.title}</span>
    </div>
  )
}

export default Location
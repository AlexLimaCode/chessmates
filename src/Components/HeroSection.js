import React from 'react'
import video from '../videos/test.mp4'

function HeroSection () {
  return (
    <div>
        <video className="w-full object-cover -mt-3" src={video} autoPlay loop muted type="video/mp4" />
    </div>
  )
}

export default HeroSection
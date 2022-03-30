import React from 'react'
import video from '../videos/test.mp4'

function HeroSection () {
  return (
    <div>
      {/* <video className="w-full object-cover -mt-3" autoplay="autoplay" muted loop="loop" webkit-playsinlin playsinline oncontextmenu="return false;" preload="auto">
        <source src={video} type="video/mp4" />
      </video> */}
      <div
          dangerouslySetInnerHTML={{
            __html: `<video className="w-full object-cover -mt-3" autoplay loop muted playsinline>
                          <source src=${video} type="video/mp4" />
                          Your browser does not support the video tag.
                    </video>`,
          }}
        />
        {/* <video  src={video} autoPlay loop muted webkit-playsinlin playsinline oncontextmenu="return false;" preload="auto" type="video/mp4" /> */}
    </div>
  )
}

export default HeroSection
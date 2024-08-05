import React from 'react'
import Image from 'next/image'

const Video = () => {
  return (
    <div className="flex justify-around mt-36 px-16">
        <Image
          src="/video1.jpg"
          alt="video"
          width={1200}
          height={400}
        />
         
        

    </div>
  )
}

export default Video
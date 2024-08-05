import React from 'react'
import Image from 'next/image'

const Awards = () => {
  return (
    <div className="flex justify-start mt-28 px-16">
    <Image
      src="/ghost.png"
      alt="ghost"
      width={600}
      height={600}
    />
    </div>
  )
}

export default Awards
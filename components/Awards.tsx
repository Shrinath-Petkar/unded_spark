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
    {/* const data =[
    { 
     title:'awwards AWARD',
     date:'June 2023',
    },

    { 
     title:'Campaign AWARD',
     date:'June 2013',
    },
    { 
     title:'Animation AWARD',
     date:'June 2023',
    },
    { 
     title:'Peach Of the day',
     date:'June 2023',
    },


    ] */}
    </div>
  )
}

export default Awards
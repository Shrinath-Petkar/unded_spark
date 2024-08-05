import Image from "next/image"
import Link from "next/link"

const Images = () => {
  return (
 
       <div className="flex justify-around mt-28 px-16">
        <Image
          src="/person1.jpg"
          alt="person"
          width={400}
          height={400}
        />
           <Image
          src="/person2.jpg"
          alt="person"
          width={400}
          height={400}
        />
         <Image
          src="/person3.jpg"
          alt="person"
          width={400}
          height={400}
        />
  
      </div>

         
        
      
  )
}

export default Images
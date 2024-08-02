import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-cyan-200">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
        </Link>
        
      <div>
        <p className="text-black">HI THIS IS NAVBAR</p>
      </div>

         
        
      </nav>
  )
}

export default Navbar
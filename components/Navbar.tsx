import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "_home" },
  { href: "/pages", key: "how_hilink_work", label: "_pages" },
  { href: "/portfolio", key: "services", label: "_portfolio" },
  { href: "/blog", key: "pricing ", label: "_blog " },
  { href: "/contact", key: "contact_us", label: "_contact" },
];

const Navbar = () => {
  return (
    <div className="flex">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <CiSearch />
      <HiOutlineMenuAlt3 />
    </div>
  );
};

export default Navbar;

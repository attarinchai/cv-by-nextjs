'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGraduate, faBriefcase, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: 'Personal Data', href: '/infopage', icon: faUser},
  { name: 'Education', href: '/infopage/education', icon: faUserGraduate},
  { name: 'Internship', href: '/infopage/internship', icon: faBriefcase},
  { name: 'Contact', href: '/infopage/contact', icon: faAddressBook}
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const pathname = usePathname();
        return (
          <Link
            key={link.name}
            href={link.href}
            className= {clsx("bg-red-500 text-white font-bold p-[8%] text-center border-2 border-black rounded-xl hover:bg-white hover:text-red-500 overflow-hidden"
                       ,{'bg-blue-400 cursor-default': pathname == link.href}
          )}
          >
            <FontAwesomeIcon icon={link.icon} className="text-3xl sm:text-sm" />
            <p className="hidden sm:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

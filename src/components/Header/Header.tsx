"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bars3Icon } from "@heroicons/react/24/outline"

import MobileMenu from "./MobileMenu"

export interface Navigation {
  id: string
  title: string
  href: string
}

const navigation: Navigation[] = [
  { id: "1", title: "Women", href: "#" },
  { id: "2", title: "Men", href: "#" },
  { id: "3", title: "Company", href: "#" },
  { id: "4", title: "Store", href: "#" }
]

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  return (
    <header>
      <MobileMenu
        isOpenMobileMenu={isOpenMobileMenu}
        setIsOpenMobileMenu={setIsOpenMobileMenu}
        navigation={navigation}
      />
      <div className='relative bg-white border-b border-gray-200'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <Link href='/'>
              <Image
                className='dark:invert'
                src='/vercel.svg'
                alt='Vercel logo'
                width={40}
                height={34}
                priority
              />
            </Link>

            <div className='flex lg:hidden'>
              <button
                type='button'
                onClick={() => setIsOpenMobileMenu(true)}
                className='-ml-2 rounded-md bg-white p-2 text-gray-400'
              >
                <span className='sr-only'>Open menu</span>
                <Bars3Icon aria-hidden='true' className='size-6' />
              </button>
            </div>

            <nav className='hidden lg:flex flex-1 gap-8 justify-end ml-8'>
              {navigation.map(({ id, title, href }) => (
                <Link
                  key={id}
                  href={href}
                  className='text-sm font-medium text-gray-700 hover:text-gray-800'
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

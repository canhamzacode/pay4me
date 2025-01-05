import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../Button'

const Navbar = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto flex items-center justify-between mt-8 tablet:px-0 px-5'>
        <Image src='/images/logo.png' width={224} height={84} alt='logo' />
        <div className='flex items-center gap-11'>
            <Link href='/'>
                About
            </Link>
            <Link href='/'>
                Blog
            </Link>
            <Link href='/'>
                Support
            </Link>
        </div>
        <Button text="Make a Payment" onClick={() => console.log("Clicked!")} />
    </div>
  )
}

export default Navbar
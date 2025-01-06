import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

const navigation = [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Support', href: '/' },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        // Toggle body scroll
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between mt-8 tablet:px-4 px-5">
            <div className='tablet:w-[224px] tablet:h-[84px] w-[112px] h-[42px]'>
                <Image src="/images/logo.png" width={224} height={84} alt="logo" />
            </div>

            <div className="tablet:flex hidden items-center gap-11">
                {navigation.map((item, index) => (
                    <Link href={item.href} key={index}>{item.name}</Link>
                ))}
            </div>

            <div className="flex items-center gap-3">
                <div className="tablet:flex hidden">
                    <Button text="Make a Payment" onClick={() => console.log('Clicked!')} />
                </div>

                <div className="tablet:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none text-2xl text-gray-800"
                    >
                        <FiMenu />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <>
                    <div
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    ></div>

                    <div className="fixed top-0 right-0 w-[75%] max-w-[300px] h-screen bg-white shadow-lg z-50 flex flex-col items-start p-6 gap-6">
                        <div className='w-full flex items-end justify-end'>
                            <button
                                onClick={toggleMenu}
                                className="focus:outline-none text-2xl text-gray-800"
                            >
                                <FiX />
                            </button>
                        </div>
                        {navigation.map((item, index) => (
                            <Link href={item.href} key={index}>{item.name}</Link>
                        ))}
                        <Button
                            text="Make a Payment"
                            onClick={() => {
                                console.log('Clicked!');
                                toggleMenu();
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
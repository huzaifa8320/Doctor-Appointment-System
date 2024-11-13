'use client';

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1E3A8A] fixed w-full z-10 p-1">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-16">
                <div className="relative flex h-16 items-center justify-between">
                    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="relative text-xl inline-flex items-center justify-center rounded-md p-1 text-gray-400"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <CloseOutlined className='text-white' />
                            ) : (
                                <MenuOutlined className='text-white' />
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center sm:justify-between justify-between">
                        <div className="flex shrink-0 gap-2 items-center">
                            <div className='bg-white rounded-full p-1 shadow'>
                                <Image
                                    className="h-8 w-auto"
                                    src="/Web_logo.png"
                                    alt="Your Company"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <p className='text-white'>Healthify</p>
                        </div>
                        <div className="hidden ms-auto sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className={`rounded-md px-5 py-2 ${pathname == '/' && 'bg-blue-600 text-white'} text-gray-300 hover:bg-blue-700 hover:text-white text-sm font-medium`} aria-current="page">
                                    Home
                                </Link>
                                <Link
                                    href={`/doctors`} 
                                    className={`rounded-md px-5 py-2 text-sm font-medium ${pathname.startsWith('/doctors') && 'bg-blue-600 text-white' } text-gray-300 hover:bg-blue-700 hover:text-white`}
                                >
                                    Doctors
                                </Link>

                                <Link href="/appointments" className={`rounded-md px-5 py-2 ${pathname == '/appointments' && 'bg-blue-600 text-white'} text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white`}>
                                    Appointments
                                </Link>
                                <Link href="/contact-us" className={`rounded-md px-5 py-2 ${pathname == '/contact-us' && 'bg-blue-600 text-white'} text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white`}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3">
                                <button
                                    type="button"
                                    onClick={toggleProfileMenu}
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded={isProfileOpen}
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                                {isProfileOpen && (
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md text-white bg-blue-600 py- shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                    >
                                        <Link href="/profile" onClick={()=> setIsProfileOpen(!isProfileOpen)} className="block rounded-md hover:bg-blue-700 px-4 py-3 text-sm" role="menuitem">
                                            Your Profile
                                        </Link>
                                        <Link href="#" onClick={()=> setIsProfileOpen(!isProfileOpen)} className="block rounded-md hover:bg-blue-700 px-4 py-3 text-sm" role="menuitem">
                                            Settings
                                        </Link>
                                        <Link href="#" onClick={()=> setIsProfileOpen(!isProfileOpen)} className="block rounded-md hover:bg-blue-700 px-4 py-3 text-sm" role="menuitem">
                                            Sign out
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Animated Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'} sm:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link onClick={()=>  setIsMobileMenuOpen(!isMobileMenuOpen)} href="/" className={`block rounded-md px-5 py-2 ${pathname == '/' && 'bg-blue-600 text-white'} text-gray-300 hover:text-white hover:bg-blue-700 text-sm font-medium `} aria-current="page">
                        Home
                    </Link>
                    <Link onClick={()=>  setIsMobileMenuOpen(!isMobileMenuOpen)} href="/doctors" className={`block rounded-md px-5 py-2 ${pathname.startsWith('/doctors') && 'bg-blue-600 text-white' } text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white`}>
                        Doctors
                    </Link>
                    <Link onClick={()=>  setIsMobileMenuOpen(!isMobileMenuOpen)} href="#" className={`block rounded-md px-5 py-2 ${pathname == '/appointments' && 'bg-blue-600 text-white'} text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white`}>
                        Appointments
                    </Link>
                    <Link onClick={()=>  setIsMobileMenuOpen(!isMobileMenuOpen)} href="#" className={`block rounded-md px-5 py-2 ${pathname == '/contact-us' && 'bg-blue-600 text-white'} text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white`}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}

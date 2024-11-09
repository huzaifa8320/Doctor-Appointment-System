'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-[#1E3A8A] fixed w-full z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-16">
                <div className="relative flex h-16 items-center justify-between">
                    <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
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
                                <a href="#" className="rounded-md px-3 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white" aria-current="page">
                                    Dashboard
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                                    Team
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                                    Projects
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                                    Calendar
                                </a>
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
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                    >
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                            Your Profile
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                            Settings
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
                                            Sign out
                                        </a>
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
                    <a href="#" className="block rounded-md px-3 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium text-white" aria-current="page">
                        Dashboard
                    </a>
                    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                        Team
                    </a>
                    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                        Projects
                    </a>
                    <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white">
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
}

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
// import { BiLeftArrow } from "react-icons/bi";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
                <nav className='bg-slate-300 text-black flex items-center text-lg p-2 overflow-x-hidden'>
                <h1 className='pl-2 md:pl-2 lg:pl-10 font-Dance text-4xl font-extrabold'><Link to='/'>Resume Builder</Link></h1>
                    <ul className='hidden md:flex md:gap-4 md:text-[16px] lg:text-lg lg:gap-8 ml-auto md:pr-2 lg:pr-10 font-ubuntu text-[18px]'>
                        <li className='hover:cursor-pointer hover:text-slate-700 hover:underline'><Link to='/build'>Build Your Resume </Link></li>
                    <li className='hover:cursor-pointer hover:text-slate-700 hover:underline'><Link to='/templates'>Resume Templates</Link></li>
                    <li className='hover:cursor-pointer hover:text-slate-700 hover:underline'><Link to='/cover-letters'>Cover letter</Link></li>
                        <li>|</li>
                        <li className='hover:cursor-pointer hover:text-slate-700 hover:underline'><Link to = '/login'>login</Link></li>
                        <li><MdDarkMode className='mt-1' /></li>
                    </ul>

                    {/* Hamburger Menu Button */}
                    <button
                        className="flex ml-auto md:hidden mr-4 mt-2 relative z-50"
                        onClick={openMenu}
                    >
                        {isOpen ? (
                            // Close Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            // Hamburger Menu Icon
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Menu for Small Screens */}
                    {isOpen && (
                        <div
                            className={`fixed inset-0 bg-slate-200 flex flex-col items-center justify-center z-40 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                                }`}
                        >
                            <ul className="flex flex-col justify-center items-center gap-6 text-lg font-medium">
                            <li className="hover:text-blue-600 cursor-pointer"><Link to='/build'>Build Your Resume </Link></li>
                            <li className="hover:text-blue-600 cursor-pointer"><Link to='/cover-letters'>Cover letters</Link></li>
                            <li className="hover:text-blue-600 cursor-pointer"><Link to='/templates'>Resume Templates </Link></li>
                            <li className="hover:text-blue-600 cursor-pointer"><Link to='/login'>login</Link></li>
                                <li>
                                    <MdDarkMode className="mt-1 w-6 h-6 cursor-pointer" />
                                </li>
                            <li className='bg-blue-600 p-2 rounded-md'><Link to='/'>Back to Home</Link></li>
                            </ul>
                        </div>

                    )}

                </nav>
        </>
    )
}

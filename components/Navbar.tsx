import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar()
{
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Prince Raj
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#profiles" className="mr-5 hover:text-white">
                        Profiles
                    </a>
                    <a href="#meetEvent" className="mr-5 hover:text-white">
                        Meet Event
                    </a>
                    <a href="https://blog.princeraj.co" target="_blank" rel="noopener noreferrer">
                        <span className="mr-5 hover:text-white cursor-pointer">
                            Blogs
                            <span className="bg-green-500 ml-2 text-white text-xs px-2 rounded-full uppercase font-bold tracking-widest">
                                New
                            </span>
                        </span>
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}

export default Navbar
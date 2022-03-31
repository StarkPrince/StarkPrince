import React from 'react'

function Navbar()
{
    return (
        // flex-col md:flex-row bg-gray-800 
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container flex flex-wrap p-5 justify-around">

                <a href="#projects" className="inline-flex items-center title-font font-bold text-white mb-4 md:mb-0 lg:text-2xl md:text-xl text-md mr-3 mt-3">
                    <svg className="lg:h-6  lg:w-6 h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" >
                        <path d="M12 0C5.37245 0 0 5.37245 0 12C0 18.6274 5.37245 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37245 18.6274 0 12 0ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C16.5228 4 20 7.47715 20 12C20 16.5228 16.5228 20 12 20C7.47715 20 4 16.5228 4 12C4 7.47715 7.47715 4 12 4ZM12 6C14.6569 6 17 8.34315 17 12C17 15.6569 14.6569 18 12 18C9.34315 18 7 15.6569 7 12C7 8.34315 9.34315 6 12 6Z" fill="white" />
                    </svg>
                    Past Work
                </a>
                <a href="#profiles" className="inline-flex items-center title-font font-bold text-white mb-4 md:mb-0 lg:text-2xl md:text-xl text-md mr-3 mt-3">
                    <svg className="lg:w-6 lg:h-6 h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Profiles
                </a>
                <a className="inline-flex items-center title-font font-bold text-white mb-4 md:mb-0 lg:text-2xl md:text-xl text-md mr-3 mt-3" href="#about" >
                    <svg className="mr-2 fill-current text-white lg:w-6 lg:h-6 h-4 w-4" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" /></svg>
                    ME
                </a>
                {/* <a href="#meetEvent" className="title-font font-bold text-white mb-4 md:mb-0 text-2xl mt-3">
                    Meet Event
                </a> */}
                <a href="https://blog.princeraj.co" target="_blank" rel="noopener noreferrer" className='inline-flex items-center title-font font-bold text-white mb-4 md:mb-0 lg:text-2xl md:text-xl text-md mr-3 mt-3'>
                    {/* an svg for a pencil on a notepad */}
                    <svg className="lg:h-6  lg:w-6 h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                        <path d="M14.828 14.828L19 19M14.828 9.172L19 5M14.828 14.828L5 19M9.172 14.828L5 5M14.828 9.172L5 5M9.172 9.172L5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Blogs
                </a>
                <a
                    href="#contact"
                    className="inline-flex items-center title-font font-bold text-white mb-4 md:mb-0 lg:text-2xl md:text-xl text-md mr-3 mt-3">

                    <svg className="lg:w-6  lg:h-6 h-4 w-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Me
                </a>
            </div>
        </header >
    )
}
// new tag
{/* <span className="bg-green-500 ml-2 text-white text-xs px-2 rounded-full uppercase font-bold tracking-widest">
New
</span> */}

export default Navbar
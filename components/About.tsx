import React from 'react'

function About()
{
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey, Sup? I'm <span className="text-indigo-500">Prince Raj</span>
                        <br className="hidden lg:inline-block" />I love converting <span className="text-yellow-500">ideas</span> into <span className="text-green-500">reality</span>.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Third year student at NIT Rourkela, who love to create smooth and fluent web applications. Specialized in React, Redux, Node.js, Strapi api and Django.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./images/coding.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default About
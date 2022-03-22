import React from 'react'
import { UserIcon } from "@heroicons/react/solid";
import { profiles } from "../public/data";

function Profiles()
{
    return (
        <div>
            <section id="profiles">
                <div className="container px-5 py-10 mx-auto text-center">
                    <UserIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        Coding Profiles
                    </h1>
                    <div className="flex flex-wrap m-4">
                        {profiles.map((profile) => (
                            <a className="p-2 md:w-1/3 w-full" href={profile.link} key={profile.platform}>
                                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                    <div className="flex items-center">
                                        <img
                                            alt="profile"
                                            src={profile.image}
                                            className="w-12 flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4 title-font font-medium text-white">
                                            {profile.platform}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profiles

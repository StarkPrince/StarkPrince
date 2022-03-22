import React from 'react'
import { InlineWidget } from "react-calendly";
import { VideoCameraIcon } from "@heroicons/react/solid";

function MeetEvent()
{
    return (
        <section id="meetEvent">
            <div className="container px-5 py-10 mx-auto text-center">
                <VideoCameraIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Schedule a Meet
                </h1>
                <InlineWidget styles={{ height: '800px' }} url="https://calendly.com/games_princeraj?background_color=eeeeee&text_color=ffffff&primary_color=22c55e&height=1600"
                />
            </div>
        </section>
    )
}

export default MeetEvent
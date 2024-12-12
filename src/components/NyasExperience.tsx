"use client"

import { FeatureSection } from "@/components/experience/feature-section"
import { FloatingCard } from "@/components/experience/floating-card"
import { ParallaxText } from "@/components/experience/parallax-text"
import { documentationCards, otherInformation } from "@/data"
import { motion } from "framer-motion"
import { Layers } from 'lucide-react'

export function NyasExperience()
{
    return (
        <div className="min-h-screen text-primary overflow-hidden flex">
            {/* Enhanced Vertical Sidebar */}
            <div className="hidden md:flex w-16 lg:w-24 bg-gray-800 flex-col justify-between items-center py-8 relative">
                <div className="absolute inset-0 overflow-hidden flex flex-col justify-between">
                    {[...Array(5)].map((_, index) => (
                        <motion.div
                            key={index}
                            className="text-white text-xl lg:text-3xl font-bold tracking-widest whitespace-nowrap flex-1 flex items-center justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            style={{
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                                fontFamily: "'Orbitron', sans-serif",
                            }}
                        >
                            NYAS CONSULTATIONS
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 via-gray-900 to-secondary" />

                <div className="relative container mx-auto px-4 py-24 max-w-6xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-left mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-pink-500"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Work Accomplishments
                    </motion.h1>

                    <div className="space-y-32">
                        {otherInformation.map((section, index) => (
                            <section key={index} className="scroll-mt-16">
                                <ParallaxText>{section.key}</ParallaxText>
                                <FeatureSection
                                    icon={Layers}
                                    title={section.description}
                                    items={section.terms}
                                    color={"bg-primary"}
                                    image={section.visualRepresentation}
                                />
                            </section>
                        ))}

                        <section className="relative py-24 scroll-mt-16">
                            <ParallaxText>Documentation</ParallaxText>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {documentationCards.map((card, index) => (
                                    <FloatingCard key={index} {...card} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}


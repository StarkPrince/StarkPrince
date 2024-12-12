"use client"

import { FeatureSection } from "@/components/experience/feature-section"
import { FloatingCard } from "@/components/experience/floating-card"
import { ParallaxText } from "@/components/experience/parallax-text"
import { Header } from "@/components/Header"
import { documentationCards, otherInformation } from "@/data"
import { motion } from "framer-motion"
import { Layers } from "lucide-react"

export default function Experience()
{
    return (
        <>
            <Header />
            <div className="min-h-screen  text-primary overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 via-gray-900 to-secondary" />

                <div className="relative container mx-auto px-4 py-24 max-w-6xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl font-black text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-pink-500"
                    >
                        Nyas Experience
                    </motion.h1>

                    <div className="space-y-32">
                        {otherInformation.map((section, index) => (
                            <section key={index}>
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

                        <section className="relative py-24">
                            <ParallaxText>Documentation</ParallaxText>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {documentationCards.map((card, index) => (
                                    <FloatingCard key={index} {...card} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
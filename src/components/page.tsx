"use client"

import { Cpu, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { FeatureSection } from "./components/experience/feature-section"
import { FloatingCard } from "./components/experience/floating-card"
import { ParallaxText } from "./components/experience/parallax-text"
import { documentationCards, otherInformation } from "./data/experience-data"

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black" />
      
      <div className="relative container mx-auto px-4 py-24 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-black text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-500 to-pink-500"
        >
          Nyas Experience
        </motion.h1>

        <div className="space-y-32">
          <section>
            <ParallaxText>ARCHITECTURE</ParallaxText>
            <FeatureSection
              icon={Layers}
              title="Architectural Patterns"
              items={otherInformation.architecturalPatterns.terms}
              color="bg-gradient-to-r from-blue-600 to-cyan-600"
            />
          </section>

          <section>
            <ParallaxText>CAPABILITIES</ParallaxText>
            <FeatureSection
              icon={Cpu}
              title="System Capabilities"
              items={otherInformation.systemCapabilities.terms}
              color="bg-gradient-to-r from-green-600 to-emerald-600"
            />
          </section>

          <section className="relative py-24">
            <ParallaxText>DOCUMENTATION</ParallaxText>
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Technical Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCards.map((card, index) => (
                <FloatingCard key={index} {...card} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
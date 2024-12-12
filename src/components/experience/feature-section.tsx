"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { LucideIcon } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { GlowingCard } from "../ui/glowing-card"

interface FeatureSectionProps
{
  icon: LucideIcon
  title: string
  items: string[]
  color: string,
  image: string
}

export const FeatureSection = ({ icon: Icon, title, items, color, image }: FeatureSectionProps) =>
{
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="my-16">
      <GlowingCard className="overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className={`p-3 rounded-lg`}>
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold bg-clip-text bg-secondary">
              {title}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 font-white">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full bg-primary dark:bg-white`} />
                  <span className="text-md text-primary dark:text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />
              <Image
                src={image}
                alt={`${title} visualization`}
                layout="fill"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  )
}
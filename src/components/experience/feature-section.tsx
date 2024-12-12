"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type LucideIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { GlowingCard } from "../ui/glowing-card"

interface FeatureSectionProps
{
  icon: LucideIcon
  title: string
  items: string[]
  color: string
  image: string
}

export const FeatureSection = ({ icon: Icon, title, items, color, image }: FeatureSectionProps) =>
{
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="my-8 sm:my-16"
    >
      <GlowingCard className="overflow-hidden">
        <div className="relative z-10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <div className={`p-3 rounded-lg bg-opacity-20`}>
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-primary">
              {title}
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <ul className="space-y-4 text-primary dark:text-white">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full ${color}`} />
                  <span className="text-sm sm:text-md">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div
              className="relative h-48 sm:h-64 rounded-lg overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`${title} visualization`}
                  layout="fill"
                  className="transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={image} className="text-white text-lg font-semibold">View Details</Link>
              </motion.div>
            </div>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  )
}


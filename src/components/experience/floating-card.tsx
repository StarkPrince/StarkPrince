"use client"

import { motion } from "framer-motion"
import { GlowingCard } from "../ui/glowing-card"

interface FloatingCardProps
{
  title: string
  content: string
}

export const FloatingCard = ({ title, content }: FloatingCardProps) => (
  <motion.div
    className="relative"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <GlowingCard>
      <h3 className="text-xl font-bold mb-3 bg-clip-text bg-primary">
        {title}
      </h3>
      <p className="text-sm text-gray-400">{content}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md text-white text-sm font-medium"
      >
        Learn More
      </motion.button>
    </GlowingCard>
  </motion.div>
)
"use client"

import { wrap } from "@motionone/utils"
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { useRef } from "react"

interface ParallaxTextProps
{
  children: string
  baseVelocity?: number
}

export function ParallaxText({ children, baseVelocity = 5 }: ParallaxTextProps)
{
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) =>
  {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax-text-container overflow-hidden whitespace-nowrap flex flex-nowrap py-4 sm:py-4">
      <motion.div className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-primary flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4 text-transparent">fil</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4 text-transparent">fil</span>
        <span className="block mr-4">{children}</span>
      </motion.div>
    </div>
  )
}


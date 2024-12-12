"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface ParallaxTextProps
{
  children: React.ReactNode
  baseVelocity?: number
}

export const ParallaxText = ({ children, baseVelocity = 5 }: ParallaxTextProps) =>
{
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [textHeight, setTextHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${textHeight}px`, `-${textHeight}px`])

  useEffect(() =>
  {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight)
    }
  }, [children])

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full py-10">
      <motion.div
        ref={textRef}
        style={{ x, y }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100 / baseVelocity,
            ease: "linear",
          },
        }}
        className="text-8xl font-extrabold text-primary/3 whitespace-nowrap flex gap-4"
      >
        <span className="block my-30">{children}</span>
        <span className="block my-30 text-transparent">filler</span>
        <span className="block my-30">{children}</span>
      </motion.div>
    </div>
  )
}


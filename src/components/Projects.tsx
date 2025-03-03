"use client"

import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { projects } from "../data"

export function Projects()
{
    return (
        <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/20">
            <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 max-w-3xl relative"
                >
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                    <div className="flex items-center gap-3 mb-3">
                        <Layers className="size-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Featured Projects
                        </h2>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg">
                        I sincerely believe that the idea and helpfulness of the project matters more than anything else in web
                        development.
                    </p>

                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                </motion.div>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <ProjectItem key={project.title} project={project} index={index} isEven={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectItem({
    project,
    index,
    isEven,
}: {
    project: any
    index: number
    isEven: boolean
})
{
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 lg:gap-16`}>
                {/* Project Image with 16:9 Aspect Ratio */}
                <motion.div
                    className="relative w-full lg:w-3/5 aspect-video overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 shadow-md"
                    style={{ opacity }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                        className="relative h-full w-full"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                        />
                    </motion.div>

                    {/* Creative Source and Demo Buttons */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto group/button"
                            >
                                <motion.div
                                    className="flex items-center justify-center space-x-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Github className="h-4 w-4" />
                                    <span className="font-mono text-xs tracking-wider">SOURCE CODE</span>
                                </motion.div>
                            </Link>

                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto group/button"
                            >
                                <motion.div
                                    className="flex items-center justify-center space-x-2 bg-gray-900/90 dark:bg-white/90 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 px-4 py-2 rounded-full"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="font-mono text-xs tracking-wider">LIVE DEMO</span>
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Project Details */}
                <motion.div className="w-full lg:w-2/5 flex flex-col justify-center" style={{ y, opacity }}>
                    <Badge
                        variant="outline"
                        className="w-fit mb-4 text-xs font-mono bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                    >
                        {project.period}
                    </Badge>

                    <h3 className="font-serif italic text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6">{project.fullDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech: string) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full bg-gray-100/50 dark:bg-gray-800/50 font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h4 className="font-mono text-xs mb-4 uppercase tracking-wider text-gray-700 dark:text-gray-300">
                        Key Features
                    </h4>
                    <ul className="space-y-3 mb-8">
                        {project.highlights.slice(0, 4).map((highlight: string, idx: number) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start"
                            >
                                <span className="mr-3 text-gray-900 dark:text-gray-100 mt-0.5">•</span>
                                <span className="text-sm text-muted-foreground">{highlight}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    )
}


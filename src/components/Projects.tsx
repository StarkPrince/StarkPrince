"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'
import { projects } from "../data"

export function Projects()
{
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="projects" className="bg-background text-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Apps I've Built
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I sincerely believe that the idea and helpfulness of the project matters more than anything else in web development.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={project.title} className="overflow-hidden">
                            <motion.div
                                className="relative h-64 sm:h-80"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-background/90 backdrop-blur-sm p-6 flex flex-col"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ScrollArea className="h-full pr-4">
                                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                        <CardDescription className="mb-2">{project.period}</CardDescription>
                                        <p className="text-sm mb-4">{project.fullDescription}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.map((tech) => (
                                                <Badge key={tech} variant="secondary">{tech}</Badge>
                                            ))}
                                        </div>
                                        <h4 className="font-semibold mb-2">Key Features:</h4>
                                        <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                    <div className="flex justify-between mt-4">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                                <Github className="mr-2 h-4 w-4" /> GitHub
                                            </Button>
                                        </Link>
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}


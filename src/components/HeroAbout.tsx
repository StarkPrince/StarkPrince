"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const achievements = [
    "Solved 1800+ problems across competitive platforms",
    "Google Kick Start 2022 Round B: 721st out of 23,000+ participants",
    "LeetCode Weekly Contest 425: 477th out of 23,000+ participants",
    "Codeforces Rating: Peak 1435 (Specialist)",
    "Google HashCode 2022: Top 100 Nationwide, highest in college"
]

export function HeroAbout()
{
    // For the animated typing effect
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Backend Developer & Software Engineer";

    // For the floating elements animation
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // For scroll effects
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    useEffect(() =>
    {
        // Typing animation effect
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() =>
            {
                setDisplayText(prevText => prevText + fullText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    useEffect(() =>
    {
        // Track mouse movement for parallax effect
        const handleMouseMove = (e: MouseEvent) =>
        {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
            {/* Hero Section with Parallax Effects */}
            <section
                ref={sectionRef}
                className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6"
            >
                {/* Background elements */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute top-1/4 left-1/4 h-40 md:h-64 w-40 md:w-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
                        style={{
                            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                        }}
                    />
                    <div
                        className="absolute bottom-1/3 right-1/4 h-48 md:h-72 w-48 md:w-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
                        style={{
                            transform: `translate(${-mousePosition.x * 0.005}px, ${-mousePosition.y * 0.005}px)`
                        }}
                    />
                </div>

                <motion.div
                    className="container max-w-5xl flex flex-col items-center justify-center text-center relative z-10"
                    style={{ opacity, y }}
                >
                    {/* Profile image with subtle border and glow */}
                    <motion.div
                        className="relative mb-8 md:mb-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            duration: 0.8
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 blur-md animate-pulse"></div>
                        <div className="relative rounded-full border-4 border-background p-1 shadow-lg">
                            <Image
                                src="https://i.imgur.com/oGoxAXh.jpeg"
                                alt="Prince Raj"
                                className="rounded-full"
                                width={180}
                                height={180}
                                sizes="(max-width: 640px) 150px, 180px"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Name with handwritten font */}
                    <motion.h1
                        className="mb-3 font-serif italic text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Prince Raj
                    </motion.h1>

                    {/* Animated typing text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-6 h-8 font-mono text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300"
                    >
                        {displayText}<span className="animate-blink">|</span>
                    </motion.div>

                    {/* Brief intro */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-2xl text-muted-foreground mb-8 md:mb-10 text-base md:text-lg"
                    >
                        I specialize in building high-performance, scalable backend systems with a focus on clean architecture and pragmatic solutions.
                    </motion.p>

                    {/* Social links with hover effects */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <SocialButton href="https://github.com/starkprince" icon={<Github className="size-4 sm:size-5" />} label="GitHub" />
                        <SocialButton href="https://linkedin.com/in/starkprince" icon={<Linkedin className="size-4 sm:size-5" />} label="LinkedIn" />
                        <SocialButton href="mailto:games.princeraj@gmail.com" icon={<Mail className="size-4 sm:size-5" />} label="Email" />
                        <SocialButton href="https://dev.to/starkprince" icon={<Code className="size-4 sm:size-5" />} label="Dev.to" />
                        <SocialButton
                            href="https://drive.google.com/file/d/1dCUGog8auZhBN6dE5fQnsDWfqSPa1_g6/view?usp=sharing"
                            icon={<ExternalLink className="size-4 sm:size-5" />}
                            label="Resume"
                        />
                    </motion.div>

                </motion.div>
            </section>

            {/* About Section with Details */}
            <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/20">
                <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
                        {/* Left Column: My Approach */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Approach</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    As a Backend Developer with expertise in building high-performance, scalable systems, I bring a wealth of experience in RESTful APIs, cloud infrastructure, performance optimization, and automation.
                                </p>
                                <p>
                                    My skills span SQL/NoSQL databases, Microservices Architecture, and DevOps practices, allowing me to deliver robust and efficient solutions.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code that balances technical excellence with pragmatic delivery. My approach combines thorough planning with agile execution to create systems that not only work well today but remain adaptable for tomorrow's needs.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-8"
                            >
                                <Button
                                    asChild
                                    className="font-mono bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    <a href="#projects" className="flex items-center">
                                        View my projects
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </motion.div>

                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                        </motion.div>

                        {/* Right Column: Achievements */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                            <h2 className="font-serif italic text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Achievements</h2>

                            <ul className="space-y-5">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 * index }}
                                        className="relative pl-8"
                                    >
                                        <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-300 dark:bg-gray-700" />
                                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gray-900 dark:bg-gray-300" />
                                        <p className="text-muted-foreground">{achievement}</p>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Social button component
function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string })
{
    return (
        <Link
            href={href}
            className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-700 hover:border-transparent group"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="mr-1.5 sm:mr-2 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </span>
            <span className="font-mono text-xs sm:text-sm">{label}</span>
        </Link>
    )
}

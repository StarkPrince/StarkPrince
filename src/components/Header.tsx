"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
    { href: "https://pr-blogs.vercel.app", label: "Blogs", external: true },
]

export function Header()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Track scroll position to change header styling
    useEffect(() =>
    {
        const handleScroll = () =>
        {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex h-16 sm:h-20 items-center justify-between">
                {/* Logo area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-handwriting text-xl sm:text-2xl font-bold">
                            Prince Raj
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Link
                                href={item.href}
                                target={item.external ? "_blank" : "_self"}
                                rel={item.external ? "noopener noreferrer" : ""}
                                className="relative px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-black dark:bg-white group-hover:w-3/4 transition-all duration-300 -translate-x-1/2"></span>
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                        className="ml-3"
                    >
                        <Button
                            asChild
                            className="font-handwriting bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90 text-sm"
                        >
                            <a
                                href="https://drive.google.com/file/d/1dCUGog8auZhBN6dE5fQnsDWfqSPa1_g6/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </Button>
                    </motion.div>
                </nav>

                {/* Mobile menu button */}
                <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-black dark:text-white rounded-full"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </motion.div>
            </div>

            {/* Mobile navigation menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-40 bg-white dark:bg-black pt-20"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 sm:px-6">
                            <nav className="flex flex-col space-y-6 py-10">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            target={item.external ? "_blank" : "_self"}
                                            rel={item.external ? "noopener noreferrer" : ""}
                                            className="flex items-center py-2 text-2xl font-handwriting text-black dark:text-white"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800"
                                >
                                    <Button
                                        asChild
                                        className="w-full font-handwriting bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90 text-base"
                                    >
                                        <a
                                            href="https://drive.google.com/file/d/1dCUGog8auZhBN6dE5fQnsDWfqSPa1_g6/view?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Resume
                                        </a>
                                    </Button>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}


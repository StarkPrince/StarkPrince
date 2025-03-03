"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { experiences } from "@/data"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Briefcase } from 'lucide-react'
import { useState } from "react"

export function Experience()
{
    const [activeCompany, setActiveCompany] = useState(0)

    return (
        <section id="experience" className="py-16 md:py-24 bg-white dark:bg-gray-950">
            <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 relative"
                >
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                    <div className="flex items-center gap-3 mb-3">
                        <Briefcase className="size-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Work Experience
                        </h2>
                    </div>

                    <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
                        Professional journey through various roles and organizations that have shaped my expertise.
                    </p>

                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
                    {/* Vertical Company Tabs */}
                    <div className="md:col-span-2">
                        <div className="flex flex-col space-y-2">
                            {experiences.map((exp, index) => (
                                <CompanyTab
                                    key={index}
                                    company={exp.company}
                                    title={exp.title}
                                    period={exp.period}
                                    isActive={activeCompany === index}
                                    onClick={() => setActiveCompany(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Experience Details */}
                    <div className="md:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCompany}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col mb-4">
                                            <h3 className="text-xl md:text-2xl font-serif italic font-bold text-gray-900 dark:text-white">
                                                {experiences[activeCompany].title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 mt-2">
                                                <span className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-mono">
                                                    {experiences[activeCompany].company}
                                                </span>
                                                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 text-xs font-mono">
                                                    {experiences[activeCompany].period}
                                                </Badge>
                                            </div>
                                        </div>
                                        <ul className="space-y-4 mt-6">
                                            {experiences[activeCompany].responsibilities.map((item, i) => (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                >
                                                    <span className="mr-3 text-gray-900 dark:text-gray-100 mt-0.5">•</span>
                                                    <span className="text-muted-foreground">{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CompanyTab({
    company,
    title,
    period,
    isActive,
    onClick
}: {
    company: string;
    title: string;
    period: string;
    isActive: boolean;
    onClick: () => void;
})
{
    return (
        <motion.button
            onClick={onClick}
            className={cn(
                "text-left px-5 py-4 rounded-lg transition-all duration-200 border",
                "hover:bg-gray-100 dark:hover:bg-gray-800/50 relative overflow-hidden group",
                isActive
                    ? "border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 shadow-sm"
                    : "border-transparent"
            )}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
        >
            {isActive && (
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gray-900 dark:bg-gray-300"
                    layoutId="activeTab"
                />
            )}

            <div className="flex items-center justify-between">
                <div>
                    <h4 className={cn(
                        "font-serif italic font-semibold text-base md:text-lg",
                        isActive ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"
                    )}>
                        {company}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono">{title}</p>
                </div>
                <motion.div
                    animate={{ x: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowRight className="h-4 w-4 text-gray-900 dark:text-gray-300" />
                </motion.div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-mono">{period}</p>
        </motion.button>
    )
}

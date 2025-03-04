"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
// Import official technology icons
import { ChevronLeft, ChevronRight, Code } from "lucide-react"
import { FaAws, FaJava } from "react-icons/fa"
import
{
    SiApachejmeter,
    SiApachekafka,
    SiAstro,
    SiAuth0,
    SiBootstrap,
    SiCplusplus,
    SiDjango,
    SiDocker,
    SiExpress,
    SiFastapi,
    SiFastify,
    SiGit,
    SiGithub,
    SiGithubactions,
    SiGnubash,
    SiGraphql,
    SiJavascript,
    SiJenkins,
    SiKubernetes,
    SiMarkdown,
    SiMongodb,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiPython,
    SiRabbitmq,
    SiReact,
    SiRedis,
    SiRedux,
    SiRemix,
    SiSpring,
    SiSqlite,
    SiTailwindcss,
    SiTerraform,
    SiTrpc,
    SiTypescript,
    SiVite,
    SiVuedotjs,
} from "react-icons/si"

// Map icons to categories
const skillCategories = [
    {
        category: "Languages",
        icon: "📄",
        skills: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "C++", icon: SiCplusplus },
            { name: "Java", icon: FaJava },
            { name: "Bash", icon: SiGnubash },
            { name: "Markdown", icon: SiMarkdown },
        ],
    },
    {
        category: "Frontend",
        icon: "🖥️",
        skills: [
            { name: "React.js", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Astro", icon: SiAstro },
            { name: "Vue", icon: SiVuedotjs },
            { name: "Vite", icon: SiVite },
            { name: "Remix", icon: SiRemix },
            { name: "Redux", icon: SiRedux },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: SiBootstrap },
        ],
    },
    {
        category: "Backend",
        icon: "⚙️",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Fastify", icon: SiFastify },
            { name: "Django", icon: SiDjango },
            { name: "GraphQL", icon: SiGraphql },
            { name: "Spring Boot", icon: SiSpring },
            { name: "tRPC", icon: SiTrpc },
            { name: "FastAPI", icon: SiFastapi },
        ],
    },
    {
        category: "Databases",
        icon: "🗄️",
        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "SQLite", icon: SiSqlite },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
    {
        category: "DevOps & Cloud",
        icon: "☁️",
        skills: [
            { name: "AWS", icon: FaAws },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform },
            { name: "CI/CD", icon: SiGithubactions },
        ],
    },
    {
        category: "Tools & Utilities",
        icon: "🔧",
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Jenkins", icon: SiJenkins },
            { name: "Nginx", icon: SiNginx },
            { name: "Postman", icon: SiPostman },
            { name: "Maven", icon: SiApachejmeter },
            { name: "Auth0", icon: SiAuth0 },
            { name: "Kafka", icon: SiApachekafka },
            { name: "RabbitMQ", icon: SiRabbitmq },
        ],
    },
]

export function Skills()
{
    const [activeCategory, setActiveCategory] = useState(0)

    const handleNextCategory = () =>
    {
        setActiveCategory((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1))
    }

    const handlePrevCategory = () =>
    {
        setActiveCategory((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1))
    }

    return (
        <section id="skills" className="py-16 sm:py-24 md:py-32">
            <div className="container bg-gray-50 dark:bg-gray-900/20 max-w-6xl mx-auto px-4 sm:px-6 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-12 relative"
                >
                    {/* Decorative corners - responsive sizing */}
                    <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-8 sm:w-12 h-8 sm:h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <Code className="size-4 sm:size-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Tech Stack
                        </h2>
                    </div>

                    <p className="text-muted-foreground max-w-3xl text-sm sm:text-base md:text-lg">
                        These are the technologies I&apos;ve worked with throughout my career, categorized by their purpose and
                        functionality.
                    </p>

                    <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                </motion.div>

                {/* Mobile Category Selector with Arrows */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                    <motion.button
                        onClick={handlePrevCategory}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <div className="text-center px-2 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 font-mono text-sm">
                        <span className="mr-2">{skillCategories[activeCategory].icon}</span>
                        {skillCategories[activeCategory].category}
                    </div>

                    <motion.button
                        onClick={handleNextCategory}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Desktop Category Tabs - Hidden on Mobile */}
                <div className="hidden md:block mb-8 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex flex-wrap gap-2">
                        {skillCategories.map((category, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border",
                                    activeCategory === index
                                        ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-800 dark:border-gray-800"
                                        : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-500",
                                )}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Category Pills for Small Screens - Hidden on Large Screens */}
                <div className="md:hidden mb-3 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex space-x-1 min-w-max">
                        {skillCategories.map((category, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setActiveCategory(index)}
                                className={cn(
                                    "px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 border",
                                    activeCategory === index
                                        ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-800 dark:border-gray-800"
                                        : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700",
                                )}
                                whileTap={{ scale: 0.97 }}
                            >
                                {category.icon}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                            {skillCategories[activeCategory].skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Navigation Indicator */}
                <div className="flex justify-center mt-4 space-x-1 md:hidden">
                    {skillCategories.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full ${activeCategory === index
                                ? "w-4 bg-gray-900 dark:bg-white"
                                : "w-1 bg-gray-300 dark:bg-gray-700"
                                } transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function SkillCard({
    skill,
    index,
}: {
    skill: { name: string; icon: React.ElementType }
    index: number
})
{
    const Icon = skill.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-colors bg-gray-50 dark:bg-gray-800/50 shadow-sm"
        >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 flex items-center justify-center text-gray-900 dark:text-gray-100">
                <Icon size={24} className="sm:size-28 md:size-32" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center font-mono truncate w-full">{skill.name}</span>
        </motion.div>
    )
}


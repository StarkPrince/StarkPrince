import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export function Hero()
{
    return (
        <section className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
            <div className="rounded-full bg-muted p-4 text-muted-foreground">
                <svg
                    className="h-24 w-24"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Prince Raj
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                Backend Developer & Software Engineer
            </p>
            <div className="flex space-x-4">
                <Button asChild variant="outline">
                    <Link href="https://github.com/starkprince">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="https://linkedin.com/in/starkprince">
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="mailto:games.princeraj@gmail.com">
                        <Mail className="mr-2 h-4 w-4" /> Email
                    </Link>
                </Button>
            </div>
            <div className="flex space-x-4">
                <Button asChild variant="outline">
                    <Link href="https://dev.to/starkprince">
                        Blog <Code className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="https://drive.google.com/file/d/1dCUGog8auZhBN6dE5fQnsDWfqSPa1_g6/view?usp=sharing">
                        Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
            <Button asChild className="mt-8">
                <a href="#contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </section>
    )
}


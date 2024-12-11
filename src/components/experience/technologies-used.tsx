import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const technologies = [
    { name: "React", logo: "/tech-logos/react.svg" },
    { name: "Node.js", logo: "/tech-logos/nodejs.svg" },
    { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
    { name: "MongoDB", logo: "/tech-logos/mongodb.svg" },
    { name: "AWS", logo: "/tech-logos/aws.svg" },
    { name: "Docker", logo: "/tech-logos/docker.svg" },
    { name: "Kubernetes", logo: "/tech-logos/kubernetes.svg" },
    { name: "GraphQL", logo: "/tech-logos/graphql.svg" },
]

export function TechnologiesUsed()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
                <CardDescription>A summary of all tools, frameworks, and technologies used in our projects</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center p-4 bg-muted rounded-lg">
                            <div className="relative w-16 h-16 mb-2">
                                <Image
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


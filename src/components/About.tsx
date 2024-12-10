import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
    "Solved 1800+ problems across competitive platforms",
    "Google Kick Start 2022 Round B: 721st out of 22,000+ participants",
    "LeetCode Weekly Contest 425: 477th out of 23,000+ participants",
    "Codeforces Rating: Peak 1435 (Specialist)",
    "Google HashCode 2022: Top 100 Nationwide, highest in college"
]

export function About()
{
    return (
        <section id="about" className="container py-12">
            <Card className="bg-muted/50">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">About Me</CardTitle>
                    <CardDescription>Passionate about building scalable systems</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">
                        As a Backend Developer with expertise in building high-performance, scalable systems, I bring a wealth of experience in RESTful APIs, cloud infrastructure, performance optimization, and automation. My skills span SQL/NoSQL databases, Microservices Architecture, and DevOps practices, allowing me to deliver robust and efficient solutions.
                    </p>
                    <h3 className="text-lg font-semibold mb-2">Key Achievements</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="text-sm text-muted-foreground">{achievement}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    )
}


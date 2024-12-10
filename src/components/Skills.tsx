import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
    {
        category: "Languages",
        skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "Bash"]
    },
    {
        category: "Frameworks",
        skills: ["React.js", "Next.js", "Express.js", "Django", "GraphQL"]
    },
    {
        category: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
        category: "DevOps & Cloud",
        skills: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "CI/CD"]
    },
    {
        category: "Tools",
        skills: ["Git", "Jenkins", "Nginx", "Postman", "VS Code"]
    }
]

export function Skills()
{
    return (
        <section id="skills" className="container py-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <Card key={index} className="overflow-hidden">
                        <CardHeader className="bg-muted">
                            <CardTitle>{category.category}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}


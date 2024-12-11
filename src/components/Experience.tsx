import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const experiences = [
    {
        title: "Backend Developer",
        company: "MithilaStack",
        period: "Aug. 2024 - Present",
        redirect: "/nyas",
        responsibilities: [
            "Developed a contract management system, ensuring data integrity and compliance with CIA principles, improving audit traceability by 3x.",
            "Optimized database performance through strategic indexing and schema refinements, achieving 99.95% uptime and 40% reduction in query latency.",
            "Automated ticketing system processing 100+ daily tickets with 95% accuracy in geospatial assignments, reducing manual routing by 75%.",
            "Implemented RBAC system managing 6 role hierarchies and 20+ permission sets with JWT, Zod-based validation, and rate limiting preventing unauthorized access.",
            "Real-time chat systems with socket servers, enabling seamless collaboration and reducing response time.",
            "Streamlined document management with file uploads, metadata processing, and 2-factor OTP verification.",
            "Monitoring and error-handling frameworks for centralized logging, issue resolution and fault tolerance."
        ]
    },
    {
        title: "Software Engineering Intern",
        redirect: "/nyas",
        company: "Pariksha Labs",
        period: "Mar. 2023 - Jul. 2024",
        responsibilities: [
            "Built React.js form for SAP deployment, integrated CSV import and MongoDB storage.",
            "Automated cloud provisioning and infrastructure using Terraform and Jenkins."
        ]
    }
]

export function Experience()
{
    return (
        <section id="experience" className="container py-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <Card key={index} className="relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <CardHeader>
                            <CardTitle>
                                <Link href={exp.redirect}>
                                    {exp.title}
                                </Link>
                            </CardTitle>
                            <CardDescription>{exp.company} | {exp.period}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground">{resp}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function SystemDesign()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>System Design</CardTitle>
                <CardDescription>Overview of the architecture and high-level system design</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">Architecture Overview</h3>
                <p className="mb-4">
                    Our system utilizes a microservices architecture deployed on a serverless infrastructure,
                    allowing for high scalability and fault tolerance.
                </p>
                <h3 className="text-lg font-semibold mb-2">High-Level Diagram</h3>
                <div className="relative h-96 mb-4">
                    <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="System Architecture Diagram"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-2">Key Design Principles</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Horizontal scaling for handling increased load</li>
                    <li>Data partitioning for improved query performance</li>
                    <li>Event-driven architecture for real-time updates</li>
                    <li>Circuit breakers for fault tolerance</li>
                </ul>
            </CardContent>
        </Card>
    )
}


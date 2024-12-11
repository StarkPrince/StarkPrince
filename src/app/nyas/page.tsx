"use client"

import { EmbedContent } from "@/components/embed-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Experience()
{
    return (
        <section id="experience" className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-8 text-center">Nyas Experience & Implementation</h2>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Database Design</CardTitle>
                        <CardDescription>ER Diagram and schema optimizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            We use a combination of relational and NoSQL databases to handle different types of data
                            and query patterns efficiently.
                        </p>
                        <Image
                            title="Entity Relationship Diagram"
                            src="https://i.imgur.com/4Txr1Gz.png"
                            alt="Entity Relationship Diagram"
                            width={4000}
                            height={4000}
                        />
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>System Design</CardTitle>
                        <CardDescription>Overview of the architecture and high-level system design</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Our system utilizes a microservices architecture deployed on a serverless infrastructure,
                            allowing for high scalability and fault tolerance.
                        </p>
                        <Image
                            title="System Architecture Diagram"
                            src="https://i.imgur.com/p9HBPEP.png"
                            alt="High-level system architecture diagram"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Ticket & Subticket Workflow</CardTitle>
                        <CardDescription>Detailed ticket and sub-ticket management process</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            This workflow automates ticket creation, sub-ticket assignments, and notification handling, ensuring a streamlined process for managing client contracts.
                        </p>
                        <Image
                            title="Ticket Workflow Diagram"
                            src="https://i.imgur.com/3pPmOgj.png"
                            alt="Ticket Workflow Diagram"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                {/* Billing System */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Billing System</CardTitle>
                        <CardDescription>Integration of billing across countries with client and vendor contracts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Each client contract includes billing details for multiple countries. This ensures seamless financial operations with vendors and clients globally.
                        </p>
                        <Image
                            title="Billing System Diagram"
                            src="https://i.imgur.com/kXoWo6V.png"
                            alt="Billing System Diagram"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                {/* Field Engineer Allotment */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Field Engineer Allotment</CardTitle>
                        <CardDescription>Process for assigning engineers to sub-tickets</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Field engineers are assigned to sub-tickets based on availability, vendor contracts, and skill requirements.
                        </p>
                        <Image
                            title="Field Engineer Allotment"
                            src="https://i.imgur.com/iJ7jhvz.png"
                            alt="Field Engineer Allotment Workflow"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                {/* Ticket Invoice Generation */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Ticket Invoice Generation</CardTitle>
                        <CardDescription>Automated generation of invoices for tickets</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Our system generates invoices for tickets and sub-tickets with detailed breakdowns, ensuring transparent billing for clients.
                        </p>
                        <Image
                            title="Invoice Sample"
                            src="https://i.imgur.com/McSsobg.png"
                            alt="Ticket Invoice Sample"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                {/* Sub-ticket Cloning */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Sub-ticket Cloning</CardTitle>
                        <CardDescription>Efficient replication of sub-ticket configurations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            The sub-ticket cloning feature simplifies repetitive task setups by allowing engineers to duplicate and customize existing sub-tickets.
                        </p>
                        <Image
                            title="Sub-ticket Cloning Workflow"
                            src="https://i.imgur.com/KxJ2KzY.png"
                            alt="Sub-ticket Cloning Process"
                            width={2000}
                            height={2000}
                        />
                    </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Performance Metrics</CardTitle>
                        <CardDescription>Key performance indicators and monitoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            We closely monitor various performance metrics to ensure optimal system performance.
                        </p>
                        <EmbedContent
                            title="Performance Dashboard"
                            type="image"
                            src="/images/performance-dashboard.png"
                            alt="Performance metrics dashboard"
                        />
                    </CardContent>
                </Card>

                {/* Comprehensive Project Documentation */}
                <Card>
                    <CardHeader>
                        <CardTitle>Project Documentation</CardTitle>
                        <CardDescription>Comprehensive project documentation</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Our project is thoroughly documented, covering all aspects from architecture to maintenance procedures.
                        </p>
                        <EmbedContent
                            title="Project Documentation"
                            type="pdf"
                            src="/docs/project-documentation.pdf"
                        />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

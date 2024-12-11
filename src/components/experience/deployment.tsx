import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function Deployment()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>Deployment</CardTitle>
                <CardDescription>Cloud services, CI/CD, and deployment details</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">Cloud Service Provider</h3>
                <p className="mb-4">
                    We utilize AWS (Amazon Web Services) for our cloud infrastructure, leveraging services such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>EC2 for compute resources</li>
                    <li>RDS for managed database services</li>
                    <li>S3 for object storage</li>
                    <li>CloudFront for content delivery</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">CI/CD Pipeline</h3>
                <div className="relative h-64 mb-4">
                    <Image
                        src="/placeholder.svg?height=300&width=800"
                        alt="CI/CD Pipeline Diagram"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-2">Deployment Tools</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Docker for containerization</li>
                    <li>Kubernetes for orchestration</li>
                    <li>Terraform for infrastructure as code</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Deployment Environments</h3>
                <p className="mb-4">
                    We maintain three environments to ensure smooth development and deployment:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Development: For ongoing development and feature testing</li>
                    <li>Staging: Mirrors production for final testing before release</li>
                    <li>Production: Live environment serving end-users</li>
                </ul>
            </CardContent>
        </Card>
    )
}


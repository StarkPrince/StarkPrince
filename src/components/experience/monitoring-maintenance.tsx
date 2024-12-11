import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function MonitoringMaintenance()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>Monitoring & Maintenance</CardTitle>
                <CardDescription>Tools, logs, metrics, and maintenance strategies</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">Monitoring Tools</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Prometheus for metrics collection</li>
                    <li>Grafana for visualization and alerting</li>
                    <li>ELK Stack (Elasticsearch, Logstash, Kibana) for log management</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Logs & Metrics Dashboard</h3>
                <div className="relative h-64 mb-4">
                    <Image
                        src="/placeholder.svg?height=300&width=800"
                        alt="Monitoring Dashboard"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Request rate and latency</li>
                    <li>Error rate and types</li>
                    <li>Resource utilization (CPU, memory, disk)</li>
                    <li>Database query performance</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Maintenance Strategy</h3>
                <p className="mb-4">
                    Our maintenance strategy includes:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Regular security updates and patches</li>
                    <li>Scheduled database maintenance and optimization</li>
                    <li>Capacity planning and proactive scaling</li>
                    <li>Disaster recovery drills and backups</li>
                </ul>
            </CardContent>
        </Card>
    )
}


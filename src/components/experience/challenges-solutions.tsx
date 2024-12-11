import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ChallengesSolutions()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>Challenges & Solutions</CardTitle>
                <CardDescription>Major challenges faced and how they were resolved</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">Challenge 1: Handling High Traffic</h3>
                <p className="mb-4">
                    We faced issues with our application slowing down during peak hours due to high traffic.
                </p>
                <h4 className="font-semibold mb-2">Solution:</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Implemented a caching layer using Redis to reduce database load</li>
                    <li>Set up auto-scaling for our application servers based on CPU utilization</li>
                    <li>Optimized database queries and added appropriate indexes</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Challenge 2: Data Consistency in Microservices</h3>
                <p className="mb-4">
                    Ensuring data consistency across multiple microservices was challenging.
                </p>
                <h4 className="font-semibold mb-2">Solution:</h4>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Implemented event-driven architecture using Apache Kafka</li>
                    <li>Used the Saga pattern for distributed transactions</li>
                    <li>Implemented eventual consistency where appropriate</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Challenge 3: Cold Starts in Serverless Functions</h3>
                <p className="mb-4">
                    We experienced high latency due to cold starts in our serverless functions.
                </p>
                <h4 className="font-semibold mb-2">Solution:</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Implemented provisioned concurrency for critical functions</li>
                    <li>Optimized function code to reduce initialization time</li>
                    <li>Used a combination of serverless and container-based services for different workloads</li>
                </ul>
            </CardContent>
        </Card>
    )
}


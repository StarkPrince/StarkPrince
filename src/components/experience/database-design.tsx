import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function DatabaseDesign()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>Database Design</CardTitle>
                <CardDescription>ER Diagram, schema, and optimizations</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">ER Diagram</h3>
                <div className="relative h-96 mb-4">
                    <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="ER Diagram"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-lg font-semibold mb-2">Database Schema</h3>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(200) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
          `}</code>
                </pre>
                <h3 className="text-lg font-semibold mt-4 mb-2">Optimizations</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Indexing on frequently queried columns</li>
                    <li>Partitioning of large tables by date</li>
                    <li>Use of materialized views for complex aggregations</li>
                </ul>
            </CardContent>
        </Card>
    )
}


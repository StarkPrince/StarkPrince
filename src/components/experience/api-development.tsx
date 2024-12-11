import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ApiDevelopment()
{
    return (
        <Card>
            <CardHeader>
                <CardTitle>API Development</CardTitle>
                <CardDescription>API documentation, endpoints, and authentication</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                <p className="mb-4">
                    Our API is fully documented using Swagger. You can explore the interactive
                    documentation <a href="#" className="text-blue-500 hover:underline">here</a>.
                </p>
                <h3 className="text-lg font-semibold mb-2">Sample Endpoints</h3>
                <Tabs defaultValue="get">
                    <TabsList>
                        <TabsTrigger value="get">GET</TabsTrigger>
                        <TabsTrigger value="post">POST</TabsTrigger>
                        <TabsTrigger value="put">PUT</TabsTrigger>
                    </TabsList>
                    <TabsContent value="get">
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{`
GET /api/users/{id}

Response:
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "created_at": "2023-05-01T12:00:00Z"
}
              `}</code>
                        </pre>
                    </TabsContent>
                    <TabsContent value="post">
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{`
POST /api/posts

Request:
{
  "title": "New Post",
  "content": "This is the content of the new post.",
  "user_id": 1
}

Response:
{
  "id": 101,
  "title": "New Post",
  "content": "This is the content of the new post.",
  "user_id": 1,
  "created_at": "2023-05-15T09:30:00Z"
}
              `}</code>
                        </pre>
                    </TabsContent>
                    <TabsContent value="put">
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{`
PUT /api/users/{id}

Request:
{
  "email": "newemail@example.com"
}

Response:
{
  "id": 1,
  "username": "john_doe",
  "email": "newemail@example.com",
  "created_at": "2023-05-01T12:00:00Z",
  "updated_at": "2023-05-15T10:00:00Z"
}
              `}</code>
                        </pre>
                    </TabsContent>
                </Tabs>
                <h3 className="text-lg font-semibold mt-4 mb-2">Authentication</h3>
                <p>
                    We implement JWT (JSON Web Tokens) for secure authentication. Tokens are
                    issued upon successful login and must be included in the Authorization
                    header for protected endpoints.
                </p>
            </CardContent>
        </Card>
    )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BackendDevelopment()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Backend Development</CardTitle>
        <CardDescription>Technologies, key features, and code snippets</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Node.js with Express.js framework</li>
          <li>TypeScript for type-safe development</li>
          <li>MongoDB for data storage</li>
          <li>Redis for caching</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>RESTful API design</li>
          <li>Real-time updates using WebSockets</li>
          <li>Task queue for background processing</li>
          <li>Rate limiting and request throttling</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Code Snippets</h3>
        <Tabs defaultValue="auth">
          <TabsList>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="websocket">WebSocket</TabsTrigger>
          </TabsList>
          <TabsContent value="auth">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
              `}</code>
            </pre>
          </TabsContent>
          <TabsContent value="websocket">
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{`
import { Server } from 'socket.io';

export const setupWebSocket = (server: any) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};
              `}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}


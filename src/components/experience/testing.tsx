import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Testing()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Testing</CardTitle>
        <CardDescription>Unit testing, API testing, and automation</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Unit Testing</h3>
        <p className="mb-4">
          We use Jest for unit testing our JavaScript/TypeScript code. Here is an example of a unit test:
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <code>{`
import { calculateTotal } from '../utils/cart';

describe('calculateTotal', () => {
  it('should calculate the total correctly', () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 15, quantity: 1 },
    ];
    expect(calculateTotal(items)).toBe(35);
  });

  it('should return 0 for an empty cart', () => {
    expect(calculateTotal([])).toBe(0);
  });
});
          `}</code>
        </pre>
        <h3 className="text-lg font-semibold mb-2">API Testing</h3>
        <p className="mb-4">
          For API testing, we use Supertest along with Jest. Here is an example:
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <code>{`
import request from 'supertest';
import appimport app from '../app';

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.username).toBe('testuser');
  });
});
          `}</code>
        </pre>
        <h3 className="text-lg font-semibold mb-2">Test Automation</h3>
        <p className="mb-4">
          We use GitHub Actions for continuous integration and automated testing. Here is a snippet of our CI workflow:
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{`
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
          `}</code>
        </pre>
      </CardContent>
    </Card>
  )
}


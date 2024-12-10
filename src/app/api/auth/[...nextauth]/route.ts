import config from "@/config";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${config.baseUrl}/fieldEngineers/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

          if (res.data && res.data.user) {
            return {
              id: res.data.user.id,
              name: res.data.user.name,
              email: res.data.user.email,
              role: res.data.user.role,
              auth: res.data.auth,
              feId: res.data.feId,
            };
          }

          return null; // Return null if credentials are invalid
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add auth token and feId to the JWT
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.auth = user.auth; // Store the auth token
        token.feId = user.feId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Add auth token and feId to the session
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.role = token.role;
        session.user.auth = token.auth; // Include the auth token in the session
        session.user.feId = token.feId;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Set a secure secret
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

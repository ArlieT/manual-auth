import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma";
import { serialize, deserialize } from 'superjson';
export interface User {
  id?: string;
  user?: string;
  password?: string;
  email?: string;
}

export interface GoogleAuth {
  clientId:string,
  clientSecret:string
}
          //defualt empty string  if null
const { GOOGLE_ID = '', GOOGLE_SECRET = '' } = process.env;


export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const findUser = await prisma.user.findFirst({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
          select: {
            id: true,
            username: true,
            password: true,
            email: true,
            role: true,
          },
        });

        if (findUser) {
          console.log({ findUser });
        
          const user = {
            userId: findUser.id,
            name: findUser.username,
            email: findUser.email,
            image: '', // Add the image property if available
            role: findUser.role,
            // Include any other necessary properties
          };
        
          return user;
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
    
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET ,
     }),
    
  ],

  pages: {
    signIn: '/auth/signin',
    signOut: '/',
    error: '/auth/signup', // Error code passed in query string as ?error=
    newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  
  callbacks: {
    async session({ session, token, user }) {
      // Include the user ID in the session object
      console.log({ session });
      console.log({ token });
      console.log({ user });
  
      if (user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.name = user.name;
        // Include any other necessary properties
      }
  
      // Serialize the session object
      const serializedSession = JSON.stringify(session);
  
      // Deserialize the session object
      const deserializedSession = JSON.parse(serializedSession);
  
      return deserializedSession;
    },
  },
  
  
};
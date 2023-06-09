import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import prisma from "./prisma";

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
  session: {
    strategy: "jwt",
  },
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
        });

        if (findUser) {
          // const user: User = {
          //   id: findUser.id.toString(),
          //   user: findUser.username,
          //   // password: findUser.password,
          //   email: findUser.email,
          return findUser as any
          
          // console.log('-----')
          // console.log({user})
          // return user as any;
        } else {
          return null;
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
    signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs
  //     if (url.startsWith("/")) return `${baseUrl}${url}`
  //     // Allows callback URLs on the same origin
  //     else if (new URL(url).origin === baseUrl) return url
  //     return baseUrl
  //   }
  // }
};
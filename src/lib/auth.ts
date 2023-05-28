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
          const user: User = {
            id: findUser.id.toString(),
            user: findUser.username,
            // password: findUser.password,
            email: findUser.email,
          };
          console.log('-----')
          console.log({user})
          return user as any;
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

  

};
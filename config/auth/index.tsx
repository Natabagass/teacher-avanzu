import axios from "axios";
import { NextAuthOptions, SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { API_KEY, USERS_LOGIN } from "utils/endpoint";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'login-manual',
            name: "ManualSignIn",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Email@gmail.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
                rememberMe: {
                    label: "Remember Me",
                    type: "checkbox"
                }
            },
            async authorize(credentials) {
                const res = await axios.post(`${API_KEY + USERS_LOGIN}`, {
                    email: credentials?.email,
                    password: credentials?.password,
                    rememberMe: Boolean(credentials?.rememberMe)
                }, {
                })
                    .then(async (result) => {
                        return result.data
                    }).catch((err: any) => {
                        throw new Error(JSON.stringify(err.response.data.errors));
                    });
                return res;
            }
        }),
    ],
    pages: {
        signIn: '/',
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, user, token }) {
            session.user = token;
            return session
        },
        async jwt({ token, user, account, trigger, session }) {

            if (user)
                token.id = user.id

            if (account)
                token.accessToken = account.access_token

            return { ...token, ...user }
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}
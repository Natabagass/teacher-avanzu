import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { API_KEY, USERS, USERS_LOGIN } from "utils/endpoint";

export async function POST(request: Request) {
    const {
        email,
        password,
        passwordConfirmation,
        type,
        credential,
        firstName,
        lastName,
        name
    } = await request.json();

    try {
        const res = await axios.post(API_KEY + USERS,
            {
                email: email,
                password: password,
                passwordConfirmation: passwordConfirmation,
                type: type,
                credential: credential,
                firstName: firstName,
                lastName: lastName,
                name: name
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            }
        )
        if (res.status === 200) {
            const response = NextResponse.json(
                {
                    code: 200,
                    ...res?.data,
                },
                { status: 200 },
            );
            return response;
        }
    } catch (err: any) {
        return new Response(JSON.stringify({
            code: err.response.status,
            ...err.response.data,
        }), { status: err.response.status });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    const {
        email,
        type,
        credential,
        lastName,
        firstName,
        name,
        biography,
        occupation,
        phone,
        displayName
    } = await request.json()

    try {
        const res = await axios.put(API_KEY + USERS,
            {
                email,
                type,
                credential,
                firstName,
                lastName,
                name,
                biography,
                occupation,
                phone,
                displayName
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${TOKEN}`,
                }
            }
        )
        if (res.status === 200) {
            const response = NextResponse.json(
                {
                    code: 200,
                    ...res?.data,
                },
                { status: 200 },
            );
            return response;
        }
    } catch (err: any) {
        return new Response(JSON.stringify({
            code: err.response.status,
            ...err.response.data,
        }), { status: err.response.status });
    }
}

export async function PATCH(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    const {
        password,
        passwordConfirmation,
        currentPassword
    } = await request.json()

    try {
        const res = await axios.patch(API_KEY + USERS,
            {
                password,
                passwordConfirmation,
                currentPassword
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${TOKEN}`,
                }
            }
        )
        if (res.status === 200) {
            const response = NextResponse.json(
                {
                    code: 200,
                    ...res?.data,
                },
                { status: 200 },
            );
            return response;
        }
    } catch (err: any) {
        return new Response(JSON.stringify({
            code: err.response.status,
            ...err.response.data,
        }), { status: err.response.status });
    }
}

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.get(API_KEY + USERS, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${TOKEN}`,
            }
        });

        if (res.status === 200) {
            return new Response(JSON.stringify({
                code: 200,
                ...res.data,
            }), { status: 200 });
        }
    } catch (err: any) {
        return new Response(JSON.stringify({
            code: err.response.status,
            ...err.response.data,
        }), { status: err.response.status });
    }
}

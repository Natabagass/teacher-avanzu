import { API_KEY, FILES, USERS, USERS_BACKGROUND_PHOTO, USERS_PROFILE_PICTURE, VIDEO } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    const body = await request.json();

    try {
        const res = await axios.post(API_KEY + VIDEO,
            {
                video: body
            },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${TOKEN}`,
                    "Content-Type": "multipart/form-data",
                    "Accept": "multipart/form-data"
                }
            }
        )
        if (res.status === 200 || res.status === 201) {
            return new Response(JSON.stringify({
                code: 200 || 201,
                ...res.data,
            }), { status: 200 || 201 });
        }
    } catch (err: any) {
        return new Response(JSON.stringify({
            code: err.response.status,
            ...err.response.data,
        }), { status: err.response.status });
    }
}
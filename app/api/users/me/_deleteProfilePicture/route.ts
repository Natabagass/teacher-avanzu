import { API_KEY, USERS, USERS_BACKGROUND_PHOTO, USERS_DELETE_PROFILE_PICTURE, USERS_PROFILE_PICTURE } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    const body = await request.json();

    try {
        const res = await axios.delete(API_KEY + USERS_DELETE_PROFILE_PICTURE,
            {
                data: {
                    ...body
                },
                headers: {
                    "Accept": "text/plain",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${TOKEN}`,
                }
            },
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
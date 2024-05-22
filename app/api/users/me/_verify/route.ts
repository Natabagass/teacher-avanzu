import axios from "axios";
import { NextResponse } from "next/server";
import { API_KEY, USERS_LOGIN, USERS_VERIFY } from "utils/endpoint";

export async function POST(request: Request) {
    const body = await request.json();

    try {
        const res = await axios.post(API_KEY + USERS_VERIFY,
            { ...body },
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
        return NextResponse.json(
            {
                ...err.response.data
            }
        );
    }
}
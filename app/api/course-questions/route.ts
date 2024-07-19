import { API_KEY, COURSES, NOTIFICATION_GET, USERS_SOCIAL } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get("page");
    const perPage = searchParams.get("per-page");
    const isAnswered = searchParams.get("isAnswered");

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.get(`${API_KEY}course-questions?page=${page}&per-page=${perPage}&isAnswered=${isAnswered}`, {
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

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token
    const body = await request.json()
    const searchParams = request.nextUrl.searchParams
    const courseID = searchParams.get("courseID");

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.post(`${API_KEY}course-questions?courseID=${courseID}`,
            {
                ...body
            },
            {
                headers: {
                    "Accept": "text/plain",
                    "enctype": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer ${TOKEN}`,
                }
            }
        );

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

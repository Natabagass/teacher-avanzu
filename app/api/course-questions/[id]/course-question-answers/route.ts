import { API_KEY, COURSES, NOTIFICATION_GET, USERS_SOCIAL } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token
    const body = await request.json()

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.post(`${API_KEY}course-questions/${params.id}/course-question-answers`,
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
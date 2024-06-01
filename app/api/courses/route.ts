import { API_KEY, COURSES } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token
    const body = await request.json();

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.post(API_KEY + COURSES,
            {
                ...body
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN}`,
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
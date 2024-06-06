import { API_KEY, COURSES, NOTIFICATION_GET, USERS_SOCIAL } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get("page");
    const pageSize = searchParams.get("per-page")
    const sortBy = searchParams.get("sort-by")
    const query = searchParams.get("query")
    const asCreator = searchParams.get("as-creator")

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.get(`${API_KEY}${COURSES}?page=${page}&per-page=${pageSize}${sortBy ? `&sort-by=${sortBy}` : ''}${query ? `&query=${query}` : ''}${asCreator ? `&as-creator=${asCreator}` : ''}`, {
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

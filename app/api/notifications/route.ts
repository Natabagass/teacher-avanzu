import { API_KEY, NOTIFICATION_GET, USERS_SOCIAL } from "@utils/endpoint";
import axios from "axios";
import { authOptions } from "config/auth";
import { getServerSession } from "next-auth";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions)
    const TOKEN = session?.user.token

    try {
        if (!TOKEN) {
            return new Response('Unauthorized', { status: 401 });
        }

        const res = await axios.get(API_KEY + NOTIFICATION_GET, {
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

import { createPageRule } from "@/services/page-rules";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    console.log(body);

    const res = await createPageRule(body);

    const data = await res.json();

    console.log(data);

    return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
    });
};

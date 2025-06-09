import { authCode } from "@/core/config";
import { createPageRule } from "@/services/page-rules";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    const { authentication } = body;

    if (authentication != authCode)
        return new Response(JSON.stringify({ message: "Access denied" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
        });

    delete body.authentication;
    const res = await createPageRule(body);

    const data = await res.json();

    return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
    });
};

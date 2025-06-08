import { apiKey, email } from "../core/config";

interface QueryInterface {
    name: string;
    value: string;
}

export function get(url: string, ...query: QueryInterface[]) {
    const urlQuery = new URLSearchParams();

    query.forEach((q) => {
        if (q.value) urlQuery.append(q.name, q.value);
    });

    const fullUrl = `${url}${
        query.length > 0 ? "?" + urlQuery.toString() : ""
    }`;

    return fetch(fullUrl, {
        method: "GET",
        headers: {
            "X-Auth-Email": email,
            "X-Auth-Key": apiKey,
        },
    });
}

export function post(url: string, body: unknown) {
    return fetch(url, {
        method: "POST",
        headers: {
            "X-Auth-Email": email,
            "X-Auth-Key": apiKey,
        },
        body: JSON.stringify(body),
    });
}

export function remove(url: string, id: string) {
    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "X-Auth-Email": email,
            "X-Auth-Key": apiKey,
        },
    });
}

export function update(url: string, body: unknown) {
    return fetch(url, {
        method: "PUT",
        headers: {
            "X-Auth-Email": email,
            "X-Auth-Key": apiKey,
        },
        body: JSON.stringify(body),
    });
}

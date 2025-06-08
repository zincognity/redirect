import { zoneId } from "../core/config";
import { get, post, remove, update } from "../utils/fetch";

export function getPageRules() {
    return get(`https://api.cloudflare.com/client/v4/zones/${zoneId}`);
}

export function getRuleDetails(id: string) {
    return get(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules/${id}`
    );
}

export function createPageRule(body: unknown) {
    return post(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules`,
        body
    );
}

export function updatePageRule(id: string, body: unknown) {
    return update(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules/${id}`,
        body
    );
}

export function editPageRule(id: string, body: unknown) {
    return update(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules/${id}`,
        body
    );
}

export function deletePageRule(id: string) {
    return remove(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules`,
        id
    );
}

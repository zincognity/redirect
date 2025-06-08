interface ImportMetaEnv extends NodeJS.ProcessEnv {
    CLOUDFLARE_EMAIL: string;
    CLOUDFLARE_API_KEY: string;
    ZONE_ID: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

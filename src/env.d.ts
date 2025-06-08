interface ImportMetaEnv extends NodeJS.ProcessEnv {
    CLOUDFLARE_EMAIL: string;
    CLOUDFLARE_API_KEY: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

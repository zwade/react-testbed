import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
    server: {
        port: 4000,
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
});

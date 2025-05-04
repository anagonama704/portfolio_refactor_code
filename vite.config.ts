import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                //↓削除
                //'resources/js/app.js',
                //↓追加
                "resources/ts/index.tsx",
            ],
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
    },
});

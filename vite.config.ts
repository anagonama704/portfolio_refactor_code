import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 5173,
        host: true,
        hmr: {
            host: "localhost",
        },
    },
    define: {
        "process.env": process.env,
        "import.meta.env.VITE_API_URL": JSON.stringify("http://localhost:8089"),
    },
});

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base:
    command === "build" && process.env.GITHUB_PAGES === "true"
      ? "/cinematic-resume/"
      : "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
}));

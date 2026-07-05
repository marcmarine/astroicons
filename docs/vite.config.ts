import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: process.env.PAGES_BASE_PATH,
});

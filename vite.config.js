import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "/Users/upekhansaja/Downloads/WEB_DESIGN.jpg",
      ],
    },
  },
  plugins: [react(), tailwindcss()],
});

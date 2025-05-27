import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Polyfill for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Optional: add Replit-specific plugin only when available
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    try {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      plugins.push(cartographer());
    } catch (err) {
      console.warn("Cartographer plugin could not be loaded:", err.message);
    }
  }

  // Absolute paths using fallback-safe values
  const clientPath = "client";
  const sharedPath = "shared";
  const assetsPath = "attached_assets";

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, clientPath, "src"),
        "@shared": path.resolve(__dirname, sharedPath),
        "@assets": path.resolve(__dirname, assetsPath),
      },
    },
    root: path.resolve(__dirname, clientPath),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});

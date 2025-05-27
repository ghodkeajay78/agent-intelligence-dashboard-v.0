import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Polyfill __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Optional plugin: only load if REPL_ID is defined (e.g., on Replit)
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  // Define safe fallback paths
  const clientSrc = path.resolve(__dirname, "client", "src");
  const shared = path.resolve(__dirname, "shared");
  const attachedAssets = path.resolve(__dirname, "attached_assets");
  const rootPath = path.resolve(__dirname, "client");
  const outDir = path.resolve(__dirname, "dist/public");

  return {
    plugins,
    resolve: {
      alias: {
        "@": clientSrc,
        "@shared": shared,
        "@assets": attachedAssets,
      },
    },
    root: rootPath,
    build: {
      outDir: outDir,
      emptyOutDir: true,
    },
  };
});

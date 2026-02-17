import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion"],
          "firebase-vendor": ["firebase/app", "firebase/firestore"],
        },
      },
    },
    server: {
      host: "192.168.0.186",
      port: 5173, // or '0.0.0.0' to listen on all addresses
    },
  },
});

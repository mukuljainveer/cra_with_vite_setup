import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import path from 'path';

console.log(path.resolve(__dirname, 'src'))
export default defineConfig({
  plugins: [react(), envCompatible()],
  envPrefix: "REACT_APP",
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@screen', replacement: path.resolve(__dirname, 'src/screen') },
    ],
  },
});

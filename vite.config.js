import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/main.ts"),
      name: "boarding.js",
      fileName: "boarding",
    },
  },
});

const path = require("path");
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      target: "esnext",
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "maplibre-gl-svg",
        fileName: (format) => `maplibre-gl-svg.${format}.js`,
      },
    },
  };
});

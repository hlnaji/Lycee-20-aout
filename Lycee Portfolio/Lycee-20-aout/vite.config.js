// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/Lycee-20-aout/",
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Lycee-20-aout/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/react-fontawesome",
      ],
    },
  },
});

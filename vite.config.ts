import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repoBase = "/Alpine-Routes/";

export default defineConfig(({ mode }) => {
  const isGitHubPages = mode === "pages" || process.env.GITHUB_PAGES === "true";

  return {
    base: isGitHubPages ? repoBase : "/",
    server: {
      port: 5173,
      host: true,
    },
    resolve: {
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      tailwindcss(),
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        router: {
          basepath: isGitHubPages ? "/Alpine-Routes" : undefined,
        },
        server: { entry: "server" },
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),
      viteReact(),
    ],
  };
});

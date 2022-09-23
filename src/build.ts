import { build } from "esbuild";

async function main() {
    await build({
        bundle: true,
        format: "esm",
        mainFields: ["browser", "module", "main"],
        platform: "browser",
        target: "es2020",
        sourcemap: false,
        charset: "utf8",
        entryPoints: ["src/entry.worker.tsx"],
        outfile: ".surf/worker.js",
        tsconfig: "worker.tsconfig.json",
    });
}

main();

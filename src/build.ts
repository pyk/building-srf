import { build } from "esbuild";

async function main() {
    await build({
        entryPoints: ["pages/page.tsx"],
        bundle: true,
        outfile: ".srf/worker.js",
    });
}

main();

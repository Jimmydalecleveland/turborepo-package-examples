import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { build } from "esbuild"

build({
	entryPoints: ["src/index.ts"],
	outbase: "./src",
	outdir: "dist",
	bundle: true,
	sourcemap: true,
	treeShaking: true,
	format: "esm",
	target: "esnext",
	platform: "browser",
	external: ['react'],
	plugins: [vanillaExtractPlugin()],
})
	.then(() => console.log("💡 Build Complete!"))
	.catch(() => process.exit(1));

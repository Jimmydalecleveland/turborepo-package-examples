require("esbuild")
	.build({
		entryPoints: ["src/index.ts"],
		outbase: "./src",
		outdir: "dist",
		bundle: true,
		sourcemap: true,
		treeShaking: true,
		format: "esm",
		target: "esnext",
		platform: "neutral",
	})
	.then(() => console.log("💡 Build Complete!"))
	.catch(() => process.exit(1));

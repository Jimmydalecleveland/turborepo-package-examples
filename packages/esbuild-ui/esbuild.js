require("esbuild")
	.build({
		entryPoints: ["src/index.js"],
		outbase: "./src",
		outdir: "dist",
		bundle: true,
		treeShaking: true,
		format: "esm",
		target: "esnext",
		platform: "neutral",
	})
	.then(() => console.log("💡 Build Complete!"))
	.catch(() => process.exit(1));

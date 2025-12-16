import { defineConfig } from "tsdown";
import Vue from "unplugin-vue/rolldown";

export default defineConfig({
	entry: ["src/index.ts"],
	treeshake: false,
	sourcemap: true,
	minify: false,
	platform: "neutral",
	plugins: [Vue({ isProduction: true })],
	exports: true,
	dts: { vue: true },
});

import litcss from "rollup-plugin-lit-css";
import html from "rollup-plugin-html";
import includePaths from "rollup-plugin-includepaths";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import cjs from "rollup-plugin-cjs-es";

export default {
	input: ["./src/index.ts"],
	output: [
		{
			file: "./dist/<%= componentName %>.es.js",
			format: "es",
			sourcemap: true,
		},
		{
			file: "./dist/<%= componentName %>.js",
			format: "cjs",
			sourcemap: false,
		}
	],
	plugins: [
		typescript({
			typescript: require("typescript"),
            objectHashIgnoreUnknownHack: true,
		}),
		cjs({
			nested: true,
			exclude: [ "**/*.css", "**/*.html",  ],
		}),
		includePaths({
			paths: ["src", "dist"],
			extensions: [".css", ".html"],
		}),
		litcss(),
		html({
			include: '**/*.html'
		}),
		terser(),
		resolve()
	]
};
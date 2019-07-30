import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config.js';
import litSass from '@ponday/rollup-plugin-lit-sass';
import cjs from "rollup-plugin-cjs-es";
import cpy from "rollup-plugin-cpy";

const configs = createDefaultConfig({
    input: './index.html',
    extensions: ['.js', '.mjs', '.ts'],
});

export default configs.map(config => ({
    ...config,
    plugins: [
        ...config.plugins,
        cpy({
            // copy over any/all images files
            files: ["./src/img/*.png"],
            dest: "./dist/img",
        }),
        cjs({
			nested: true,
			exclude: [ "**/*.css", "**/*.scss", "**/*.html",  ],
		}),
        litSass()
    ],
}));
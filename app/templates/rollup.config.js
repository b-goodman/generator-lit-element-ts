import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config.js';
import litSass from '@ponday/rollup-plugin-lit-sass';
import cjs from "rollup-plugin-cjs-es";

const configs = createDefaultConfig({
    input: './index.html',
    extensions: ['.js', '.mjs', '.ts'],
});

export default configs.map(config => ({
    ...config,
    plugins: [
        ...config.plugins,
        cjs({
			nested: true,
			exclude: [ "**/*.css", "**/*.scss", "**/*.html",  ],
		}),
        litSass()
    ],
}));
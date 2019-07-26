/**
 * Transform a kebab-case custom element tag name into a PascalCase class name.
 * @param {string} componentName Tag name of custom component
 * @returns {string} Tag name as PascalCase
 */
const getClassName = (componentName) => {
    return componentName.toLowerCase().split("-").map( (str) => {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
    }).join("")
};

/**
 * Map template file to intended file.
 * @example "package.json.template" becommes "package.json"
 * @example "index.html" stays as "index.html" if only one value is given.
 */
const templateToDestTuples = [
    ["src/index.ts.template", "src/index.ts"],
    ["src/style.scss"],
    ["src/template.html"],
    ["src/typings.d.ts.template", "src/typings.d.ts"],
    [".gitignore"],
    ["index.html"],
    ["package.json.template", "package.json"],
    ["README.md"],
    ["rollup.config.js"],
    [".babelrc"],
    ["tsconfig.json.template", "tsconfig.json"],
];

module.exports = {
    getClassName, templateToDestTuples
}
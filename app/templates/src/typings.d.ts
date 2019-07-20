declare module '*.css' {
    const content: { cssText: string};
    export default content;
}

declare module "*.scss" {
    import { css, CSSResult } from 'lit-element';
    const scss: (params: { css: typeof css}) => CSSResult;
    export default scss;
}

declare module "*.html" {
    const content: string;
    export default content;
}
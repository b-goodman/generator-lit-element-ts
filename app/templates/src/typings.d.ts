declare module '*.css' {
    const content: { cssText: string};
    export default content;
}

declare module "*.html" {
    const content: string;
    export default content;
}
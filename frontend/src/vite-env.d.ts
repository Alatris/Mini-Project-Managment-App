declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.gif' {
    const content: string;
    export default content;
}

declare module '*.bmp' {
    const content: string;
    export default content;
}

declare module '*.tiff' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const content: { [className: string]: string; };
    export default content;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

interface ImportMeta {
    readonly env: {
        readonly VITE_API_URL: string;
    };
}
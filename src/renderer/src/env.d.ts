/// <reference types="vite/client" />

declare module '*.svg' {
  const content: Element<React.SVGAttributes>;
  export default content;
}
declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}

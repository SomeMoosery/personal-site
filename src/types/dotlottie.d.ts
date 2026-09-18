import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// dotlottie-wc is loaded as a web component from index.html
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-wc': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { src: string; loop?: boolean; autoplay?: boolean };
    }
  }
}

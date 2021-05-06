import { FC } from 'react';
interface CodeBlockProps {
    className?: string;
    live?: string;
    transform?: string;
    compact?: string;
    children: string;
}
export declare const CodeBlock: FC<CodeBlockProps>;
export {};

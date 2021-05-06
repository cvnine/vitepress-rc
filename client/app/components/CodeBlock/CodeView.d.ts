import { FC } from 'react';
import { Language } from 'prism-react-renderer';
interface CodeBlockProps {
    code: string;
    language: Language;
    lineNumbers: number[][];
}
export declare const CodeView: FC<CodeBlockProps>;
export {};

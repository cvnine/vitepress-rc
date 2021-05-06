import { FC } from 'react';
interface ICodeOptions {
    transform: boolean;
    compact: boolean;
}
interface CodeBlockProps {
    code: string;
    local: boolean;
    codeOptions: ICodeOptions;
}
export declare const CodePreviewer: FC<CodeBlockProps>;
export {};

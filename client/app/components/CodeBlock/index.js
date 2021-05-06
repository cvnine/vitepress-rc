import { jsx as _jsx } from "react/jsx-runtime";
import { CodeView } from './CodeView';
import { CodePreviewer } from './CodePreviewer';
const RE = /^language-([^{]*)({([\d,-]+)})*/;
function parseClassName(className) {
    if (className) {
        const result = RE.exec(className) ?? [null, 'js', null];
        const lineNumbers = result[3]?.split(',').map((x) => x.split('-').map((n) => parseInt(n, 10))) ?? [];
        return [result[1], lineNumbers];
    }
    return ['js', []];
}
export const CodeBlock = ({ children, className, live, transform, compact, ...res }) => {
    const code = children.replace(/\n$/, '');
    const [language, lineNumbers] = parseClassName(className);
    const codeOptions = {
        transform: !!transform,
        compact: !!compact,
    };
    if (live && (language === 'jsx' || language === 'tsx')) {
        let local = live === 'local';
        return _jsx(CodePreviewer, { code: code, local: local, codeOptions: codeOptions }, void 0);
    }
    return _jsx(CodeView, { code: code, language: language, lineNumbers: lineNumbers }, void 0);
};

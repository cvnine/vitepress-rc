import type { Alias } from 'vite';
import type { Transformer } from 'unified';
import type { Header, MdxVitePluginOption } from '../../../types/types';
export interface VFileData {
    frontmatter: {
        [key: string]: any;
    };
    headers: Header[];
}
export declare type IPluginTransformer = (node: Parameters<Transformer>[0], vFile: Parameters<Transformer>[1] & {
    data: VFileData;
}, next?: Parameters<Transformer>[2]) => ReturnType<Transformer>;
declare function mdxTransform(code_mdx: string, id: string, { root, alias }: {
    root: string;
    alias: Alias[];
}, userPlugin?: MdxVitePluginOption): Promise<{
    code: string;
    pageData: {
        title: string;
        description: any;
        relativePath: string;
        headers: Header[];
        frontmatter: {
            [key: string]: any;
        };
        lastUpdated: number;
    };
}>;
export { mdxTransform };

import type { SiteConfig } from '../../../types/types';
import type { RollupOutput, OutputChunk, OutputAsset } from 'rollup';
export declare function renderPage(config: SiteConfig, page: string, // foo.md
result: RollupOutput, appChunk: OutputChunk, cssChunk: OutputAsset, hashMapString: string): Promise<void>;

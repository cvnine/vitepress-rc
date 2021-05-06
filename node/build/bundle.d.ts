import { RollupOutput } from 'rollup';
import { BuildOptions } from 'vite';
import type { SiteConfig } from '../../../types/types';
export declare const okMark = "\u001B[32m\u2713\u001B[0m";
export declare const failMark = "\u001B[31m\u2716\u001B[0m";
export declare function bundle(config: SiteConfig, options: BuildOptions): Promise<[RollupOutput, RollupOutput, Record<string, string>]>;

declare class FileCache {
    cache: Record<string, {
        filePath: string;
        updatedTime: number;
        value: any;
    }>;
    add(filePath: string, value: any, key?: string): void;
    get(key: string): any;
    hmrCache: Record<string, string[]>;
    setHmrCache(id: string, filePaths: string[]): void;
    getHmrCache(filePath: string): string[];
}
export declare const cacher: FileCache;
export {};

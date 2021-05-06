export const inBrowser = typeof window !== 'undefined';
export function joinPath(base, path) {
    return `${base}${path}`.replace(/\/+/g, '/');
}

export const inBrowser = typeof window !== 'undefined'

export function joinPath(base: string, path: string): string {
	return `${base}${path}`.replace(/\/+/g, '/')
}

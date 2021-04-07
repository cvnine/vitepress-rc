import fs from 'fs'

class FileCache {
	cache: Record<string, { filePath: string; updatedTime: number; value: any }> = {}

	add(filePath: string, value: any, key?: string) {
		this.cache[key || filePath] = {
			filePath,
			value,
			updatedTime: fs.lstatSync(filePath).mtimeMs,
		}
	}

	get(key: string) {
		let result

		if (this.cache[key] && fs.lstatSync(this.cache[key].filePath).mtimeMs === this.cache[key].updatedTime) {
			result = this.cache[key].value
		}

		return result
	}

	hmrCache: Record<string, string[]> = {}

	setHmrCache(id: string, filePaths: string[]) {
		this.hmrCache[id] = filePaths
	}

	getHmrCache(filePath: string) {
		let result: string[] = []
		for (const [key, value] of Object.entries(this.hmrCache)) {
			if (value.includes(filePath)) {
				result.push(key)
			}
		}
		return result
	}
}

export const cacher = new FileCache()

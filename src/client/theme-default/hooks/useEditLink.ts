import { useContext } from 'react'
import { Context, useSideData } from 'vitepress-rc'

const bitbucketRE = /bitbucket.org/
const endingSlashRE = /\/$/
const outboundRE = /^[a-z]+:/i

export function isNullish(value: any): value is null | undefined {
	return value === null || value === undefined
}

export function isExternal(path: string): boolean {
	return outboundRE.test(path)
}

export function useEditLink() {
	const { themeConfig } = useSideData()
	const route = useContext(Context)

	const showEditLink = isNullish(route.data.frontmatter.editLink)
		? themeConfig.editLinks
		: route.data.frontmatter.editLink

	const { repo, docsDir = '', docsBranch = 'main', docsRepo = repo } = themeConfig

	const { relativePath } = route.data

	return {
		url:
			!showEditLink || !relativePath || !repo
				? null
				: createUrl(repo, docsRepo!, docsDir, docsBranch, relativePath),
		text: themeConfig.editLinkText || 'Edit this page',
	}
}

function createUrl(repo: string, docsRepo: string, docsDir: string, docsBranch: string, path: string): string {
	return bitbucketRE.test(repo)
		? createBitbucketUrl(repo, docsRepo, docsDir, docsBranch, path)
		: createGitHubUrl(repo, docsRepo, docsDir, docsBranch, path)
}

function createGitHubUrl(repo: string, docsRepo: string, docsDir: string, docsBranch: string, path: string): string {
	const base = isExternal(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`

	return (
		base.replace(endingSlashRE, '') +
		`/edit` +
		`/${docsBranch}/` +
		(docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
		path
	)
}

function createBitbucketUrl(repo: string, docsRepo: string, docsDir: string, docsBranch: string, path: string): string {
	const base = isExternal(docsRepo) ? docsRepo : repo

	return (
		base.replace(endingSlashRE, '') +
		`/src` +
		`/${docsBranch}/` +
		(docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
		path +
		`?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
	)
}

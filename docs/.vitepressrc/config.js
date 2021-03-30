module.exports = {
	lang: 'en-US',
	title: 'VitePrssawefwaarc',
	description: 'Vite & React p site generator.',
  
	themeConfig: {
	  repo: 'cvnine/vitepress-rc',
	  docsDir: 'docs',
  
	  editLinks: true,
	  editLinkText: 'Edit this page on GitHub',
	  lastUpdated: 'Last Updated',
  
	  algolia: {
		apiKey: 'c57105e511faa5558547599f120ceeba',
		indexName: 'vitepress'
	  },
  
	  nav: [
		{ text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
		{
		  text: 'Github',
		  link: 'https://github.com/cvnine/vitepress-rc'
		}
	  ],
  
	  sidebar: {
		'/guide/': getGuideSidebar(),
		'/': getGuideSidebar()
	  }
	}
  }
  
  function getGuideSidebar() {
	return [
	  {
		text: 'Introduction',
		children: [
		  { text: 'What is VitePss?', link: '/' },
		  { text: 'Getting Started', link: '/guide/getting-started' },
		  { text: 'Configuration', link: '/guide/differences-from-vitepress' },
		]
	  },
	  {
		text: 'Advanced',
		children: [
		  { text: 'Frontmatter', link: '/guide/differences-from-vitepress' },
		  { text: 'Global Computed', link: '/guide/getting-started' },
		]
	  }
	]
  }

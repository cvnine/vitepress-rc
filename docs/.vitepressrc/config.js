const path = require('path')

module.exports = {
  lang: 'zh-CN',
  title: 'VitePress-rc',
  description: 'Vite & React powered static site generator.',
//   base: '/vitepress-rc',
  alias:{
	'root': path.resolve(__dirname, '../')
  },

  md:{
	  codeScope: {
		  'demo-c': path.resolve(__dirname, '../components/index.tsx'),
	  },
	  docgen:{
		  
	  }
  },

  themeConfig: {
    repo: 'cvnine/vitepress-rc',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '最后更新时间',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },


    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      { text: 'Test', link: '/local/dif', activeMatch: '^/local/' },
      { text: 'test', items:[
		{
			text: 'Release Noteswww',
			link: 'https://github.com/cvnine/vitepress-rc/releases'
		  },
		  { text: 'ee', link: '/local/dif', activeMatch: '^/local/' },
	  ] },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/cvnine/vitepress-rc/releases'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/local/': getLocalSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getLocalSidebar(){
	return [
		{
			text: 'Test',
			children: [
				{ text: 'Difference', link: '/local/dif' },
			]
		},
	]
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is VitePress?', link: '/'},
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Asset Handling', link: '/guide/assets' },
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Deploying', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Global Computed', link: '/guide/global-computed' },
        { text: 'Global Component', link: '/guide/global-component' },
        { text: 'Customization', link: '/guide/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}

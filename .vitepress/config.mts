import { defineConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'

import { generateSidebar } from 'vitepress-sidebar'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Greenage",
  description: "The official community portal of Salarpuria Sattva Greenage.",

  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://greenage.life' },

  srcExclude: [ 'README.md', 'tmp' ],

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: { src: '/greenage-logo.svg' },
    siteTitle: 'Greenage',
    search: { provider: 'local' },

    lastUpdated: {
      text: 'Edited',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Visitor', link: '/visitor' },
      { text: 'Photos', link: 'https://photos.app.goo.gl/D1JwF7qMFKDoFRpn6' },
      { text: 'Library', link: 'https://www.libib.com/u/greenage/' },
      { text: 'Contact', link: '/contact' },
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/greenagelife' },
    ],

    footer: {
      message: 'Greenage Owners Association.',
      copyright: 'Copyright © 2012-present.'
    },

    // https://github.com/jooy2/vitepress-sidebar
    sidebar: generateSidebar({
      // documentRootPath: '/',
      // scanStartPath: null,
      // resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile  : true,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: true,
      capitalizeEachWords: true,
      collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: true,
      sortMenusByFrontmatterOrder: true,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumerically: false,
      manualSortFileNameByPriority: [
        'new.md',
        'apps.md',
        'visitor.md',
        'contact.md',
        'contribute.md',
        'privacy.md',
        'amenities',
        'info',
        'policies',
        'relocation',
        'newsletters',
      ],
      excludeFiles: ['README.md'],
      excludeFolders: ['node_modules', 'public', 'tmp'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Site by Oinam',
      // rootGroupLink: 'https://oinam.com/',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),
    
  }
})
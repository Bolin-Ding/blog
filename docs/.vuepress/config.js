module.exports = {
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ],
    subSidebar: 'auto'
  },
  authorAvatar: 'https://future2022.tk/.pic/index.png',
  blogConfig: {
    category: {
      location: 2,
      text: 'Category'
    },
    tag: {
      location: 3,
      text: 'Tag'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bolin-ding' },
    ]
  },
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    title: 'Future官方博客',
    description: 'Future官方博客',
    dest: 'public',
    theme: "reco",
    themeConfig: {
        noFoundPageByTencent: false,
        type: 'blog',
        nav: [
            { text: "官网", link: "https://future2022.tk" },
            { text: "博客首页", link: "/" },
            { text: "学习资源", link: "/stu/" },
            { text: "其他资源", link: "/oth/" },
        ]
      }
}

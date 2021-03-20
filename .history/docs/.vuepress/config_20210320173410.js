module.exports = {
  title:"南山客java日记",
  description:"南山客的java日记,java笔记,java面试",
  head: [
      ['meta', { name: 'Keywords', content: '南山客的java日记,java笔记,java面试' }],
      ['meta', { name: 'description', content: '南山客的java日记用心分享' }],
      ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
  ],







  themeConfig: {
    logo: '/assets/img/logo.png',

nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebar: 'auto',

    sidebar: [
      '',
      'about',
      {
          title: '测边框分层',   // 必要的
          path: '/morethread/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
              '/morethread/bf',
              '/morethread/test1',
          ]
      }
  ],



  plugins: [
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp) => {
                moment.locale("zh-cn");
                return moment(timestamp).fromNow("LLLL")
            }
        }
    ]
],

  }
}
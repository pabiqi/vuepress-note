module.exports = {
theme: 'reco'
  title:"南山客java日记",
  description:"南山客的java日记,java笔记,java面试",
  base:'/vuepress-note/',
   


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

}
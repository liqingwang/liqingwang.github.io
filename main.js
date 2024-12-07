window.$docsify = {
    name: 'Qing', // 文档标题，会显示在侧边栏顶部
    repo: 'liqingwang/liqingwang.github.io',
    maxLevel: 3,
    // coverpage: 'docs/extra-page/cover.md',   // 封面
    loadNavbar: 'docs/extra-page/navbar.md',   // 顶部导航栏
    loadSidebar: 'summary.md',  // 侧边栏
    subMaxLevel: 3,
    alias: {
        '/.*/.*/summary': 'summary.md',
        '/.*/summary.md': 'summary.md',
    },
    auto2top: true,  //切换页面后是否自动跳转到页面顶部。

}
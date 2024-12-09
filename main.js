window.$docsify = {
    name: 'Qing', // 文档标题，会显示在侧边栏顶部
    repo: 'liqingwang/liqingwang.github.io',
    loadSidebar: 'SIDEBER.md',  // 侧边栏
    alias: {
        '/.*/.*/summary': 'SIDEBER.md',
        '/.*/summary.md': 'SIDEBER.md',
    },
    auto2top: true,  //切换页面后是否自动跳转到页面顶部。
    // 全文搜索
    search: {
        maxAge: 1800000, // 过期时间，单位毫秒
        depth: 4,
        placeholder: '搜索',
        noData: '没有结果！',
        namespace: "website-1",  // 避免搜索索引冲突,同一域下的多个网站之间
    },
    // 页面右侧toc(文档目录)
    toc: {
        tocMaxLevel: 2,
        target: "h2, h3, h4, h5, h6",
    }
}
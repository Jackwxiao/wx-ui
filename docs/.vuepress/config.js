module.exports = {
    base:'/wx-ui/',
    title: 'WX UI',
    description: '一个简结好用的 UI 的框架',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: 'https://cn.vuejs.org/',target:'_blank' },
            { text: '交流', link: 'https://google.com',target:'_blank'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: true,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    '/components/input',
                    '/components/grid',
                    '/components/button',
                    '/components/popover',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                ]
            }
        ],
        repo: 'https://github.com/WUXIAOd/wx-ui',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/WUXIAOd/wx-ui',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    },
}

module.exports = {
    title: 'Wheels UI',
    description: '一个简结好用的 UI 的框架',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/',target:'_blank' },
            { text: '交流', link: 'https://google.com',target:'_blank'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    '/components/button',
                    '/components/input',
                ]
            }
        ]
    },
}
module.exports = {
    base: '/Leeesin/V-UI/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            '/',
            '/install/',
            '/start/',
            {
                title: '组件',
                children: ['/components/button']
            },
        ]
    }
}
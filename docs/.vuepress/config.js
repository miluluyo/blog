module.exports = {
  title: '麋鹿鲁哟的技能树',
  description: '大道至简，知易行难。',
  serviceWorker: true,
  plugins: [
    [
      'register-components',
      {
        name: 'my-union',
        path: 'components/myUnion.vue'
      }
    ]
  ],
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/blog/', // 这是部署到github相关的配置 
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    //sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '首页', link: '/' },
      { text: '高级前端工程师养成攻略(✪ω✪)', link: '/home/' }, // 内部链接 以docs为根目录
      // { text: '测试', link: '/ceshi/' }, // 内部链接 以docs为根目录
      { text: '友链', link: '/union/' }, 
      { text: '维护', link: '/maintain/' }, 
      // 下拉列表
      {
        text: '关于我',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/miluluyo' },
          {
            text: '博客园',
            link: 'https://www.cnblogs.com/miluluyo/'
          },
          {
            text: '掘金',
            link: 'https://juejin.im/user/5d18adce5188256e98090e33'
          }
        ]
      }      
    ],
    //displayAllHeaders: false,  //显示所有页面的标题链接
    activeHeaderLinks: true, //禁用滚动查看页面的不同部分时，嵌套的标题链接和 URL 中的 Hash 值会实时更新
    sidebar: 'auto',  //自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏
    editLinks: true,
    sidebarDepth: 2,
    sidebar: {
      // 侧边栏在 /foo/ 上
      '/home/': ['',
        {
          title: 'JS基础',
          collapsable: true,
          children: [
            'basics/b/b_introduce',
            'basics/b/b_variate.md',
            'basics/b/b_datatype.md',
            'basics/b/b_operator.md',
            'basics/b/b_flow.md',
            'basics/b/b_array.md',
            'basics/b/b_func.md',
            'basics/b/b_string.md',
            'basics/b/b_regular.md',
            'basics/b/b_dom.md',
            'basics/b/b_window.md',
            'basics/b/b_object.md',
            'basics/b/b_json.md',
            'basics/b/b_cookie.md'
          ]
        },
        {
          title: 'JS深入系列',
          collapsable: true,
          children: [
            'basics/c/c_introduce.md',
            'basics/c/c_this.md',
            'basics/c/c_prototype.md'
          ]
        },
        {
          title: 'ECMAScript2015（ES6）',
          collapsable: true,
          children: [
            'basics/d/d_introduce.md',
            'basics/d/d_order.md'
          ]
        },
        {
          title: 'Vue',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: 'React',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: 'Angular',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: '数据交互',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: 'UI心得',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: '前端面试题',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: '前端算法',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: '数据库',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        },
        {
          title: 'java',
          collapsable: true,
          children: [
            'Nocontent/'
          ]
        }
      ],
      // 侧边栏在 /bar/ 上
      // '/ceshi/': [
      //   {
      //     title: '测试1',
      //     collapsable: true,
      //     children: [
      //       'Nocontent/'
      //     ]
      //   },
      //   {
      //     title: '测试2',
      //     collapsable: true,
      //     children: [
      //       'Nocontent/'
      //     ]
      //   }],
        "/maintain/":[]
    }
  }
};

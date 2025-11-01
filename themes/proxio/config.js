/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: false, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '欢迎来到此网站，点击任意位置进入', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: '我们专注于宠物与人的共生空间设计', // 英雄区文字
  PROXIO_HERO_TITLE_2: '让陪伴不再局限于角落，而真正融入家的每一处动线', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github-mark.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我的最新动态',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '我不追风格，也不卖噱头',
  PROXIO_FEATURE_TEXT_1: '只关心一件事——当你们在家，能不能真的在休憩',
  PROXIO_FEATURE_TEXT_2: '我相信设计有温度，我不贩卖风格 只分享生活，我的价值',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '我相信设计有温度',
  PROXIO_FEATURE_1_TEXT_1:
    '设计不是拍照片好看，是能陪你和宠物一起生活的日常。我习惯先听你讲故事，听你家猫喜欢晒太阳的角落、狗狗怕电吹风的声音、也听你工作回家时想要的那点安静。这些琐碎的小事，就是空间真正的样子。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '我不贩卖风格 只分享生活',
  PROXIO_FEATURE_2_TEXT_1: '我不靠装修套餐、也不做流水线项目。每一个案子，都是一次新的共居实验。有的偏现代、有的偏自然，但共同点只有一个：让人和宠物都能自在地生活下去。',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '我的价值',
  PROXIO_FEATURE_3_TEXT_1:
    '我不靠堆砌预算，也不靠套路报价。我只赚那些懂生活、爱宠物的人愿意为“更好的生活”付出的设计费。我希望客户不是甲方，而是同路人。',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://www.eqisheji.cn/about', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: false, // 区块开关
  PROXIO_CAREER_TITLE: '生涯',
  PROXIO_CAREER_TEXT: '以下是我的职业生涯',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: 'Freelance Architect',
      bio: '2016-2020',
      text: 'As a freelance architect, I worked on a range of residential and commercial projects, balancing form and function. I collaborated with clients and contractors to transform concepts into reality, ensuring each design was both aesthetically pleasing and structurally sound.'
    },
    {
      title: 'Product Designer at Spotify',
      bio: '2020-2022',
      text: 'At Spotify, I helped shape innovative features for millions of users globally. My focus was on creating seamless music discovery experiences, enhancing user interfaces, and optimizing cross-platform navigation, which led to an improved product flow and increased user satisfaction.'
    },
    {
      title: 'Freelance Product Designer',
      bio: '2022-Now',
      text: 'Now I design user-centric products that align with client visions. As a freelance product designer, I collaborate with startups and established companies, crafting solutions that elevate user experiences and increase engagement across both digital and physical interfaces.'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '用户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  PROXIO_TESTIMONIALS_TEXT_2:
    '越来越多的宠物家庭，选择与我们一起打造真正属于“你和它”的理想空间。从小型角落改造到全屋共生设计，我们用专业和共情陪伴每一次改变的开始。',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: 'https://noteforms.com/forms/qraeye',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '我也要评价',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: '设计服务包含哪些内容？',
      a: '包含前期沟通、空间测量、方案设计、材质建议、软装搭配与施工指导。我不只是画图，而是陪你把家一步步落地成型。'
    },
    {
      q: '设计费用怎么算？设计周期要多久？',
      a: '设计费会根据面积、需求复杂度与宠物数量综合评估，报价透明，无隐藏费用。我只收取设计费，不从施工方或材料方抽成。设计周期通常为2–4周，视项目规模和沟通效率而定。'
    },
    {
      q: '我不确定风格怎么办？',
      a: '没关系，我会从你的生活方式、宠物习惯入手，通过问答、样例图与模型演示，帮你一起找到最自然的方向。'
    },
    {
      q: '能远程设计吗？',
      a: '可以。我们可以线上沟通、视频会议与图纸交付，即使不在同一个城市，也能完整服务。'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: false, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于作者',
  PROXIO_ABOUT_TEXT_1: 'I am an Architect Turned Into a Product Designer',
  PROXIO_ABOUT_TEXT_2:
    'With a background in architecture, I now apply my expertise to product design, blending aesthetics, functionality, and innovation. My goal is to create modern, user-focused designs that bring your vision to life.',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '10年+',
  PROXIO_ABOUT_KEY_2: '客户',
  PROXIO_ABOUT_VAL_2: '1000+',
  PROXIO_ABOUT_KEY_3: '交付项目',
  PROXIO_ABOUT_VAL_3: '5000+',
  PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
  PROXIO_ABOUT_VAL_4: '10000+',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '宠物友好空间设计',
    '人宠共生的生活美学',
    '每一处角落都为生命留白',
    '完全定制 · 为你和TA而生'
  ],

  PROXIO_FOOTER_SLOGAN: '我们用设计，让每一个生命在家的每一寸都被温柔对待。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '关于我',
      menus: [
        {
          title: '品牌介绍',
          href: 'https://www.eqisheji.cn/about'
        },
        {
          title: '设计理念',
          href: 'https://www.eqisheji.cn/about'
        }
      ]
    },
    {
      name: '联系我',
      menus: [
        { title: '微信公众号', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '小红书',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: 'bilibili',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '抖音',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '邮箱',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '走丢辣！',
  PROXIO_404_TEXT: '怎么办怎么办！！联系我或回首页看看其他的吧',
  PROXIO_404_BACK: '回主页！立刻！马上！now！',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '和我一起',
  PROXIO_CTA_TITLE_2: '为你的宠物，打造一个真正自在的家',
  PROXIO_CTA_DESCRIPTION:
    '空间不止属于人，我们帮助你和宠物一起拥有更舒适、温暖、有爱的生活环境',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: 'https://noteforms.com/forms/stqeg2',
  PROXIO_CTA_BUTTON_TEXT: '立即预约设计',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

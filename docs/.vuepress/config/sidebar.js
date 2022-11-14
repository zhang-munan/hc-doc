// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  "/web前端/": [
    {
      title: "vue管理系统",
      collapsable: false,
      children: [
        ["Vue管理系统/01-介绍.md", "介绍", "/vue-admin/introduce/"],
        ["Vue管理系统/02-快速开始.md", "快速开始", "/vue-admin/start/"]
        // ["vue管理系统/03..md", "快速开始", ""],
      ]
    },
    {
      title: "vue网页制作",
      collapsable: false,
      children: [["Vue网页制作/01-介绍.md", "介绍", "/vue-admin/introduce/"]]
    }
  ],
  "/手机端/": [
    {
      title: "uni-app",
      collapsable: false,
    },
    {
      title: "微信小程序",
      collapsable: false,
      children: [
        ["微信小程序/01-介绍.md", "介绍", "/wx/introduce/"],
        ["微信小程序/02-快速开始.md", "快速开始", "/wx/start/"]
      ]
    }
  ],
  "/开发规范/": [
    {
      title: "代码规范",
      collapsable: false,
      children: [
        ["代码规范/代码规范.md", "代码书写规范", "/standard/code/"],
        ["代码规范/起名规范.md", "起名规范", "/standard/name/"]
      ]
    },
    {
      title: "页面开发注意事项",
      collapsable: false,
      children: [["页面开发注意事项/页面开发注意事项.md", "页面开发注意事项", "/standard/tip/"]]
    },
    {
      title: "提交规范",
      collapsable: false,
      children: [["提交规范/前端代码提交规范.md", "前端代码提交规范", "/standard/commit/"]]
    }
  ],
  "/guide/vue/": ["", "Technology"],
  "/guide/uniApp/": [
    {
      title: "基础",
      collapsable: false,
      children: ["", "Directory"]
    },
    {
      title: "使用",
      collapsable: false,
      children: [
        "Main",
        {
          title: "交互",
          collapsable: false,
          children: ["Route", "Request"]
        },
        {
          title: "工具类",
          collapsable: false,
          children: ["Test", "FormCheck", "Function"]
        },
        {
          title: "共通处理",
          collapsable: false,
          children: ["PageScroll"]
        }
      ]
    }
  ],
  "/guide/miniApp/": [
    {
      title: "使用",
      children: [
        "",
        {
          title: "交互",
          collapsable: false,
          children: [""]
        },
        {
          title: "工具类",
          collapsable: false,
          children: [""]
        },
        {
          title: "共通处理",
          collapsable: false,
          children: ["Pagination"]
        }
      ]
    }
  ]
};

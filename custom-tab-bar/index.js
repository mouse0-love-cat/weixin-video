Component({
  data: {
    selected: 0,
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/index.png",
      selectedIconPath: "/images/index_select.png",
      text: "推荐"
      // dot: true
    }, {
      pagePath: "/pages/type/type",
      iconPath: "/images/type.png",
      selectedIconPath: "/images/type_select.png",
      text: "分类"
      // badge: 'New'
    }, {
      pagePath: "/pages/user/user",
      iconPath: "/images/user.png",
      selectedIconPath: "/images/user_select.png",
      text: "个人"
      // badge: 'New'
    }]
  },
  methods: {
    switchTab(e) {
      const data = e.detail
      const url = data.item.pagePath
      wx.switchTab({url})
    }
  }
})
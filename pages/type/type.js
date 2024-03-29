// index.js
// 获取应用实例
const app = getApp()
Component({
  data: {
    vtabs: [],
    activeTab: 0,
  },
  ready(){
    const titles = ['热搜推荐', '手机数码', '家用电器',
    '生鲜果蔬', '酒水饮料', '生活美食', 
    '美妆护肤', '个护清洁', '女装内衣', 
    '男装内衣', '鞋靴箱包', '运动户外', 
    '生活充值', '母婴童装', '玩具乐器', 
    '家居建材', '计生情趣', '医药保健', 
    '时尚钟表', '珠宝饰品', '礼品鲜花', 
    '图书音像', '房产', '电脑办公']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },
  methods:{
    onTabCLick:function(e) {
      const index = e.detail.index
      console.log('tabClick', index)
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
})
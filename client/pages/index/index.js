Page({
  data:{
    'autoplay':true,
    'indicatorDots':true,
    'interval':3000,
    'duration':500,
    'bannerInfo':[],
    'floorsInfo':[],
    'bottomFlag':false
  },
  'onLoad': function (options) {
    let self = this;
    let indexData = wx.getStorageSync('indexData');
    if (indexData){
      console.log(typeof indexData.bannerInfo);
      self.setData({'bannerInfo':indexData.bannerInfo});
      self.setData({'floorsInfo':indexData.floorsInfo});
      self.setData({'bottomFlag':true});
      return;
    }
    wx.request({
      url: 'https://zxlulokk.qcloud.la/api/index', //仅为示例，并非真实的接口地址
      method: 'GET',  
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data.floorsInfo);
        // 展示本地存储能力
        wx.setStorage({
          key: "indexData",
          data: res.data.data
        });
        self.setData({'bannerInfo':res.data.data.bannerInfo});
        self.setData({ 'floorsInfo': res.data.data.floorsInfo });
        self.setData({ 'bottomFlag': true });
      }
    })
  },
})
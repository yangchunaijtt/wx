// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    isShow:true
  },
  hadleClick(){
    wx.switchTab({
      url: '/pages/list/list'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this);
    //判断用户是否授权,让button消失不消失。
     this.getUserInfo();
  },
  getUserInfo(){
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting["scope.userInfo"]) {
          //已经授权
          this.setData({
            isShow: false
          })
        } else {
          //没有授权
          this.setData({
            isShow: true
          })
        }
      }
    })
    //wx.getUserInfo:API中的开放接口部分
    wx.getUserInfo({

      //success：成功之后的回调
      success: (data) => {
        console.log(data);
        this.setData({
          userInfo: data.userInfo
        });
        fail: () => {
          console.log("获取用户权限失败")
        }
      }
    })
  },
  handleGetUserInfo(data){
    if(data.detail.rawData){
      //获取用户点击是允许
      this.getUserInfo();
    }else{
      //获取用户点击是拒绝
      this.getUserInfo();
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
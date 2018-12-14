let datas = require("../../datas/list-data.js");
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:{},
    index:null,
    isshow:false,
    //音乐是否播放 true:准备好还没有播放 false:在播放
    musicOK:true,
    //图片是否切换
    musicOn:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    //console.log(options.index);
    let sjindex = datas.list_data;
    this.setData({
      dataObj: sjindex[index],
    })
    //console.log(dataObj);
    let isshowa = this.data.isshow;
    let isshow = !this.data.isshow;
    // console.log(index);
    let obj = {};
    // console.log({index});
    // console.log(isshow);
    wx.getStorage({
      key: 'ishow_storage',
      success: function(res) {
        console.log("res",res)
        //取到数据后成功的回调
      },
      
    })
    //存储数据
    wx.setStorage({
      key: 'isshow_storage',
      data: obj,
    })
    //监听音乐的播放和暂停
    //监听音乐播放器的播放
   
    wx.onBackgroundAudioPlay(function(){
     
    })
    wx.onBackgroundAudioPause(function () {
      console.log("2");
    })
  },
  musicQh(){
    let dataObja = this.data.dataObj;
    let dataUrla = dataObja.music.dataUrl;
    let titlea = dataObja.music.title;
    let musicOKa = this.data.musicOK;
    if (musicOKa){
      wx.playBackgroundAudio({
        dataUrl: dataUrla,
        title: titlea,
      })
      this.setData({
        musicOK:false,
        //切换背景图
        musicOn:false,
      })
    }else{
      wx.pauseBackgroundAudio();
      this.setData({
        musicOK: true,
        musicOn:true,
      })
    }
   
  },
  kzshow() {
    //console.log(this.data.isshow)
    let isshow = !this.data.isshow;
    this.setData({
      isshow,
    })
    let zhi = isshow ? "收藏成功" : "取消收藏";
    let tbiao = isshow ?"success":"loading";
    wx.showToast({ 
      title: zhi,
      icon: tbiao,
      duration:1300
    })
  },
  //分享功能的实现 个人用户权限未开放  只有企业和公司和组织才开放
  fenxiang(){
    let aa = ["分享到朋友圈","分享到微信好友","分享到QQ空间","分享到QQ好友","分享到微博","........."];
    wx.showActionSheet({
      itemList: aa,
      itemColor:"#007aff",
    })
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
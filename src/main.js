import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false


const Base64 = require('js-base64').Base64
Vue.prototype.$getUserInfoByFXBD = function() {
  //得到上下文对象
  let that = this;
  //从富学宝典中获取用户信息
  new Promise((resolve, reject) => {
    if (window.AndroidJs) {
      //如果是在富学宝典安卓平台
      let userinfo = window.AndroidJs.shareUserInfo() || '{}';
      let info = JSON.parse(userinfo) || {};
      let data = {
        jobNo: info.jobNo,//工号
        name: info.name,  //名称
        device:'Android'
      }
      resolve(data);   //标记已完成，会放到then中
    } else if (window.WTK) {
      //如果是在富学宝典ios平台,有两种交互方式接口（方式1）
      let userinfo = window.WTK.shareUserInfo() || '{}';
      let info = JSON.parse(userinfo);
      let data = {
        jobNo: info.jobNo,
        name: info.name,
        device:'IOS'
      }
      alert( info.jobNo)
      resolve(data);
    } else if (window.webkit && window.webkit.messageHandlers) {
      //如果是在富学宝典ios平台,有两种交互方式接口(方式2)
      window.webkit.messageHandlers.userShare.postMessage(null);
      reject()
    }
  }).then((data) => { //拿到用户信息后的操作
    console.log('拿到信息:' + data)
    that.$setUserInfo(data)
  }).catch(err => {})
}
Vue.prototype.$setUserInfo = function(data) {
  //将用户信息放入到状态管理器的，方便使用时调用
  console.log(data.jobNo)
  console.log(this)
  console.log(this.$store)
  let store = this.$store
  store.dispatch('setName', data.jobNo)
  store.dispatch('setRealname', data.name)
  store.dispatch('setDevice', data.device)
  Vue.prototype.$data = data
  return data
}

const vm = new Vue({
  mounted() {
    this.$getUserInfoByFXBD()
  },
  store,
  render: h => h(App)
}).$mount('#app')

// 与ios Application交互接口方式2（配合 window.webkit.messageHandlers.userShare.postMessage(null)使用）
window.userInfo = function(info) {
  // 得到用户信息
  console.log(info)
  const toStr = Base64.decode(info) // ios 中返回的是base64字串，需要进行base64 decode
  const userinfo = JSON.parse(toStr)
  userinfo.device = 'IOS'
  // 拿到用户信息后的操作
  vm.$setUserInfo(userinfo)
}
// 与富学宝典pc端交互接口
window.addEventListener('message', function(e) {
  if (e.data && e.data.code === 200) {
    // 得到用户信息
    const userinfo = {
      jobNo: e.data.userinfo.jobNo,
      name: e.data.userinfo.name,
      device: e.data.userinfo.device
    }
    // 拿到用户信息后的操作
    vm.$setUserInfo(userinfo)
  }
}, false)
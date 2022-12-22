import request from '@/utils/ request'

// 这是推送和生成二维码 的连接，部署域名后应重新生成别名和获取code的链接 ,http记得换成https
var url = 'http://civetinterface.foxconn.com/Open/oauth/?to_code=[别名代码]'




// var getUserInfo = 'http://civetInterface.foxconn.com/open/get_user_info_bycode?code=[加密Code]&appid=[您的AppID]'


export default {
  view(view) {
    return request({
      url: '/year/viewRecords/view',
      method: 'post',
      data: view
    })
  },
  update(view) {
    return request({
      // 接口路径
      url: `/year/viewRecords/update`,
      method: 'post', // 提交方式
      data: view
    })
  },
  getUserInfoByBelieve(codeAndAppId) {
    return request({
      // 接口路径
      url: 'https://civetinterface.foxconn.com/open/get_user_info_bycode?' + codeAndAppId,
      method: 'get'
    })
  }
}
import request from '@/utils/ request'


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
  }
}
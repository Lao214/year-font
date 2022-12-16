import request from '@/utils/ request'


export default {
  view(view) {
    return request({
      url: '/year/viewRecords/view',
      method: 'post',
      data: view
    })
  }
}
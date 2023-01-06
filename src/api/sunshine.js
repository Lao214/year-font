import request from '@/utils/ request'

// 常量
const api_name = '/year/sunshine'

export default {
  // 列表
  getDataByJobNo(jobNo) {
    return request({
      // 接口路径
      url: `${api_name}/getOneByJobNo/${jobNo}`,
      method: 'get', // 提交方式
    })
  }
}
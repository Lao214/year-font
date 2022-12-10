import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://43.139.221.41:9214', 
  // baseURL: 'http:localhost:9214',
  // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

export default service
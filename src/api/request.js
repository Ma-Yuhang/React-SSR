import axios from 'axios'


let config = {}

if(typeof window === 'undefined') {
  // 服务器
  config.baseURL = 'http://yuanjin.tech:5005/'
}
const request = axios.create(config)

request.interceptors.response.use((response) => {
  return response.data
},(error) => {
  console.log(error);
})
export default request
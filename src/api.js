import axios from 'axios'

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.data.error) {
      case "40303":
        alert('本轮投票时间已过或暂未开启')
        break;
      default:
        alert('操作失败，请重试')
        break;
    }
    
    return Promise.reject(error.response.data)
  },
)

export default axios
import axios from 'axios'

// axios 全局配置
const axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api'
});

let axiosWrapper = {
  get: (url, config) => {
    axiosInstance.get(url)
  }
}

export default axiosWrapper

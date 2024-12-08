import axios from 'axios';

const AxiosConfig = axios.create({
  baseURL: 'http://musily.net/music/',
});

AxiosConfig.interceptors.request.use(
  async res => {
    return res;
  },

  error => Promise.reject(error),
);

export default AxiosConfig;

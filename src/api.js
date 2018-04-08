import axios from 'axios'
import qs from 'qs';

import { API_BASE } from "./util/config";

axios.default.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const instance = axios.create({
    baseURL: API_BASE
  });

instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    return Promise.reject(err)
});

export default {
  async signUp (data) {
    return await instance.post('/auth.signUp', qs.stringify(data));
  },
  async signIn (data) {
    return await instance.post('/auth.signIn', qs.stringify(data));
  },
  async logout (data) {
    return await instance.post('/auth.logout', qs.stringify(data));
  },
  async getBalance(data) {
    return await instance.post('/btc.balance', qs.stringify(data));
  }
}

import axios from "axios"
import { App } from "vue";

export default {
  install(app: App) {
    const appProps = app.config.globalProperties
    const instance = axios.create({
      timeout: 1000
    })
    instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
      // Do something with response data
      return response;
    }, function (error) {
      appProps.$message.error("网络请求错误，请检查网络");
      // Do something with response error
      return Promise.reject(error);
    });
    appProps.axios = instance;
  }
}
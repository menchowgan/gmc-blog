import axios from "axios"
import { App } from "vue";

const instance = axios.create({
  timeout: 1000
})

const Axios = {
  install(app: App) {
    const appProps = app.config.globalProperties
    instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      console.log("request", config);
      return config;
    }, function (error) {
      // Do something with request error
      appProps.$message.error("网络请求错误，请检查网络");
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

export {
  instance,
  Axios
};
import axios from "axios"
import { App } from "vue";

const instance = axios.create({
  timeout: 1500,
  headers: {
    "Content-type": "application/json;charset=utf-8"
  }
})

const Axios = {
  install(app: App) {
    const appProps = app.config.globalProperties
    instance.interceptors.request.use(
      config => {
        // Do something before request is sent
        console.log("request", config);
        return config;
      },
      error => {
        console.log("请求错误");
        // Do something with request error
        appProps.$message.error("请求错误");
        return Promise.reject(error);
      });

    instance.interceptors.response.use(
      response => {
        // Do something with response data
        if (response.status === 200 && response.statusText === "OK") {
          return response.data
        }
        return null;
      },
      error => {
        console.log("请求错误");
        console.log(error);
        appProps.$message.error(error.response.data.message || "请求错误");
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
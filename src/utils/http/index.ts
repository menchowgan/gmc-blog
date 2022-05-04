import { instance, Axios } from './utils/instance'
import CONFIG_METHODS from "./utils/Config"

const request = (requestName: string, params?: any, configOpts?: any) => {
  const config = CONFIG_METHODS[requestName]
  let request
  if (config) {
    switch (config.method) {
      case "get":
        request = instance.get(config.url, {params})
        break;
      case "post":
        request = instance.post(config.url, params)
        break;
    }
    return request
  }
}

export {
  request,
  Axios
}
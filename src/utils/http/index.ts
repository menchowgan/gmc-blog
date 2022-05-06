import { instance, Axios } from './utils/instance'
import CONFIG_METHODS from "./utils/Config"

interface ConfigOptsModel {
  url?: string
  method?: string
  baseURL?: string
  transformRequest?: Array<Function>
  transformResponse?: Array<Function>
  headers?: object
  params?: object
  paramsSerializer?: Function
  data?: object
  timeout?: number
  withCredentials?: boolean
  adapter?: Function
  auth?: object
  responseType?: string
  responseEncoding?: string
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onUploadProgress?: Function
  onDownloadProgress?: Function
  maxContentLength?: Function
  validateStatus?: Function
  maxRedirects?: number
  socketPath?: object
  httpAgent?: any
  httpsAgent?: any
  proxy?: object
  cancelToken?: object
}

const request = (requestName: string, params?: any, configOpts?: ConfigOptsModel) => {
  const config = CONFIG_METHODS[requestName]
  let request
  if (config) {
    switch (config.method) {
      case "get":
        if (configOpts) {

        }
        request = instance.get(config.url, { params })
        break;
      case "post":
        if (configOpts) {

        }
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
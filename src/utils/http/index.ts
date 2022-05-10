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

function request(requestName: string, params?: any, configOpts?: ConfigOptsModel) {
  const config = CONFIG_METHODS[requestName]
  let request
  if (config) {
    switch (config.method) {
      case "get":
        if (typeof params === 'string' || typeof params === 'number') {
          config.url += `/${params}`
          request = instance.get(config.url)
        } else {
          if (configOpts) {
  
          }
          request = instance.get(config.url, { params })
        }
        break;
      case "post":
        if (configOpts) {

        }
        request = instance.post(config.url, params)
        break;
      case "delete":
        let data = {}
        if (configOpts) {
          if (configOpts.data) {
            data = configOpts.data
          }
        }
        data = params
        request = instance.delete(config.url, {data})
        break;
    }
    return request
  }
}

export {
  request,
  Axios
}
interface ConfigModel {
  [key: string]: {
    url: string,
    method: string
  }
}

const CONFIG_METHODS: ConfigModel = {
  "GET_USER_SIMPLE_INFO": {
    url: "/get-user-info",
    method: "get"
  },
  "HELLO": {
    url: "/hello",
    method: "post"
  },
  "POST_USER_INFO": {
    url: "/user/person-info-post",
    method: "post"
  }
}

export default CONFIG_METHODS;
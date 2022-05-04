interface ConfigModel {
  [key: string]: {
    url: string,
    method: string
  }
}

const CONFIG_METHODS: ConfigModel = {
  "get-user-simple-info": {
    url: "/get-user-info",
    method: "get"
  }
}

export default CONFIG_METHODS;
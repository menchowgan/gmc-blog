import Mock from "mockjs"
import {user} from "./data"

Mock.setup({
  timeout: "50-1000"
})

Mock.mock(/\/get-user-info/, "get", (params: any) => {
  console.log("mock", params);
  
  return {
    code: 0,
    userInfo: user
  }
})

import { defineStore } from 'pinia';
import { UserModel } from "../utils/interfaces"
import { request } from "@/utils/http"

export const useUserInfoStore = defineStore("userinfo", {
  state: () => ({
    userInfo: {}
  }),
  actions: {
    async getUserInfo() {
      try {
        const res = await request("GET_USER_SIMPLE_INFO", 12)
        if (res && res.data) {
          this.userInfo = res?.data as UserModel;
          console.log("user store get user info: ", this.userInfo);
        }
      } catch (e) {
        
      }
    }
  }
})
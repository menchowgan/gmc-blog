import { defineStore } from 'pinia';
import { UserModel } from "../utils/interfaces"

export const useUserInfoStore = defineStore("userinfo", {
  state: () => ({
    userInfo: {}
  })
})
import { defineStore } from 'pinia'

export const useAudioStore = defineStore("audio", {
  state: () => {
    return {
      curidx: -1
    }
  }
})
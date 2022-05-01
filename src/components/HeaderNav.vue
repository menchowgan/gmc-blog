<template>
  <div class="header-nav">
    <p
      v-for="item in types"
      :key="item.value"
      @click="() => selectedType(item.value)"
    >
      <span>{{ item.label }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "@vue/runtime-core";
const emits = defineEmits(["type-selected"]);
const types = [
  {
    label: "技术博客",
    value: "TEC_BLOG",
  },
  {
    label: "日常生活",
    value: "DAILY_LIFE",
  },
  {
    label: "兴趣分享",
    value: "HOBBY_SHARE",
  },
  {
    label: "音乐相关",
    value: "MUSIC_ABOUT",
  },
];

const selectedType = (type: string) => {
  console.log("type header", type);
  emits("type-selected", type);
};
</script>

<style scoped lang="scss">
@import url("../style/animation.scss");

.header-nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  p {
    height: 100%;
    flex: 1;
    color: #3fc7f5;
    font-size: 24px;
    background-color: #6e6e6e;
    opacity: 1 !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &:hover {
      background-color: #3fc7f5;
      color: #6e6e6e;
      animation: bounce 0.5s;
      border: 5px solid #6e6e6e;
      border-radius: 32px;
      transform: rotateZ(-10deg) scale(1.2);
    }
    span {
      line-height: 90px;
    }
  }
}
</style>

<template>
  <div class="personnal-info-container flex row">
    <el-avatar shape="square" :size="250" :src="user.avatar" />
    <div class="content flex column">
      <div class="item flex row"><span>昵称：</span> {{ user.nickname }}</div>
      <div class="item flex row"><span>相别：</span> {{ gender }}</div>
      <div class="item flex row">
        <span>兴趣：</span>
        <el-tag
          v-for="(tag, index) in hobbies"
          :key="tag"
          size="large"
          class="mx-1"
          :type="(tagTypes[index % tagTypes.length] as any)"
        >
          {{ tag }}
        </el-tag>
      </div>
      <div class="brief flex row">
        <span>简介：</span>
        <p>{{ user.brief }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { UserModel } from "../utils/interfaces/index";

const tagTypes = ["success", "info", "warning", "danger"];

const props = defineProps({
  user: {
    type: Object,
    default: () => ({})
  }
})

const fans = computed(() => {
  return props.user.fans ? props.user.fans : 0;
});

const gender = computed(() => {
  return props.user.gender === "m" ? "男" : "女"
})

const hobbies = computed(() => {
  if ((props.user as UserModel).hobbies) {
    return ((props.user as UserModel).hobbies as string).split(",");
  }
});

</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";
.personnal-info-container {
  width: 99%;
  margin-top: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: $view-color;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .el-avatar {
    width: 20%;
    margin: 10px;
    margin-top: 20px;
    border-radius: 10px;
    border: 5px solid #ccc;
  }
  .content {
    width: 80%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    .item {
      flex: 1;
      font-size: 28px;
      color: $theme-color;
      margin-top: 10px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: center;
      span {
        font-size: 30px;
        color: #a5a3a3;
      }
      .el-tag {
        font-size: 20px;
        line-height: 50px;
        margin-left: 10px;
      }
    }
    .brief {
      flex: 5;
      width: 100%;
      font-size: 28px;
      margin-top: 10px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      span {
        color: $theme-color;
        font-size: 30px;
        color: #a5a3a3;
      }
      p {
        width: 70%;
        margin-right: 30px;
        word-break: break-all;
        text-overflow: clip;
        text-align: left;
      }
    }
  }
}
</style>

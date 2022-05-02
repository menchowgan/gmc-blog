<template>
  <div class="personnal-info-container flex row">
    <el-avatar shape="square" :size="250" :src="user.avatar" />
    <div class="content flex column">
      <div class="item flex row"><span>昵称：</span> {{ user.nickname }}</div>
      <div class="item flex row"><span>相别：</span> {{ user.gender }}</div>
      <div class="item flex row">
        <span>兴趣：</span>
        <el-tag
          v-for="(tag, index) in user.hobbies"
          :key="tag"
          size="large"
          class="mx-1"
          :type="tagTypes[index % tagTypes.length]"
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
import { reactive, readonly, ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { UserModel } from "../utils/interfaces/index";

const tagTypes = readonly(["success", "info", "warning", "danger"]);

const fans = computed(() => {
  return user.fans ? user.fans : 0;
});

const user = reactive<UserModel>({
  id: 0,
  nickname: "Menchow Gan",
  gender: "男",
  hobbies: ["音乐", "旅行", "侦探小说"],
  fans: 5,
  evaluate: 5,
  brief:
    "呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分身乏术的卡夫卡呃我分",
  avatar: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
});
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";
.personnal-info-container {
  width: 99%;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: $view-color;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .el-avatar {
    width: 20%;
    margin: 10px;
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
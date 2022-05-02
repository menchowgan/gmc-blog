<template>
  <div class="article-card">
    <el-card
      shadow="hover"
      class="card"
      :body-style="{ height: '96%', width: '100%' }"
      v-for="item in (articleSimpleInfos as ArticleSimpleInfoModel[])"
      :key="item.id"
    >
      <div class="content">
        <el-image fit="cover" :src="item.imgUrl" class="image" />
        <div class="section">
          <span class="title">{{ item.title }}</span>
          <p style="text-align: left">{{ item.content }}</p>
          <el-button type="text" class="button">MORE</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ArticleSimpleInfoModel } from "../utils/interfaces/index";

defineProps({
  articleSimpleInfos: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
@import "../style/theme.scss";
.article-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .card {
    width: 100%;
    height: 360px;
    margin-top: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
    .content {
      width: 100%;
      height: 96%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      p {
        height: 80%;
        font-size: 20px;
        color: #999;
        margin-top: 13px;
        margin-left: 13px;
      }
      .image {
        min-width: 24%;
        display: block;
        height: 86%;
        margin-top: 30px;
        border-radius: 16px;
      }
      .title {
        font-size: 30px;
        &:hover{
          @include hover-style;
        }
      }
      .button {
        padding: 0;
        min-height: auto;
      }
      .section {
        width: 74%;
        height: 100%;
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  }
}
</style>
<template>
  <div class="article-info-cmp flex column">
    <el-icon class="back-icon" @click="onBack"><arrow-left-bold /></el-icon>
    <div class="header flex column">
      <el-avatar :size="150" :src="circleUrl" />
      <ArtText :height="30" :font-size="32" :art-font-size="40" :text="nickname" />
    </div>
    <div class="body flex column">
      <p class="date-p">写于：{{ date }}</p>
      <Editor
        class="editor"
        style="overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
      />
      <p class="copyright">-- 版权所有，如需转载，联系作者 - Copyright &copy; - {{new Date().getFullYear()}} --</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { dateFormat } from "../../utils/dateFormat"
import ArtText from "@/components/ArtText.vue";
import { Editor } from "@wangeditor/editor-for-vue";
import { IEditorConfig } from "@wangeditor/core";
import { useUserInfoStore } from "@/store";
import { request } from "@/utils/http";
import { UserModel } from "@/utils/interfaces";
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const userStore = useUserInfoStore();
const valueHtml = ref("<p> 无内容 </p>");
const date = ref<string>("")

const nickname = ref<string>((userStore.userInfo as UserModel)?.nickname as string);
const circleUrl = ref<string>((userStore.userInfo as UserModel)?.avatar as string);

const editorConfig: Partial<IEditorConfig> = {
  readOnly: true
};

watchEffect(async () => {
  if (route.params.articleId) {
    console.log("article id: ", route.params.articleId);
    const res = await request("ARTICLE_QUERY", route.params.articleId);
    if (res.code === 200) {
      valueHtml.value = res?.data?.content;
      date.value = dateFormat("yyyy-MM-dd hh:mm:ss", new Date(res?.data?.date))
    }
  }
})

const onBack = () => {
  router.go(-1);
};
</script>

<style lang="scss" scoped>
@import "../../style/flex-style.scss";
@import "../../style/theme.scss";

.article-info-cmp {
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: var(--el-box-shadow);
  .back-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid $theme-color;
    color: $theme-color;
    position: absolute;
    top: 30px;
    left: 30px;
    box-shadow: var(--el-box-shadow);
    &:hover {
      border: 2px solid #ccc;
      color: #ccc;
      cursor: pointer;
    }
  }
  .header {
    width: 80%;
    height: 350px;
    justify-content: center;
    align-items: center;
    .el-avatar {
      border: 10px solid #ccc;
      box-shadow: var(--el-box-shadow);
    }
  }
  .body {
    width: 70%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 30px;
    overflow: auto;
    font-weight: bold;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
    .date-p {
      font-weight: bold;
      font-size: 2.0vh;
      margin-top: 10px; 
      margin-bottom: 2px;
      margin-left: 20px;
      color: #ccc;
    }
    .editor {
      border: 1px solid #eee;
    }
    .copyright {
      color: #ccc;
      &:hover {
        color: $theme-color
      }
    }
  }
}
</style>

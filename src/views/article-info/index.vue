<template>
  <div class="article-info-cmp flex column">
    <el-icon class="back-icon" @click="onBack"><arrow-left-bold /></el-icon>
    <div class="header flex column">
      <el-avatar :size="150" :src="circleUrl" />
      <ArtText
        :height="30"
        :font-size="32"
        :art-font-size="40"
        :text="nickname"
        fontFamily='"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif, STSong'
        :deputyFontStyle="{ color: 'white' }"
      />
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
      <p class="copyright">
        -- 版权所有，如需转载，联系作者 - Copyright &copy; -
        {{ new Date().getFullYear() }} --
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { dateFormat } from "../../utils/dateFormat";
import ArtText from "@/components/ArtText.vue";
import { Editor } from "@wangeditor/editor-for-vue";
import { IEditorConfig } from "@wangeditor/core";
import { useUserInfoStore } from "@/store";
import { UserModel } from "@/utils/interfaces";
import { reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GMessage, Loading } from "@/plugins";
import { ArticleManager } from "@/utils/managers";

const router = useRouter();
const route = useRoute();
const userStore = useUserInfoStore();
const valueHtml = ref("<p style='width: 100%'> 无内容 </p>");
const date = ref<string>("");

const nickname = ref<string>((userStore.userInfo as UserModel)?.nickname as string);
const circleUrl = ref<string>((userStore.userInfo as UserModel)?.avatar as string);
const curId = ref<string>(route.params.articleId as string)

const articleManager = new ArticleManager()

const editorConfig: Partial<IEditorConfig> = reactive({
  readOnly: true,
});

watch(
  () => route.params.articleId,
  async (newVal, oldVal, onCleanup) => {
    let expired = false;
    onCleanup(() => {
      expired = true;
    });

    if (!expired) {
      if (newVal) {
        Loading(true);
        const data = await articleManager.queryById(newVal as string)
        if (data) {
          valueHtml.value = data?.content as string;
          date.value = dateFormat("yyyy-MM-dd hh:mm:ss", new Date(data?.created_at as string));
        } else {
          GMessage("没有找到文章信息", {
            type: "warn"
          })
        }
        Loading(false);
      }
    }
  },
  {
    immediate: true,
  }
);

const onEdit = (articleId: string) => {
  if (!articleId || Number(articleId) === 0) {
    GMessage("文章id必须大于零", {
      type: "warn",
    });
    return;
  }
  console.log("article id: ", articleId);
  router.push({
    name: "Admin",
    params: {
      type: "ARTICLE_EDIT",
      articleId,
    },
  });
};

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
      border: 10px solid $theme-color;
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
      font-size: 2vh;
      margin-top: 10px;
      margin-bottom: 2px;
      margin-left: 20px;
      color: #ccc;
      &:hover {
        @include hover-style;
      }
    }
    .editor {
      border: 1px solid #eee;
    }
    .copyright {
      color: #ccc;
      &:hover {
        color: $theme-color;
      }
    }
    .edit-btn {
      width: 100%;
      margin-top: 1vh;
      margin-bottom: 1vh;
      justify-content: center;
      align-items: center;
      .btn {
        background-color: $theme-color;
        border-color: $theme-color;
      }
    }
  }
}
</style>

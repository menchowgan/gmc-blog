<template>
  <div class="article-card-in-creation flex column">
    <el-card
      shadow="hover"
      class="card flex row"
      :body-style="{ height: '96%', width: '100%' }"
      v-for="item in (articleSimpleInfos as ArticleSimpleInfoModel[])"
      :key="item.id"
      @click="() => toArticleInfo(item.id as number)"
    >
      <div class="content flex column">
        <span class="title">{{ item.title }}</span>
        <span class="date">{{ dateFormat("yyyy-MM-dd hh:mm:ss", new Date(item.date as string)) }}</span>
        <p style="text-align: left; flex: 5">{{ item.brief }}</p>
        <el-button type="text" class="button">Read More</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ArticleSimpleInfoModel } from "../utils/interfaces/index";
import { dateFormat } from "../utils/dateFormat"
import { useRouter } from "vue-router";

const router = useRouter()

defineProps({
  articleSimpleInfos: {
    type: Array,
    default: () => [],
  },
});

const toArticleInfo = (id: number) => {
  router.push({
    name: "ArticleInfo",
    params: {
      articleId: id
    }
  })
}
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.article-card-in-creation {
  width: 99%;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .card{
    width: 98%;
    height: 360px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    &:hover{
      cursor: pointer;
    }
    .content {
      height: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 10px;
      .title {
        width: 100%;
        font-size: 36px;
        flex: 1;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 5px;
        &:hover{
          @include hover-style
        }
      }
      .date{
        width: 100%;
        font-size: 24px;
        flex: 1;
        color: #999;
        text-align: left;
        margin-top: 5px;
      }
      p {
        height: 80%;
        font-size: 26px;
        color: #999;
        margin-top: 13px;
        margin-left: 13px;
      }
      .button {
        flex: 1;
      }
    }
  }
}
</style>
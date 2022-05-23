<template>
  <div class="article-edit-cmp flex column">
    <div class="header flex column">
      <el-avatar :size="150" :src="circleUrl" />
      <ArtText :height="30" :font-size="32" :art-font-size="40" :text="nickname" />
    </div>
    <div class="body flex column">
      <Creator />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArtText from "@/components/ArtText.vue";
import Creator from "@/components/Creator.vue";
import { ref, onMounted } from "vue";
import { useUserInfoStore } from "@/store";
import { UserModel } from "@/utils/interfaces";
import { useRoute } from "vue-router";
const userStore = useUserInfoStore();
const route = useRoute();

console.log("route info: ", route);

const circleUrl = ref<string>("");
const nickname = ref<string>("");

const html = ref<string>("");

onMounted(() => {
  nickname.value = (userStore.userInfo as UserModel).nickname as string;
  circleUrl.value = (userStore.userInfo as UserModel).avatar as string;
});

const onElementType = (ele: string) => {
  html.value = html.value + ele;
};
</script>

<style lang="scss" scoped>
@import "../../style/flex-style.scss";
@import "../../style/theme.scss";
.article-edit-cmp {
  width: 100%;
  justify-content: center;
  align-items: center;
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
    height: 1800px;
    overflow: auto;
    justify-content: flex-start;
    background-image: url("../../assets/images/creaton_background.webp");
    .container {
      width: 100%;
      min-height: 100px;
      flex: 3;
      overflow: auto;
      justify-content: flex-start;
      align-items: center;
      background-color: #ccc;
      border-radius: 10px;
      box-shadow: var(--el-box-shadow-dark);
    }
  }
}
</style>

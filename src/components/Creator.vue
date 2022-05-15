<template>
  <el-tabs v-model="activeName" type="card" class="tabs">
    <el-tab-pane label="用户注册" name="create user">
      <PersonnalInfoEdit :userid="userid" />
    </el-tab-pane>
    <el-tab-pane label="文章创作" name="create article">
      <ArticleEditor />
    </el-tab-pane>
    <el-tab-pane label="图片创作" name="create photo">
      <PhotoUpload :userid="userid" />
    </el-tab-pane>
    <el-tab-pane label="音乐收藏" name="music collection">
      <MusicUpload :userid="userid" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArticleEditor from "@/components/ArticleEditor.vue";
import PersonnalInfoEdit from "@/components/PersonnalInfoEdit.vue";
import PhotoUpload from "@/components/PhotoUpload.vue";
import MusicUpload from "@/components/MusicUpload.vue";
import { useUserInfoStore } from '@/store';
import { UserModel } from '@/utils/interfaces';

const userStore = useUserInfoStore()
const activeName = ref<string>("create article")
const userid = ref<number>((userStore.userInfo as UserModel).id as number)
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  background-color: white;
  padding: 10px;
}
</style>
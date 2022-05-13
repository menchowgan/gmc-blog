<template>
  <div class="music-info-edit">
    <el-form :model="musicForm" label-width="120px">
      <el-form-item label="歌名">
        <el-input v-model="musicForm.title" />
      </el-form-item>
      <el-form-item label="艺术家">
        <el-input v-model="musicForm.artist" />
      </el-form-item>
      <el-form-item label="音乐">
        <el-upload
          class="avatar-uploader"
          :action="`/music/cover/upload/${userid}`"
          :show-file-list="true"
          :on-success="handleCoverSuccess"
        >
          <p>picture</p>
          <img v-if="coverUrl" :src="coverUrl" class="avatar" />
          <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
        <el-upload
          class="avatar-uploader"
          :action="`/music/upload/${userid}`"
          :show-file-list="true"
          :on-success="handleMusicSuccess"
        >
          <p>audio</p>
          <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="评价">
        <el-input v-model="musicForm.evalution" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onMusicSubmit">创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { MusicModel } from "../utils/interfaces/index";
import type { UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import { request } from "../utils/http/index";

defineProps({
  userid: {
    type: Number,
  },
});

const coverUrl = ref<string>("");

const musicForm = reactive<MusicModel>({
  title: "",
  avatar: "",
  audioUrl: "",
  artist: "",
  evalution: "太好听了, 清新的风格，过了n多年还是好听😂😂😂",
});

const emits = defineEmits(["refresh"])

const handleCoverSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  coverUrl.value = URL.createObjectURL(uploadFile.raw!);
  console.log("music avatar", response);
  if (response.code === 200) {
    musicForm.avatar = response.data;
  } else if (response.code === 900) {
    ElMessage.error(response.message);
  }
};

const handleMusicSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  console.log("music url", response);
  if (response.code === 200) {
    musicForm.audioUrl = response.data;
  } else if (response.code === 900) {
    ElMessage.error(response.message);
  }
};

const onMusicSubmit = async () => {
  console.log("music form data", { ...musicForm });
  try {
    const res = await request("MUSIC_USER_UPLOAD", {
      userId: 12,
      ...musicForm,
    });
    console.log("user music info post", res);
    emits("refresh")
  } catch (e) {}
};
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";
.music-info-edit {
  width: 99%;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .el-form {
    font-size: 26px;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    & >>> .avatar-uploader {
      .el-upload {
        border: 1px dashed $theme-color;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
        &:hover {
          border-color: var(--el-color-primary);
        }
      }
    }
  }
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  margin-left: 10px;
  text-align: center;
  border: 1px solid #ccc;
}
</style>

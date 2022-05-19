<template>
  <div class="photo-upload flex column">
    <p>Pictures -- {{ title }}</p>
    <el-upload
      class="el-upload flex row"
      :action="`/photo/user/photos/upload/${userid}`"
      list-type="picture-card"
      :disabled="cannotUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <transition name="fade" mode="out-in">
      <div class="dialog flex row" @click="dialogVisible = false" v-if="dialogVisible">
        <img :src="dialogImageUrl" alt="Preview Image" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch, watchEffect } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, UploadProps, UploadUserFile } from "element-plus";
import { request } from "../utils/http";

const props = defineProps({
  userid: {
    type: Number,
  },
  photoList: {
    type: Array,
    default: () => [],
  },
  curImgUrl: {
    type: String,
    default: "",
  },
  cannotUpload: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "view",
  },
});

const fileList = ref<UploadUserFile[]>([]);

watchEffect(() => {
  fileList.value = props.photoList as UploadUserFile[];
});

const dialogImageUrl = ref<string>("");
const dialogVisible = ref<boolean>(false);

watch(() => props.curImgUrl, (curImgUrl) => {
  if (curImgUrl) {
    dialogImageUrl.value = curImgUrl;
    nextTick(() => {
      dialogVisible.value = true;
    })
  }
});

const handleRemove: UploadProps["onRemove"] = async (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
  let params = uploadFile.url?.split("/") as Array<string>;
  let url = `${params[params?.length - 2]}/${params[params?.length - 1]}`;
  const res = await request("DELETE_UPLOAD", {
    url,
  });
  if ((res as any).code === 200) {
    ElMessage.success((res as any).message);
  }
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
  console.log(uploadFile, fileList);
};
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.photo-upload {
  width: 99%;
  height: 900px;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  p {
    margin-left: 20px;
    font-size: 30px;
    color: $theme-color;
  }
  .el-upload {
    flex: 1;
    width: 96%;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .dialog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    img {
      border: 2px solid $theme-color;
      box-shadow: var(--el-box-shadow);
    }
  }
}

.fade-enter-active {
  &,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

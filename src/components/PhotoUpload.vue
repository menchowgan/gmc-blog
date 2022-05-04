<template>
  <div class="photo-upload flex column">
    <p> Photos -- {{ title }} </p>
    <el-upload
      class="el-upload flex row"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :disabled="cannotUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

defineProps({
  cannotUpload: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "view"
  }
})

const fileList = ref<UploadUserFile[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.photo-upload{
  width: 99%;
  height: 900px;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  p{
    margin-left: 20px;
    font-size: 30px;
    color: $theme-color;
  }
  .el-upload{
    flex: 1;
    width: 96%;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
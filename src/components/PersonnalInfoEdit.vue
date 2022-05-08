<template>
  <div class="personnal-info-edit">
    <el-form :model="form" label-width="120px">
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="">
          <el-option label="男" value="m" />
          <el-option label="女" value="f" />
        </el-select>
      </el-form-item>
      <el-form-item label="兴趣">
        <el-tag
          v-for="tag in hobbies"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button
          v-else
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >
          + New Tag
        </el-button>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="form.brief" type="textarea" />
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action="/photo/avatar/upload"
          :show-file-list="true"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { nextTick } from "@vue/runtime-core";
import { UserModel } from "../utils/interfaces/index";
import type { ElInput } from "element-plus";
import type { UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import { request } from "../utils/http/index"

const InputRef = ref<InstanceType<typeof ElInput>>();

const hobbies = ref<string[]>([])

const form = reactive<UserModel>({
  nickname: "",
  gender: "",
  hobbies: "",
  avatar: "",
  brief: "",
});

const inputValue = ref("");
const inputVisible = ref(false);
const imageUrl = ref<string>("");

const handleClose = (tag: string) => {
  hobbies.value.splice(hobbies.value.indexOf(tag), 1);
};
const handleInputConfirm = () => {
  if (inputValue.value) {
    hobbies.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const onSubmit = async () => {
  console.log("form data", { ...form });
  try{
    form.hobbies = hobbies.value.join(",")
    const res = await request("POST_USER_INFO", {
      ...form
    })
    console.log("user info post", res);
  }catch(e){}
};

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
  console.log("image url", response);
  if (response.code === 200){
    form.avatar = response.data
  } else if (response.code === 900) {
    ElMessage.error(response.message)
  }
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  console.log("rawFILE", rawFile);
  
  if (!(["image/jpeg", "images/jpg", "image/png"].includes(rawFile.type))) {
    ElMessage.error("Avatar picture must be JPG or JPEG OR PNG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    return false;
  }
  return true;
};
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.personnal-info-edit {
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
  text-align: center;
}
</style>
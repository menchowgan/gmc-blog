<template>
  <div class="creation-cmp flex column">
    <div class="header flex column">
      <el-avatar :size="150" :src="circleUrl" />
      <p class="art-title" style="height: 30px; font-size: 32px; color: #ccc">
        <span style="font-size: 40px; color: #3fc7f5">Menchow</span> GAN
      </p>
    </div>
    <div class="body flex row">
      <nav class="flex column">
        <CollapseSelector
          style="width: 100%"
          title="Creation"
          :options="options"
          @type-changed="onTypeChanged"
        />
      </nav>
      <div class="container flex column">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseSelector from "@/components/CollapseSelector.vue";

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  if (type) {
    // TODO
  }
};

const circleUrl =
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";

const options = [
  {
    title: "我的简介 About Me",
    opts: [
      { label: "编辑 Edit", value: "PERSONNAL_INFO_EDIT" },
      { label: "查看 View", value: "PERSONNAL_INFO_VIEW" },
    ],
  },
  {
    title: "趣文 Articles",
    opts: [
      { label: "编辑 Edit", value: "ARTICLE_EDIT" },
      { label: "查看 View", value: "ARTICLE_VIEW" },
    ],
  },
  {
    title: "照片 Photos",
    opts: [
      { label: "上传 Upload", value: "PHOTO_UPLOAD" },
      { label: "查看 View", value: "PHOTO_VIEW" },
    ],
  },
  {
    title: "音乐 Music",
    opts: [
      { label: "上传 Upload", value: "MUSIC_UPLOAD" },
      { label: "查看 View", value: "MUSIC_VIEW" },
    ],
  },
  {
    title: "主题设置 Theme",
    opts: [
      { label: "编辑 Upload", value: "THEME_EDIT" }
    ],
  },
];
</script>

<style scoped lang="scss">
@import url("../../style/flex-style.scss");
.creation-cmp {
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
    .art-title{
      &:hover {
        animation: text-scale 0.8s;
      }
    }
  }
  .body {
    width: 70%;
    justify-content: flex-start;
    nav {
      flex: 1;
      justify-content: flex-start;
    }
    .container {
      flex: 3;
      height: 1500px;
      overflow: auto;
      margin-bottom: 100px;
      justify-content: flex-start;
      align-items: center;
      background-color: #ccc;
      border-radius: 10px;
      box-shadow: var(--el-box-shadow-dark);
    }
  }
}

@keyframes text-scale{
  0% {
    transform: scale(1);
  }
  0% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>


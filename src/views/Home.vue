<template>
  <div class="header">
    <div class="nav">
      <p style="width: 60%; height: 100px; font-size: 70px; color: #ccc">
        <span style="font-size: 80px; color: #3fc7f5">Menchow</span> GAN
      </p>
      <div style="height: 150px"></div>
    </div>
    <div class="avator">
      <el-avatar :size="180" :src="circleUrl" />
    </div>
  </div>
  <div class="body" style="margin-bottom: 200px">
    <div class="articles" style="flex: 3; overflow: auto">
      <ArticleCard :articleSimpleInfos="articleSimpleInfos" />
    </div>
    <div
      style="
        min-width: 350px;
        flex: 2;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      "
    >
      <nav class="navigator" style="flex: 1">
        <el-card class="nav" shadow="hover">
          <Search
            style="width: 100%; opacity: 0.6"
            @type-inputed="onTypeChanged"
          />
          <CollapseSelector style="width: 100%" @type-changed="onTypeChanged" />
        </el-card>
      </nav>
      <nav class="personal-content" style="flex: 1">
        <p style="width: 40%; height: 100px; font-size: 50px; color: #ccc">
          <span style="font-size: 55px; color: #3fc7f5">MY</span>-Photos
        </p>
        <Carousel style="width: 100%; margin-top: 50px" />
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from "@/components/ArticleCard.vue";
import Search from "@/components/Search.vue";
import CollapseSelector from "@/components/CollapseSelector.vue";
import Carousel from "@/components/Carousel.vue";
import { ref } from "@vue/reactivity";
import { ArticleSimpleInfoModel } from "../utils/interfaces/index";

const currentDate = ref<Date>(new Date());

const circleUrl =
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";

const articleSimpleInfos: Array<ArticleSimpleInfoModel> = [
  {
    id: 1,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger1",
    content: currentDate.value,
  },
  {
    id: 2,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger2",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger3",
    content: currentDate.value,
  },
];

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  // if (type) {
  // }
};
</script>

<style scoped>
.body,
.header {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  opacity: 0.8;
}
@media (max-width: 1500px) {
  .body {
    width: 80%;
    display: flex;
    flex-direction: columns;
    align-items: flex-start;
    opacity: 0.8;
  }
}
.header .nav {
  width: 60%;
  height: 360px;
  display: flex;
  flex-direction: column;
}
.header .avator {
  float: right;
  width: 40%;
  height: 360px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.header .avator .el-avatar {
  margin-right: 128px;
  border: 10px solid #ccc;
  box-shadow: var(--el-box-shadow);
}

.header .nav p section {
  font-size: 68px;
  color: #3fc7f5;
}
.header .my-photo {
  width: 40%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.navigator {
  width: 300px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.96;
}
.personal-content {
  width: 380px;
  height: 500px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.94;
}

.personal-content .content {
  width: 96%;
  height: 96%;
  margin-top: 16px;
}
.navigator .nav {
  width: 96%;
  height: 96%;
  margin-top: 16px;
  background: none;
  border: 0;
}
.articles {
  height: 1800px;
  opacity: 0.9;
  min-width: fit-content;
}
</style>
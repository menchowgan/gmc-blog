<template>
  <div class="header">
    <div class="nav">
      <p style="width:60%;height:100px;font-size:60px;color: #ccc"><span style="font-size:65px;color:#3fc7f5">Menchow</span> GAN</p>
      <div style="height: 150px;"></div>
    </div>
  </div>
  <div class="body">
    <div class="articles" style="width: 60%">
      <ArticleCard :articleSimpleInfos="articleSimpleInfos" />
    </div>
    <nav class="navigator" style="width: 18%">
      <el-card class="nav" shadow="hover">
        <Search style="width: 100%;opacity: 0.6" @type-inputed="onTypeChanged" />
        <el-divider />
        <CollapseSelector style="width: 100%" @type-changed="onTypeChanged" />
      </el-card>
    </nav>
    <nav class="personal-content" style="width: 22%">
      <p style="width:40%;height:100px;font-size:50px;color: #ccc"><span style="font-size:55px;color:#3fc7f5">MY</span>-Photos</p>
      <Carousel style="width: 100%;margin-top: 50px" />
    </nav>
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
];

const typeSelected = ref<string>("");

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  typeSelected.value = type;
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
.header .nav{
  width: 60%;
  height: 360px;
  display: flex;
  flex-direction: column;
}
.header .nav p section{
  font-size: 68px;
  color: #3fc7f5;
}
.header .my-photo{
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
  border: 0
}
.articles {
  height: 1000px;
  opacity: 0.93;
}
</style>
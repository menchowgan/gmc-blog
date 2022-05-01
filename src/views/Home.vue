<template>
  <div class="header">
    <div class="nav">
      <p style="width: 60%; height: 100px; font-size: 70px; color: #ccc">
        <span style="font-size: 80px; color: #3fc7f5">Menchow</span> GAN
      </p>
      <div style="width: 100%; height: 100px">
        <HeaderNav @type-selected="onNavTypeSelected" />
      </div>
    </div>
    <div class="avator">
      <el-avatar :size="180" :src="circleUrl" />
    </div>
  </div>
  <div class="body" style="margin-bottom: 200px">
    <div class="articles" style="flex: 3; overflow: auto">
      <ArticleCard :articleSimpleInfos="articleSimpleInfos" />
    </div>
    <div class="sider">
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
import HeaderNav from "@/components/HeaderNav.vue";
import { ref } from "@vue/reactivity";
import { ArticleSimpleInfoModel } from "../utils/interfaces/index";
import { useRouter } from "vue-router";

const router = useRouter();

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
      "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
    content:
      "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
  },
  {
    id: 3,
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
    title: "人生如蝶。花盛开，便认真去爱惜",
    content:
      "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
  },
];

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  // if (type) {
  // }
};

const onNavTypeSelected = (type: string) => {
  console.log("new type selected", type);
  router.push({
    name: "Creation",
    query: {
      type,
      userId: "menchowgan",
    },
  });
};
</script>

<style scoped lang="scss">
.body {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  opacity: 0.8;
  .sider {
    min-width: 350px;
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media screen and (max-width: 1500px) {
      min-width: 350px;
      width: 80%;
      display: flex;
      flex-direction: columns;
      align-items: flex-start;
      opacity: 0.8;
    }
  }
}
.header {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  opacity: 0.8;
  .nav {
    width: 60%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      section {
        font-size: 68px;
        color: #3fc7f5;
      }
    }
  }
  .avator {
    float: right;
    width: 40%;
    height: 360px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .el-avatar {
      margin-right: 128px;
      border: 10px solid #ccc;
      box-shadow: var(--el-box-shadow);
    }
  }
  .my-photo {
    width: 40%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.navigator {
  width: 300px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.96;
  .nav {
    width: 96%;
    height: 96%;
    margin-top: 16px;
    background: none;
    border: 0;
  }
}
.personal-content {
  width: 380px;
  height: 500px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.94;
  .content {
    width: 96%;
    height: 96%;
    margin-top: 16px;
  }
}

.articles {
  height: 1800px;
  opacity: 0.9;
  min-width: 500px;
}
</style>
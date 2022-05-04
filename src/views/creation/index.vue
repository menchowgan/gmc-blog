<template>
  <div class="creation-cmp flex column">
    <el-icon class="back-icon" @click="onBack"><arrow-left-bold /></el-icon>
    <div class="header flex column">
      <el-avatar :size="150" :src="circleUrl" />
      <ArtText :height="30" :font-size="32" :art-font-size="40" :text="nickname" />
    </div>
    <div class="body flex row">
      <nav class="flex column">
        <CollapseSelector
          style="width: 100%"
          title="Creation"
          :defaultCur="cur"
          :options="options"
          @type-changed="onTypeChanged"
        />
      </nav>
      <div class="container flex column">
        <PersonnalInfo
          v-show="typeSelected === 'PERSONNAL_INFO_VIEW'"
          style="opacity: 0.8"
        />
        <PersonnalInfoEdit
          v-show="typeSelected === 'PERSONNAL_INFO_EDIT'"
          style="opacity: 0.8"
        />
        <PhotoUpload
          v-show="['PHOTO_UPLOAD', 'PHOTO_VIEW'].includes(typeSelected)"
          :cannot-upload="typeSelected === 'PHOTO_VIEW'"
          :title="typeSelected === 'PHOTO_VIEW' ? '查看' : '上传'"
          style="opacity: 0.8"
        />
        <ArticleCardInCreation
          v-show="typeSelected === 'ARTICLE_VIEW'"
          :articleSimpleInfos="articleSimpleInfos"
          style="opacity: 0.8"
        />
        <MusicView v-show="typeSelected === 'MUSIC_VIEW'" style="opacity: 0.8" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseSelector from "@/components/CollapseSelector.vue";
import PersonnalInfo from "@/components/PersonnalInfo.vue";
import ArtText from "@/components/ArtText.vue";
import PersonnalInfoEdit from "@/components/PersonnalInfoEdit.vue";
import PhotoUpload from "@/components/PhotoUpload.vue";
import ArticleCardInCreation from "@/components/ArticleCardInCreation.vue";
import MusicView from "@/components/MusicView.vue";
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { ArticleSimpleInfoModel } from "../../utils/interfaces/index";
import { onActivated } from "vue";

const nickname = ref<string>("Menchow GAN");
const router = useRouter();
const route = useRoute();

const typeSelected = ref<string>("");

const cur = ref<number>(-1);

if (route.query && route.query.type) {
  console.log("------", route.query.type);
  typeSelected.value = route.query.type as string;
  switch (typeSelected.value) {
    case "PERSONNAL_INFO_VIEW":
      cur.value = 0;
      break;
    case "TEC_BLOG":
    case "DAILY_LIFE":
    case "HOBBY_SHARE":
      typeSelected.value = "ARTICLE_VIEW";
      cur.value = 1;
      break;
    case "PHOTOS_VIEW":
      typeSelected.value = "PHOTO_VIEW";
      cur.value = 2;
      break;
    case "MUSIC_ABOUT":
      typeSelected.value = "MUSIC_VIEW";
      cur.value = 3;
      break;
  }
}

onActivated(() => {
  console.log("actived")
  if (route.query && route.query.type) {
    console.log("------", route.query.type);
    typeSelected.value = route.query.type as string;
    switch (typeSelected.value) {
      case "PERSONNAL_INFO_VIEW":
        cur.value = 0;
        break;
      case "TEC_BLOG":
      case "DAILY_LIFE":
      case "HOBBY_SHARE":
        typeSelected.value = "ARTICLE_VIEW";
        cur.value = 1;
        break;
      case "PHOTOS_VIEW":
        typeSelected.value = "PHOTO_VIEW";
        cur.value = 2;
        break;
      case "MUSIC_ABOUT":
        typeSelected.value = "MUSIC_VIEW";
        cur.value = 3;
        break;
    }
  }
});

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  if (type) {
    typeSelected.value = type;
  }
};

const onBack = () => {
  router.go(-1);
};

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
    date: currentDate.value,
  },
  {
    id: 2,
    imgUrl:
      "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
    content:
      "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    date: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
    title: "人生如蝶。花盛开，便认真去爱惜",
    content:
      "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    date: currentDate.value,
  },
  {
    id: 1,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger1",
    content: currentDate.value,
    date: currentDate.value,
  },
  {
    id: 2,
    imgUrl:
      "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
    content:
      "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    date: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
    title: "人生如蝶。花盛开，便认真去爱惜",
    content:
      "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    date: currentDate.value,
  },
  {
    id: 1,
    imgUrl:
      "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    title: "Yummy hamburger1",
    content: currentDate.value,
    date: currentDate.value,
  },
  {
    id: 2,
    imgUrl:
      "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
    content:
      "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    date: currentDate.value,
  },
  {
    id: 3,
    imgUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp55297062.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653965733&t=1292d860c795eaa03b05c8ceafbd1c36",
    title: "人生如蝶。花盛开，便认真去爱惜",
    content:
      "千万不要否认大家曾经拥有的情感，只需记牢难忘的回忆就行，那样才不容易感觉自身以前投入的情感不值。浮沉流年，空落了是多少幽怨爱恨。循环变化，寻看不到曾有的沧海桑田，沐人间烟火，又怎么会不染岁月风尘，虽然踏过的仅仅半生烟火。",
    date: currentDate.value,
  },
  {
    id: 2,
    imgUrl:
      "https://img0.baidu.com/it/u=403007778,499203326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    title: "最唯美的散文精选篇一：人生路上，蝶梦飞飞",
    content:
      "人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。当我们在感叹时，抱怨、抱怨。抱怨，机遇全是别人的缘;人生如一路风景线，风景有你的看，也有风景在对你看。一晃几十年，常常叹!岁月的车厢，装的全是别人的颜。烟雨云散，只有自己的遗憾在叹。",
    date: currentDate.value,
  },
];

const options = [
  {
    title: "我的简介 About Me",
    opts: [
      // { label: "编辑 Edit", value: "PERSONNAL_INFO_EDIT" },
      { label: "查看 View", value: "PERSONNAL_INFO_VIEW" },
    ],
  },
  {
    title: "趣文 Articles",
    opts: [
      // { label: "编辑 Edit", value: "ARTICLE_EDIT" },
      { label: "查看 View", value: "ARTICLE_VIEW" },
    ],
  },
  {
    title: "照片 Photos",
    opts: [
      // { label: "上传 Upload", value: "PHOTO_UPLOAD" },
      { label: "查看 View", value: "PHOTO_VIEW" },
    ],
  },
  {
    title: "音乐 Music",
    opts: [
      // { label: "上传 Upload", value: "MUSIC_UPLOAD" },
      { label: "查看 View", value: "MUSIC_VIEW" },
    ],
  },
  {
    title: "主题设置 Theme",
    opts: [{ label: "编辑 Upload", value: "THEME_EDIT" }],
  },
];
</script>

<style scoped lang="scss">
@import "../../style/flex-style.scss";
@import "../../style/theme.scss";
.creation-cmp {
  width: 100%;
  justify-content: center;
  align-items: center;
  .back-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid $theme-color;
    color: $theme-color;
    position: absolute;
    top: 30px;
    left: 30px;
    box-shadow: var(--el-box-shadow);
    &:hover {
      border: 2px solid #ccc;
      color: #ccc;
      cursor: pointer;
    }
  }
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
      // background-color: #ccc;
      border-radius: 10px;
      box-shadow: var(--el-box-shadow-dark);
      background-image: url("../../assets/images/creaton_background.webp");
    }
  }
}

@keyframes text-scale {
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

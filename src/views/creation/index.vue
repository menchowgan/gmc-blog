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
          :user="user"
          v-show="typeSelected === 'PERSONNAL_INFO_VIEW'"
          style="opacity: 0.8"
        />
        <PersonnalInfoEdit
          :userid="user.id"
          v-show="typeSelected === 'PERSONNAL_INFO_EDIT'"
          style="opacity: 0.8"
        />
        <PhotoUpload
          :userid="user.id"
          :photoList="photoList"
          :curImgUrl="curImgUrl"
          v-show="['PHOTO_EDIT', 'PHOTO_VIEW'].includes(typeSelected)"
          :cannot-upload="typeSelected === 'PHOTO_VIEW'"
          :title="typeSelected === 'PHOTO_VIEW' ? '查看' : '编辑'"
          style="opacity: 0.8"
        />
        <ArticleCardInCreation
          v-show="typeSelected === 'ARTICLE_VIEW'"
          :articleSimpleInfos="articleSimpleInfos"
          style="opacity: 0.8"
        />
        <MusicView
          :audios="user.audios"
          v-show="typeSelected === 'MUSIC_VIEW'"
          style="opacity: 0.8"
        />
        <MusicUpload
          :userid="user.id"
          v-show="typeSelected === 'MUSIC_UPLOAD'"
          @refresh="onRefresh"
          style="opacity: 0.8"
        />
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
import MusicUpload from "@/components/MusicUpload.vue";
import ArticleCardInCreation from "@/components/ArticleCardInCreation.vue";
import MusicView from "@/components/MusicView.vue";
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  ArticleSimpleInfoModel,
  PhotoModel,
  UserModel,
} from "../../utils/interfaces/index";
import { onActivated, onMounted } from "vue";
import { request } from "../../utils/http/index";
import { useUserInfoStore } from "@/store";

const nickname = ref<string>("Menchow GAN");
const router = useRouter();
const route = useRoute();
const userStore = useUserInfoStore();

const typeSelected = ref<string>("");

const cur = ref<number>(-1);
const curImgUrl = ref<string>("");

const user = ref<UserModel>({});

user.value.id = (userStore.userInfo as UserModel)?.id

const photoList = ref<PhotoModel[]>([]);

const articleSimpleInfos = ref<Array<ArticleSimpleInfoModel>>([]);

watchEffect(async () => {
  if (route.params.type) {
    const res = await request("ARTICLE_QUERY_BY_TYPE", `${user.value.id}/${route.params.type}`);
    if (res.code === 200) {
      articleSimpleInfos.value = res.data;
    }
  }
});

const getData = async () => {
  if ((userStore.userInfo as UserModel).id) {
    photoList.value = (userStore.userInfo as UserModel).photos || [];
    try {
      let id = (userStore.userInfo as UserModel).id;
      const res = await request("SEARCH_USER_BRIEF", id);
      if (res && res.data) {
        console.log("res", res);
        user.value = res.data;
        user.value.audios?.forEach((audio) => (audio.paused = true));
      }
    } catch (e) {}
  }
};

const onRefresh = () => {
  getData();
};

onMounted(() => {
  init();
  getData();
});

onActivated(() => {
  console.log("actived", user.value.id);
  init();
});

const init = () => {
  nickname.value = (userStore.userInfo as UserModel).nickname as string;
  circleUrl.value = (userStore.userInfo as UserModel).avatar as string;
  if (route.params && route.params.type) {
    console.log("------", route.params.type);
    typeSelected.value = route.params.type as string;
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
        if (route.params.curImgUrl) {
          curImgUrl.value = route.params.curImgUrl as string;
        }
        break;
      case "MUSIC_ABOUT":
        typeSelected.value = "MUSIC_VIEW";
        cur.value = 3;
        break;
    }
  }
};

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  if (type === "ARTICLE_EDIT") {
    router.push({
      name: "ArticleEdit",
    });
    return;
  }
  if (type) {
    typeSelected.value = type;
  }
};

const onBack = () => {
  router.go(-1);
};

const currentDate = ref<Date>(new Date());

const circleUrl = ref<string>("");

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
      // { label: "编辑 Edit", value: "PHOTO_EDIT" },
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

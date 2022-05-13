<template>
  <div class="Home flex column">
    <div class="header">
      <div class="nav">
        <ArtText :text="user.nickname" />
        <div style="width: 100%; height: 100px">
          <HeaderNav @type-selected="onNavTypeSelected" />
        </div>
      </div>
      <div class="avator">
        <el-avatar @click="toCreate" :size="180" :src="user.avatar" />
      </div>
    </div>
    <div class="body">
      <div class="articles flex column">
        <ArticleCard :articleSimpleInfos="user.articleSimplaeInfos" />
      </div>
      <div class="sider">
        <nav class="navigator">
          <el-card class="nav" shadow="hover">
            <Search style="width: 100%; opacity: 0.6" @type-inputed="onTypeChanged" />
            <CollapseSelector
              style="width: 100%"
              :options="options"
              @type-changed="onTypeChanged"
            />
          </el-card>
        </nav>
        <nav class="personal-content" style="flex: 1">
          <ArtText
            :width="40"
            :height="100"
            :fontSize="50"
            :artFontSize="55"
            artColor="#3fc7f5"
            color="#ccc"
            text="MY -Photo"
          />
          <Carousel
            :photos="photos"
            @toPhotos="toPhotos"
            style="width: 100%; margin-top: 50px"
          />
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArticleCard from "@/components/ArticleCard.vue";
import Search from "@/components/Search.vue";
import CollapseSelector from "@/components/CollapseSelector.vue";
import Carousel from "@/components/Carousel.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import ArtText from "@/components/ArtText.vue";
import { ref, computed } from "vue";
import { PhotoModel, UserModel } from "../utils/interfaces/index";
import { useRouter } from "vue-router";
import { request } from "../utils/http/index";
import { useUserInfoStore } from "../store";

const user = ref<UserModel>({});

const photos = computed(() => {
  let ps: PhotoModel[] = [];
  if (user.value.photos && user.value.photos.length) {
    user.value.photos.forEach((item, index) => {
      if (index < 6) {
        ps.push(item);
      }
    });
  }
  return ps;
});

const init = async () => {
  try {
    const userStore = useUserInfoStore();
    const usertemp: UserModel = userStore.userInfo;
    if (usertemp && (usertemp.id as number) > 0) {
      user.value = usertemp;
      return;
    }
    const res = await request("GET_USER_SIMPLE_INFO", 12);
    console.log("res", res);
    if (res && res.data) {
      user.value = res?.data;
      userStore.userInfo = user.value;
    }
    console.log("user store", userStore.userInfo);
  } catch (e) {}
};

init();

const router = useRouter();

const currentDate = ref<Date>(new Date());

const options = [
  {
    title: "生活 Life",
    opts: [
      { label: "旅游 Travel", value: "REAVEL" },
      { label: "日常 Daily", value: "DAILY_LIFE" },
    ],
  },
  {
    title: "工作 Work",
    opts: [
      { label: "技术博客 Tec", value: "TEC_BLOG" },
      { label: "工作计划 Plan", value: "JOB_PLAN" },
    ],
  },
  {
    title: "娱乐 Recreation",
    opts: [
      { label: "音乐分享 Music Sharing", value: "MUSIC_SHARE" },
      { label: "游戏趣谈 Game Gossip", value: "GAME_GOSSIP" },
    ],
  },
];

const onTypeChanged = (type: string) => {
  console.log("new type selected", type);
  if (type) {
    // TODO
  }
};

const onNavTypeSelected = (type: string) => {
  console.log("new type selected", type);
  router.push({
    name: "Creation",
    query: {
      type,
      userId: "menchowgan",
    },
    params: {
      nickname: user.value.nickname,
      id: user.value.id,
      avatar: user.value.avatar,
    },
  });
};

const toCreate = () => {
  router.push({
    name: "Creation",
    query: {
      type: "PERSONNAL_INFO_VIEW",
      userId: "menchowgan",
    },
    params: {
      nickname: user.value.nickname,
      id: user.value.id,
      avatar: user.value.avatar,
    },
  });
};

const toPhotos = (photo: PhotoModel) => {
  router.push({
    name: "Creation",
    query: {
      type: "PHOTOS_VIEW"
    },
    params: {
      curImgUrl: photo.url
    },
  });
};
</script>

<style scoped lang="scss">
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.Home {
  width: 100%;
  align-items: center;
  .body {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0.8;
    margin-bottom: 200px;
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
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
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
      .art-title {
        section {
          font-size: 68px;
          color: $theme-color;
        }
        &:hover {
          animation: text-scale 0.8s;
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
        cursor: pointer;
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
    flex: 1;
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
    .art-title {
      &:hover {
        animation: text-scale 0.8s;
      }
    }
  }

  .articles {
    height: 2000px;
    opacity: 0.9;
    min-width: 500px;
    flex: 3;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
  }
}

@keyframes text-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

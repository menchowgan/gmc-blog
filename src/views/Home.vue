<template>
  <div class="Home flex column">
    <div class="header">
      <div class="nav">
        <ArtText
          :text="user.nickname"
          fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
          :deputyFontStyle="{ color: 'white' }"
        />
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
        <ArticleCard :articleSimpleInfos="user.articleSimpleInfos" />
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
            fontFamily="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
            :artFontSize="55"
            :deputyFontStyle="{ color: 'white' }"
            artColor="#3fc7f5"
            color="#ccc"
            text="MY -Photos"
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
import { ref, computed, onActivated, h } from "vue";
import { PhotoModel, UserModel } from "../utils/interfaces/index";
import { useRouter } from "vue-router";
import { useUserInfoStore } from "../store";
import { GMessage, Loading } from "@/plugins";
import { ArticleManager } from "@/utils/managers";

const user = ref<UserModel>({});
const userStore = useUserInfoStore();
const articleManager = new ArticleManager();

const photos = computed(() => {
  let photos: PhotoModel[] = userStore.photos;
  return photos;
});

const getUserTitle = (nickname: string) => {
  const ns = nickname?.split(/\s+/);
  return h(
    "span",
    {
      style: {
        fontSize: "3.6vh",
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      },
    },
    [
      h("span", "欢迎进入 "),
      h(
        "span",
        ns.map((n, index) => {
          if (ns.length === 1 || index < ns.length - 1) {
            return h("span", n);
          }
          return h(
            "span",
            {
              style: {
                color: "#eee",
              },
            },
            ` ${n}`
          );
        })
      ),
      h("span", " 的主页"),
    ]
  );
};

const init = async () => {
  await userStore.getUserInfo();
  user.value = userStore.userInfo;
  console.log("user store", user.value);
  if (user.value.id) {
    GMessage(getUserTitle(user.value.nickname as string), {
      type: "success",
      timeout: 4000,
    });
  }
};

init();

onActivated(() => {
  user.value = userStore.userInfo;
  console.log("user store", user.value);
});

const router = useRouter();

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
      { label: "视频记录 Video Record", value: "VIDEOS" },
    ],
  },
];

const onTypeChanged = async (type: string) => {
  console.log("new type selected", type);
  if (type) {
    if (type === "VIDEOS") {
      router.push({
        name: "Creation",
        params: {
          type,
        },
      });
      return;
    } else {
      Loading(true)
      const data = await articleManager.queryByType(user.value.id as number, type);
      user.value.articleSimpleInfos = data;
      Loading(false)
    }
  }
};

const onNavTypeSelected = (type: string) => {
  console.log("new type selected", type);
  router.push({
    name: "Creation",
    params: {
      type,
    },
  });
};

const toCreate = () => {
  router.push({
    name: "Creation",
    params: {
      type: "PERSONNAL_INFO_VIEW",
      userId: "menchowgan",
    },
  });
};

const toPhotos = (photo: PhotoModel) => {
  router.push({
    name: "Creation",
    params: {
      type: "PHOTOS_VIEW",
      curImgUrl: photo.url,
    },
  });
};

// const connectWebsocket = () => {
//       if (typeof WebSocket === "undefined") {
//         console.log("您的浏览器不支持WebSocket");
//         return;
//       } else {
//         let protocol = "ws";
//         let url = "";
//         if (window.location.protocol == "https:") {
//           protocol = "wss";
//         }
//         // `${protocol}://window.location.host/echo`;
//         url = `${protocol}://localhost:8888/ws-test`;

//         // 打开一个websocket
//         const websocket = new WebSocket(url);
//         // 建立连接
//         websocket.onopen = () => {
//           // 发送数据
//           (websocket as any).send("发送数据");
//           console.log("websocket发送数据中");
//         };
//         // 客户端接收服务端返回的数据
//         websocket.onmessage = evt => {
//           console.log("websocket返回的数据：", evt);
//         };
//         // 发生错误时
//         websocket.onerror = evt => {
//           console.log("websocket错误：", evt);
//         };
//         // 关闭连接
//         websocket.onclose = evt => {
//           console.log("websocket关闭：", evt);
//         };
//       }
//     }

// connectWebsocket()
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
      justify-content: flex-end;
      align-items: flex-start;
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
        border: 10px solid $theme-color;
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
    max-height: 2000px;
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

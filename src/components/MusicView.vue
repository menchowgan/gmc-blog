<template>
  <div class="music-view flex column">
    <el-card
      shadow="hover"
      class="card flex row"
      :body-style="{ height: '96%', width: '100%' }"
      v-for="(item, index) in musicInfos"
      :key="item.id"
    >
      <div class="content flex row">
        <el-avatar
          :size="250"
          :src="item.icon"
          :class="{ image: true, rotatingImg: !item.paused }"
        />
        <div class="section flex column">
          <span class="title"
            >{{ item.title }} <span class="artist"> - {{ item.artist }} </span>
          </span>
          <div class="body flex column">
            <MusicPlayer
              :music="item.url"
              :music-idx="index"
              :shouldPaused="item.paused"
              @shouldRotate="setRotate"
              @curMusicStateChanged="curMusicStateChanged"
            />
          </div>
          <div class="evaluation">
            <span>评价：</span> {{ item.evaluation }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import MusicPlayer from "@/components/MusicPlayer.vue";

const curMusicStateChanged = (cur: { idx: number; paused: boolean }) => {
  musicInfos.forEach((info, index) => {
    if (cur.idx === index) {
      info.paused = cur.paused;
    } else {
      info.paused = true;
    }
  });
};

const setRotate = (state: {idx: number, pause: boolean}) => {
  musicInfos[state.idx].paused = state.pause
}

const musicInfos = reactive([
  {
    id: 0,
    title: "七里香",
    artist: "周杰伦",
    icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Foss.tan8.com%2Fyuepuku%2F74%2F37155%2F37155_prev.jpg&refer=http%3A%2F%2Foss.tan8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654150209&t=c60235bd3990063596eb49b827ec0de9",
    url: "http://dl.stream.qqmusic.qq.com/C4000012Ez0a1tFcOI.m4a?guid=5521947640&vkey=59D064E8241C62A9DB9A19AD03E38803D604EB161BC85317AD0C540B43F2C30DC02961D71FE3460E513B461E7E3CE3150378B9B27C3A346A&uin=1657943220&fromtag=120002",
    evaluation: "太好听了, 清新的风格，过了n多年还是好听😂😂😂",
    paused: true,
  },
  {
    id: 1,
    title: "搁浅",
    artist: "周杰伦",
    icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Foss.tan8.com%2Fyuepuku%2F74%2F37155%2F37155_prev.jpg&refer=http%3A%2F%2Foss.tan8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654150209&t=c60235bd3990063596eb49b827ec0de9",
    url: "http://dl.stream.qqmusic.qq.com/C400004UlK9x0jeuow.m4a?guid=3793929052&vkey=545258706B3D45EC41738B99D04D7F06419F7530531DE45323E4F0394F7C9B9D15EE6CADBD088796547A5B18745F515196E79F13E6C24FDB&uin=1657943220&fromtag=120002",
    evaluation: "太好听了, 清新的风格，过了n多年还是好听😂😂😂",
    paused: true,
  },
]);
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.music-view {
  width: 99%;
  margin-top: 5px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: var(--el-box-shadow);
  .card {
    width: 98%;
    height: 360px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    .content {
      width: 100%;
      height: 96%;
      justify-content: flex-start;
      align-items: center;
      .section {
        width: 74%;
        height: 100%;
        padding: 14px;
        justify-content: center;
        align-items: flex-start;
        .title {
          flex: 1;
          font-size: 36px;
          margin-top: 28px;
          &:hover {
            @include hover-style;
          }
          .artist {
            font-size: 34px;
            color: $theme-color;
          }
        }
        .body {
          flex: 5;
          padding-left: 20px;
          justify-content: center;
        }
        .evaluation {
          flex: 6;
          margin-left: 30px;
          color: #aaa;
          font-size: 24px;
          span {
            font-size: 32px;
            color: $theme-color;
          }
        }
      }
      .image {
        margin-left: 20px;
        border: 5px solid $theme-color;
        box-shadow: var(--el-box-shadow);
      }

      .rotatingImg {
        animation: rotating-img 15s linear infinite;
      }
    }
  }
}

@keyframes rotating-img {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
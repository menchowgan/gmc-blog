<template>
  <div class="music-player flex column">
    <div class="player flex row">
      <el-icon v-if="paused" @click="() => onPlay()"><video-play /></el-icon>
      <el-icon v-else @click="() => onPause()"><video-pause /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

const paused = ref<boolean>(true);

const player: HTMLAudioElement = document.getElementById("player") as any;

const startTime = ref<number>(-1);
const percentage = ref<number>(0);

const emits = defineEmits(["curMusicStateChanged", "shouldRotate"]);

const props = defineProps({
  music: {
    type: String,
    default: "",
  },
  shouldPaused: Boolean,
  musicIdx: Number,
});

if (Number(player.getAttribute("curidx")) === props.musicIdx) {
  paused.value = player.paused;
  emits("shouldRotate", {idx: props.musicIdx, pause: paused.value})
}

watch(
  () => props.shouldPaused,
  (pause: boolean) => {
    paused.value = pause;
  }
);

const onPlay = () => {
  player.src = props.music;
  if (player.paused) {
    player.play();
    paused.value = false;
    player.setAttribute("curidx", String(props.musicIdx));
    emits("curMusicStateChanged", {
      idx: props.musicIdx,
      paused: paused.value,
    });
  }
};

const onPause = () => {
  player.pause();
  paused.value = true;
  player.setAttribute("curidx", String(props.musicIdx));
  emits("curMusicStateChanged", { idx: props.musicIdx, paused: paused.value });
};

const reset = () => {
  paused.value = true;
  percentage.value = 0;
  startTime.value = 0
};
</script>

<style lang="scss" scoped>
@import "../style/flex-style.scss";
@import "../style/theme.scss";

.music-player {
  justify-content: flex-start;
  align-items: flex-start;
  .player {
    justify-content: flex-start;
    align-items: center;
    .el-icon {
      color: $theme-color;
      margin-left: 10px;
      margin-right: 20px;
      width: 56px;
      height: 56px;
      &:hover {
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
      }
    }
    .el-progress--line {
      width: 400px;
    }
  }
  audio {
    margin-top: 20px;
  }
}
</style>
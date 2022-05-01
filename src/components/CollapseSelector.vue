<template>
  <el-row class="types-container">
    <el-col :span="24">
      <h1 class="selection" style="color: #3fc7f5">Selection</h1>
      <section style="color: #3fc7f5">
        <div
          v-for="(item, index) in options"
          :key="item.title"
          @click="() => onSelected(index)"
        >
          <p
            style="font-size: 25px; font-family: Hiragino Sans GB"
            class="type-title"
          >
            {{ item.title }}
          </p>
          <p v-for="opt in item.opts" :key="opt.value">
            <transition name="fade">
              <span
                class="link"
                style="font-size: 22px"
                v-if="curParent === index"
                @click="() => onTypeChanged(opt.value)"
                >{{ opt.label }}</span
              >
            </transition>
          </p>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { defineEmits } from "@vue/runtime-core";
const emits = defineEmits(["typeChanged"]);

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
];

const onTypeChanged = (newVal: string) => {
  emits("typeChanged", newVal);
};

const curParent = ref(-1);
const onSelected = (cur: number) => {
  curParent.value = cur;
};
</script>

<style scoped>
.types-container .type-title:hover {
  background-color: #3fc7f5;
  transition: background 0.3s ease-out;
  color: #fff;
  opacity: 0.7;
  border-radius: 5px;
}
.types-container .link {
  color: #ccc;
}
.types-container .link:hover {
  color: #3fc7f5;
  transition: background 0.3s ease-out;
}

.types-container .selection:hover{
  animation: bounce 0.5s reverse;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounce{
  0% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
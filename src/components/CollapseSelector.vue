<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item
      v-for="(item, index) in options"
      :key="index"
      :title="item.title"
      :name="index"
    >
      <div style="margin-left: 20px">
        <el-radio
          v-for="type in item.opts"
          :key="type.value"
          v-model="selectedType"
          :label="type.value"
          size="large"
          >{{type.label}}</el-radio
        >
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { watch, defineEmits } from "@vue/runtime-core";
const emits = defineEmits(["typeChanged"])

const options = [
  {
    title: "生活",
    opts: [
      { label: "旅游", value: "REAVEL" },
      { label: "日常", value: "DAILY_LIFE" },
    ],
  },
  {
    title: "工作",
    opts: [
      { label: "技术博客", value: "TEC_BLOG" },
      { label: "工作计划", value: "JOB_PLAN" },
    ],
  },
];

const activeName = ref<number>(-1);
const selectedType = ref<string>("");

watch(() => selectedType.value, (newVal) => {
  emits("typeChanged", newVal)
})
</script>

<style scoped>
.el-collapse *{
  background: none;
}
</style>
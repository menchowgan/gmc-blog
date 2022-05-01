<template>
  <div class="images">
    <el-image
      v-for="item in photos"
      :key="item"
      style="width: 18%; margin-left: 35px; margin-bottom: 30px"
      :src="item"
      class="image"
    />
  </div>
</template>

<script setup lang="ts">
const photos = [
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.momi8.com%2Fimages%2Fblog_images%2F201207%2Fwww.momi8.com_201207141731411081004.jpg&refer=http%3A%2F%2Fwww.momi8.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=c6dba16b27ed994fc5250cbf62ec6417",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.cnblogs.com%2Fcnblogs_com%2Fchenpi%2F809071%2Fo_bg.jpg&refer=http%3A%2F%2Fimages.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=7cec63749b30c1e95f355c1257d7551a",
  "https://img2.baidu.com/it/u=70814297,2782616976&fm=253&fmt=auto&app=138&f=JPEG?w=490&h=513",
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F1118135%2F201707%2F1118135-20170719095351052-380810440.jpg&refer=http%3A%2F%2Fimages2015.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653923499&t=27b05c424f2cad2a9adb6f99eb69e3bb",
  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
];
</script>

<style scoped>
.images {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
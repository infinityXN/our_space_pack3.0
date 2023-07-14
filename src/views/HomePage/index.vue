<template>
  <div class="home-page">
    <div class="first-button-view">
      <el-button type="primary">第一个按钮</el-button>
      <el-button type="warning">第二个按钮</el-button>
      <el-button type="danger">第三个按钮</el-button>
    </div>
    <div>
      <el-switch v-model="theme" @click="toggle()"></el-switch>
    </div>
  </div>
</template>

<script setup>
  import { useToggle } from '@vueuse/shared';
  import { useDark } from "@vueuse/core";
  import { ref } from '@vue/reactivity';

  /* --- 切换深色、浅色主题 --- */
  const theme = ref(false);
  const isDark = useDark({
    storageKey: 'pageTheme',
    valueDark: 'dark',
    valueLight: 'light'
  });
  const toggle = useToggle(isDark);

</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .first-button-view {
    margin-bottom: 30px;
  }
}
</style>
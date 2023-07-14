<template>
  <!-- 根据官方文档，这里配置的是自定义空间命名 -->
  <el-config-provider namespace="infinity">
    <div id="app">
      <router-view v-slot="{ Component }">
        <!-- vue3里面，transition只支持单标签 -->
        <transition name="el-fade-in-linear" mode="out-in" />
        <component :is="Component"/>
      </router-view>
    </div>
  </el-config-provider>
</template>

<script>
export default {
  name: 'App',
  setup() {

  }
}
</script>

<style lang="scss">
</style>

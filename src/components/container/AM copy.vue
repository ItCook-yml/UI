<script setup>
import Aside from "@/components/basic/Aside.vue"
import Main from "@/components/basic/Main.vue"
</script>

<!-- 左边菜单栏，右边主内容 -->
<template>
  <div class="common-layout">
    <el-container>
        <Aside></Aside>
        <Main></Main>
    </el-container>
  </div>

</template>

<style scoped>

</style>
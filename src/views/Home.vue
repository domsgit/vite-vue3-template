<template>
  <div>
    <p class="text-red-400 dark:text-green-400">vue3技术栈项目模板。</p>
    <el-button type="primary">test</el-button>
    <p>{{msg}}</p>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
const msg = $('default msg')
</script>

<style lang="scss">

</style>

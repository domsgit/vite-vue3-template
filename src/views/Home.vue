<template>
<div>
  <el-button @click="test" type="primary">test</el-button>
</div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const { log } = console
const msg = $ref('default msg')

const test = () => {
  log('msg: ', msg)
  ElMessage(msg)
}
</script>

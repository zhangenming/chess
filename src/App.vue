<script setup lang="ts">
const rols = [
  ['军', '马', '相', '仕', '帅', '仕', '相', '马', '军'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['兵', '空', '兵', '空', '兵', '空', '兵', '空', '兵'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['兵', '空', '兵', '空', '兵', '空', '兵', '空', '兵'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['军', '马', '相', '仕', '帅', '仕', '相', '马', '军'],
]

function getRole(i: number, j: number) {
  return rols[i][j] === '空' ? '' : rols[i][j]
}
</script>

<template>
  <div class="app">
    <div class="line" v-for="i in 10">
      <div v-for="j in 9" :k="`${i - 1}-${j - 1}`">{{ getRole(i - 1, j - 1) }}</div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
#app {
  display: flex;
  justify-content: center;
  opacity: 0.1;
  width: 401px;
  height: 451px;
  overflow: hidden;
  position: relative;
}
.app {
  position: absolute;
  left: -25px;
  top: -25px;
}
.line {
  display: flex;
}
.line div {
  width: 50px;
  height: 50px;
  position: relative;
  flex-shrink: 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line div::before {
  content: '';
  position: absolute;
  top: 25px;
  width: 50px;
  height: 1px;
  background: black;
}
.line div::after {
  content: '';
  position: absolute;
  left: 25px;
  width: 1px;
  height: 50px;
  background: black;
}
</style>

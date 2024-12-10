<script setup lang="ts">
const roles = [
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
</script>

<template>
  <div class="app">
    <div class="line" v-for="(line, i) of roles">
      <div v-for="(role, j) of line" class="item" :i="i" :j="j">
        <div v-if="role !== '空'" class="role">{{ role }}</div>
      </div>
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
  /* overflow: hidden; */
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
.item {
  width: 50px;
  height: 50px;
  position: relative;
  flex-shrink: 0;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item::before {
  content: '';
  position: absolute;
  top: 25px;
  width: 50px;
  height: 1px;
  background: black;
}
.item::after {
  content: '';
  position: absolute;
  left: 25px;
  width: 1px;
  height: 50px;
  background: black;
}
.item[i='0']::after {
  height: 25px;
  top: 25px;
}
.item[i='9']::after {
  height: 25px;
  top: 0;
}
.item[j='0']::before {
  width: 25px;
  left: 25px;
}

.item[j='8']::before {
  width: 25px;
  left: 0;
}

.item:has(.role) {
  cursor: pointer;
}
.role {
  font-family: cursive;
  font-size: 35px;
  padding: 5px;
  line-height: 1em;
  border: 3px solid red;
  border-radius: 50%;
}
</style>

<script setup lang="ts">
const rols = {}
</script>

<template>
  <div class="app">
    <div class="line" v-for="i in 10">
      <div v-for="i in 9"></div>
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

<script setup lang="ts">
import { positions, select, role } from './data'
import { moves } from './move'
</script>

<template>
  <div>
    <div class="line" v-for="(line, i) of positions">
      <div v-for="(role, j) of line" class="item" :i="i" :j="j">
        <div
          v-if="role.qz"
          class="role"
          :class="{
            selected: i === select?.i && j === select?.j,
            canEat: moves.some((item) => item.i === i && item.j === j),
          }"
          @click="
            () => {
              select = { i, j }
            }
          "
        >
          {{ role.qz.role }}
        </div>
        <div
          v-else
          class="empty"
          :class="{
            canMove: moves.some((item) => item.i === i && item.j === j),
          }"
          @click="
            () => {
              if (!select) return
              ;[positions[i][j].qz, positions[select.i][select.j].qz] = [
                positions[select.i][select.j].qz,
                positions[i][j].qz,
              ]
              select = undefined
            }
          "
        ></div>
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
  background: white;
  z-index: 1;
}
.selected {
  background: red;
  color: white;
}
.empty {
  width: 50px;
  height: 50px;
  z-index: 1;
}
.canMove {
  background: black;
  width: 30px;
  height: 30px;
}
.canEat {
  background: black;
}
</style>

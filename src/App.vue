<script setup lang="ts">
import { positions, select } from './data'
import { moves } from './move'
import { getRoleType, judgeRed } from './utils'

function action({ target }) {
  if (!(target instanceof HTMLElement)) {
    return
  }

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  const clickType = getRoleType(i, j)

  if (!select.value) {
    // 拿
    if (clickType === 'black') {
      select.value = { i, j }
    }
  } else {
    const clicked = positions[i][j]
    const old = positions[select.value.i][select.value.j]

    // 走
    if (clickType === '空') {
      ;[clicked.qz, old.qz] = [old.qz, clicked.qz]
      select.value = undefined
    }
    // 走-吃
    if (clickType === 'red') {
      clicked.qz = old.qz
      old.qz = undefined
      select.value = undefined
    }

    if (clickType === 'black') {
      if (select.value.i === i && select.value.j === j) {
        // 拿-关
        select.value = undefined
      } else {
        // 拿-换
        select.value = { i, j }
      }
    }
  }
}
</script>

<template>
  <div @click="action">
    <div class="line" v-for="(line, i) of positions">
      <div v-for="(role, j) of line" class="item">
        <div
          :class="[
            {
              selected: i === select?.i && j === select?.j,
              canEat: role.qz && moves.some((item) => item.i === i && item.j === j),
              canMove: !role.qz && moves.some((item) => item.i === i && item.j === j),
            },
            role.qz ? ['role', role.qz.color] : 'empty',
          ]"
          :i
          :j
        >
          {{ role.qz?.role }}
        </div>
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
  font-weight: 900;
  line-height: 1em;
  padding: 5px;
  border: 3px solid red;
  border-radius: 50%;
  background: white;
  z-index: 1;
}
.role.red {
  border: 1px solid red;
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

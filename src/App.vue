<script setup lang="ts">
import { positions, select } from './data'
import { moves } from './move'
import { getRoleType } from './utils'
import './online'

function action({ target }: { target: HTMLElement }) {
  if (!(target instanceof HTMLElement)) {
    return
  }

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  const clickType = getRoleType(i, j)

  if (clickType === 'black') {
    if (select.value?.i === i && select.value?.j === j) {
      // 拿-关
      select.value = undefined
    } else {
      // 拿(换)
      select.value = { i, j }
    }
  } else if (select.value) {
    const clicked = positions[i][j]
    const old = positions[select.value.i][select.value.j]

    if (moves.value.find((item) => item.i === i && item.j === j)) {
      // 走
      if (clickType === 'empty') {
        ;[clicked.qz, old.qz] = [old.qz, clicked.qz]
      }
      // 走-吃
      if (clickType === 'red') {
        ;[clicked.qz, old.qz] = [old.qz, undefined]
      }
      select.value = undefined

      if (clicked.qz?.showB === false) {
        clicked.qz.showB = true
      }
    }
  }
}
</script>

<template>
  <div @click="action" class="flex" v-for="(line, i) of positions">
    <div v-for="(role, j) of line" class="item">
      <div
        :class="{
          selected: i === select?.i && j === select?.j,
          canMove: moves.find((item) => item.i === i && item.j === j),
          [role.qz?.color]: role.qz,
        }"
        :i
        :j
      >
        {{ role.qz && (role.qz.showB ? role.qz.roleB : role.qz.role) }}
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
  opacity: 0.02;
}
body:hover {
  opacity: 0.07;
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

.item:has(.red),
.item:has(.black) {
  cursor: pointer;
}
.item > div {
  z-index: 1;
}
.red,
.black {
  font-family: cursive;
  font-size: 35px;
  font-weight: 900;
  line-height: 1em;
  padding: 5px;
  border: 3px solid red;
  border-radius: 50%;
  background: white;
}
.red {
  border: 1px solid red;
}
.selected {
  background: red;
  color: white;
}
.canMove {
  background: black;
  width: 30px;
  height: 30px;
}

/* 吃 */
.canMove.red {
  background: black;
}
</style>

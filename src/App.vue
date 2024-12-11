<script setup lang="ts">
import { positions, select, 回合, 先手 } from './data'
import { moves } from './move'
import { getRoleType } from './utils'
import './online'
import { computed } from 'vue'
import { SEND } from './online'

function action({ target }: { target: HTMLElement }) {
  if (!该你走了.value) return

  if (!(target instanceof HTMLElement)) {
    return
  }

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  const clickType = getRoleType(i, j)

  if (clickType === (!先手.value ? 'black' : 'red')) {
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
        SEND({
          走: {
            l: { i: old.i, j: old.j },
            r: { i: clicked.i, j: clicked.j },
          },
        })
      }
      // 走-吃
      else if (clickType === 'red') {
        ;[clicked.qz, old.qz] = [old.qz, undefined]
      } else {
        console.error('吃')
      }
      select.value = undefined

      if (clicked.qz?.showB === false) {
        clicked.qz.showB = true
      }
    }
  }
}

const 该你走了 = computed(() => {
  return 回合.value % 2 === 先手.value
})
</script>

<template>
  <div class="opacity-100">回合{{ 回合 }}</div>
  <div class="opacity-100">{{ 该你走了 ? '你的回合' : '对手的回合' }}</div>

  <div @click="action" class="flex opacity-0" v-for="(line, i) of positions">
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
        {{ role.qz && (role.qz.showB ? role.qz.roleB : '〇') }}
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
#app:hover > div {
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

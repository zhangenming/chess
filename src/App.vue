<script setup lang="ts">
import { positions, select, 回合, 先手 } from './data'
import { moves } from './move'
import { getRoleType } from './utils'
import './online'
import { computed } from 'vue'
import { SEND } from './online'

function action({ target }: { target: HTMLElement }) {
  // if (!该你走了.value) return

  if (!(target instanceof HTMLElement)) {
    return
  }

  console.log(target)

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
  } else if (select.value && target.classList.contains('canMove')) {
    const clicked = positions[i][j]
    const old = positions[select.value.i][select.value.j]

    if (moves.value.find((item) => item.i === i && item.j === j)) {
      // 走
      if (clickType === 'empty') {
        ;[clicked.qz, old.qz] = [old.qz, clicked.qz]
        // SEND({
        //   走: {
        //     l: { i: old.i, j: old.j },
        //     r: { i: clicked.i, j: clicked.j },
        //   },
        // })
      }
      // 走-吃
      if (clickType === 'red') {
        ;[clicked.qz, old.qz] = [old.qz, undefined]
      }
      select.value = undefined

      if (clicked.qz.showB === false) {
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

  <div @click="action" class="flex" v-for="(line, i) of positions">
    <div v-for="(role, j) of line" class="item" :i :j>
      <div
        :class="{
          selected: i === select?.i && j === select?.j,
          canMove: moves.find((item) => item.i === i && item.j === j),
          [role.qz?.color]: role.qz,
          kong: !role.qz,
          jie: !role.qz?.showB,
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
div {
  user-select: none;
}
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.item {
  width: 50px;
  height: 50px;
  position: relative;
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
.item[i='4']::before {
  height: 2px;
}
.item[i='4'] {
  /* background: linear-gradient(180deg, #eee 0%, #ffffff 60%); */
}
.item[i='5'] {
  /* background: linear-gradient(180deg, #999 0%, #ffffff 50%); */
}
.item[i='4']:not([j='0'], [j='8'])::after {
  height: 25px;
  top: 0px;
}
.item[i='5']::before {
  height: 2px;
}
.item[i='5']:not([j='0'], [j='8'])::after {
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

/* 炮位 */
.item[i='7'][j='7'],
.item[i='7'][j='1'],
.item[i='2'][j='1'],
.item[i='2'][j='7'] {
  /* background-color: #eee; */
}

.item:has(.black),
.canMove {
  cursor: pointer;
}
.item > div {
  z-index: 1;
}
.red,
.black {
  font-family: cursive;
  font-size: 35px;
  line-height: 1em;
  padding: 5px;
  border-radius: 50%;
  background: white;
  transition: border-width 0.3s;
}
.black {
  border: 1px solid black;
  color: black;
  font-weight: 900;
}
.red {
  border: 1px solid red;
  color: red;
}
.jie {
  color: #999;
}
.item .selected {
  border-width: 8px;
  z-index: 9;
}
.canMove.kong {
  background: black;
  width: 10px;
  height: 10px;
  padding: 5px;
  border: 10px solid white;
  border-radius: 50%;
}
.canMove.red::before {
  content: '';
  background: red;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid black;
}
</style>

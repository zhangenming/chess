<script setup lang="ts">
import { computed } from 'vue'
import {
  positions,
  select,
  回合,
  先手,
  myColor,
  rolesA,
  rolesB,
  username,
  对手,
  positionsFlat,
  走棋提示1,
} from './data'
import { moves } from './move'
import { getRoleType } from './utils'
import './online'
import { SEND } from './online'

import 棋盘 from './components/棋盘.vue'

function action({ target }) {
  if (!该你走了.value) return

  if (!target.classList.contains('clickable')) return

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  console.log(target, i, j)

  if (target.classList.contains('canMove')) {
    const { i: oldI, j: oldJ } = select.value
    SEND('走', {
      old: [oldI, oldJ],
      clicked: [i, j],
      ...(!positions[oldI][oldJ].qz?.jie && { jie: 先手.value ? rolesA.pop() : rolesB.pop() }),
    })
  }

  select.value = undefined

  if (target.classList.contains(myColor.value)) {
    select.value = { i, j }
  }
}

const 该你走了 = computed(() => {
  return 回合.value % 2 === (先手.value ? 0 : 1)
})
</script>

<template>
  <div>我的用户名: {{ username }}</div>
  <div>对手用户名: {{ 对手 }}</div>
  <div>回合: {{ 回合 }}</div>
  <div style="font-size: 30px">{{ 对手 ? (该你走了 ? '该你走了~~~' : '轮到对方...') : '等待对手加入...' }}</div>

  <component
    :is="棋盘"
    @click="action"
    :class="{
      先手,
    }"
    :style="{ '--该你走了': 该你走了 ? myColor : 'white', marginTop: '50px' }"
  >
    <div
      v-for="{ i, j, qz } in positionsFlat.filter((e) => e.qz).sort((a, b) => a.qz.idx.localeCompare(b.qz.idx))"
      :key="qz.idx"
      :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
      :class="[
        'clickable',
        'roles',
        qz.color,
        {
          canMove: moves.find((item) => item.i === i && item.j === j),
          jieCls: !qz.jie,
          selected: i === select?.i && j === select?.j,
          走棋提示1: 走棋提示1.i === i && 走棋提示1.j === j,
        },
      ]"
      :i
      :j
    >
      {{ qz.jie || '〇' }}
    </div>
  </component>
</template>

<style>
#app {
  transform: scale(0.83);
}
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.先手 {
  rotate: 180deg;
}
.先手 .roles {
  rotate: 180deg;
}

.该你走了 .item:has(.black),
.canMove {
  cursor: pointer;
}
.roles {
  font-family: fangsong;
  font-size: 35px;
  line-height: 1em;
  padding: 5px;
  border-radius: 50%;
  background: white;
  position: absolute;
  translate: -50% -50%;
  transition-property: top, left, border-width;
  transition-duration: 0.3s;
  text-align: center;
  aspect-ratio: 1;
  display: flex;
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
.jieCls {
  color: #999;
}
.selected {
  border-width: 8px;
}
.canMove.位置 {
  background: black;
  width: 10px;
  height: 10px;
  padding: 5px;
  border: 10px solid white;
  border-radius: 50%;
}
.canMove.red::before,
.canMove.black::before {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  background: blue;
}
.走棋提示1::after,
.走棋提示2::after {
  content: '';
  width: 35px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  border: 2px solid blue;
}
</style>

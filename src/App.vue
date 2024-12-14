<script setup lang="ts">
import { computed } from 'vue'
import { positions, select, 回合, 先手, myColor, rolesA, rolesB, username, 对手, positionsFlat } from './data'
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
  <div>用户名: {{ username }}</div>
  <div>对手: {{ 对手 || '等待对手加入...' }}</div>

  <template v-if="对手">
    <div>回合: {{ 回合 }}</div>
  </template>

  <component :is="棋盘" @click="action">
    <div
      v-for="{ i, j, qz } in positionsFlat.filter((e) => e.qz).sort((a, b) => a.qz.idx.localeCompare(b.qz.idx))"
      :key="qz.idx"
      :style="{ top: `${i * 50}px`, left: `${j * 50 + 2}px` }"
      :class="[
        'clickable',
        'roles',
        qz.color,
        {
          canMove: moves.find((item) => item.i === i && item.j === j),
          jieCls: !qz.jie,
          selected: i === select?.i && j === select?.j,
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
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.app {
  border: 5px solid #eee;
}
.app.该你走了 {
  border: 5px solid green;
}
.app.先手 {
  transform: rotate(180deg);
}
.先手 .item > div {
  transform: rotate(180deg);
}

.该你走了 .item:has(.black),
.canMove {
  cursor: pointer;
}
.roles {
  font-family: cursive;
  font-size: 35px;
  line-height: 1em;
  padding: 5px;
  border-radius: 50%;
  background: white;
  position: absolute;
  transform: translate(-50%, -50%);
  transition-property: top, left, border-width;
  transition-duration: 0.3s;
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
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: blue;
}
</style>

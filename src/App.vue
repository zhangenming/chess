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
  const { i: oldI, j: oldJ } = select.value || {}
  select.value = undefined

  if (!target.parentElement?.classList.contains('位置s') && !target.parentElement?.classList.contains('棋子s')) return

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  if (target.classList.contains('canMove') || target.classList.contains('canEat')) {
    SEND('走', {
      old: [oldI, oldJ],
      clicked: [i, j],
      ...(!positions[oldI][oldJ].qz?.jie && { jie: 先手.value ? rolesA.pop() : rolesB.pop() }),
    })
  }

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
  <div>myColor: {{ myColor }}</div>

  <div style="font-size: 30px">{{ 对手 ? (该你走了 ? '该你走了~~~' : '轮到对方...') : '等待对手加入...' }}</div>

  <component
    :is="棋盘"
    @click="action"
    :class="{
      后手2: !先手,
    }"
    :style="{
      '--该你走了': 该你走了 ? myColor : 'white',
      marginTop: '50px',
      '--先手color': 先手 ? 'black' : 'red',
      '--后手color': 先手 ? 'red' : 'black',
    }"
  >
    <div
      v-for="{ i, j, qz } in positionsFlat.filter((e) => e.qz).sort((a, b) => a.qz.idx.localeCompare(b.qz.idx))"
      :key="qz.idx"
      :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
      :class="[
        'roles',
        qz.color,
        {
          canEat: moves.find((item) => item.i === i && item.j === j),
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
.后手2 {
  rotate: 180deg;
}
.后手2 .roles {
  rotate: 180deg;
}

.canMove,
.canEat {
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
.先手 {
  border: 1px solid var(--先手color);
  color: var(--先手color);
  font-weight: 900;
}
.后手 {
  border: 1px solid var(--后手color);
  color: var(--后手color);
}
.jieCls {
  color: #999;
}
.selected {
  border-width: 8px;
}
.canMove {
  background: #111;
  width: 10px;
  height: 10px;
  padding: 5px;
  border: 10px solid white;
  border-radius: 50%;
}
.canEat::before {
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

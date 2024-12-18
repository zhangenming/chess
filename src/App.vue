<script setup lang="ts">
import {
  起始棋子,
  is先手,
  myBt,
  drBt,
  roles,
  我的id,
  对手id,
  allQz,
  走棋提示1,
  is我的回合,
  moves,
  offline,
} from './data'
import { test, getItemRandom, ij2item } from './utils'
import { SEND } from './online'

import 棋盘 from './components/棋盘.vue'

function action({ target }) {
  if (!is我的回合.value && !offline) return

  const ol_起始棋子 = 起始棋子.value
  起始棋子.value = undefined

  if (!target.parentElement?.classList.contains('位置s') && !target.parentElement?.classList.contains('棋子s')) return

  const 目标位置 = `${target.getAttribute('i')}-${target.getAttribute('j')}`

  if (target.classList.contains('canMove') || target.classList.contains('canEat')) {
    const qz起始棋子 = ij2item(ol_起始棋子).qz
    const qz目标位置 = ij2item(目标位置).qz

    SEND('走棋', {
      ol_起始棋子,
      ol_目标位置: 目标位置,
      ...(!qz起始棋子.jie && { ol_jie: getItemRandom(roles[qz起始棋子.tb]) }),
      ...(qz目标位置 && !qz目标位置.jie && { ol_jieEat: getItemRandom(roles[qz目标位置.tb]) }),
    })

    test(qz起始棋子.tb === qz目标位置?.tb, '吃自己')
  }

  // offline的话交替行走俩人的棋子 否则只能走自己的棋子
  if (target.classList.contains(offline ? (is我的回合.value ? myBt.value : drBt.value) : myBt.value)) {
    起始棋子.value = 目标位置
  }
}
</script>

<template>
  <!-- <button style="margin: 10px; padding: 10px" @click="() => SEND('发起悔棋')">悔棋</button> -->

  <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
  <div>先手: {{ is先手 ? '先手' : '后手' }}</div>
  <div>myBtType: {{ myBt }}</div>

  <div style="font-size: 30px">{{ 对手id ? (is我的回合 ? '该你走了~~~' : '轮到对方...') : '等待对手加入...' }}</div>

  <component
    v-if="对手id"
    :is="棋盘"
    @click="action"
    :style="{
      marginTop: '50px',
      '--该你走了': is我的回合 ? 'black' : '#999',
      '--先手color': is先手 ? 'black' : 'red',
      '--后手color': is先手 ? 'red' : 'black',
      '--先手weight': is先手 ? 900 : 100,
      '--后手weight': is先手 ? 100 : 900,
      '--top_color': is先手 ? 'red' : 'black',
      '--bot_color': is先手 ? 'black' : 'red',
      '--后手需要反转': is先手 ? '0deg' : '180deg',
    }"
  >
    <div
      v-for="{ i, j, qz } in allQz.sort((a, b) => a.qz.idx.localeCompare(b.qz.idx))"
      :key="qz.idx"
      :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
      :class="[
        'roles',
        qz.tb,
        {
          canEat: moves.find((item) => item.i === i && item.j === j),
          jieCls: !qz.jie,
          selected: 起始棋子 === `${i}-${j}`,
          走棋提示: 走棋提示1 === `${i}-${j}`,
        },
      ]"
      :i
      :j
      :jie="qz.jie"
    >
      {{ qz.jie || '〇' }}
    </div>
  </component>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  transform: scale(0.83);
}

.roles {
  font-family: fangsong;
  display: flex;
  padding: 5px;
  font-size: 35px;
  line-height: 1em;
  text-align: center;
  aspect-ratio: 1;
  position: absolute;
  translate: -50% -50%;
  transition-property: all;
  transition-duration: 0.3s;
  background: color-mix(in oklab, currentColor, white 90%);
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: var(--后手color);
  color: var(--后手color);
  font-weight: var(--后手weight);
}
.bot {
  border-color: var(--先手color);
  color: var(--先手color);
  font-weight: var(--先手weight);
}
.jieCls {
  color: #aaa;
}
[jie='车'] {
  border-width: 7px;
}
[jie='马'] {
  border-width: 5px;
}
[jie='炮'] {
  border-width: 5px;
}
.selected {
  border-radius: 0;
  z-index: 1;
}
.canMove,
.canEat {
  cursor: pointer;
}
.canMove::before,
.canEat::before {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 1%;
  background: blue;
}
.走棋提示::after {
  content: '';
  width: 50px;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border: 2px solid #111;
}
</style>

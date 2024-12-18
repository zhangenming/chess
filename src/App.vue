<script setup lang="ts">
import { effect } from 'vue'
import 棋盘 from './components/棋盘.vue'
import { action } from './gameTick'
import {
  起始棋子,
  is先手,
  myTB,
  我的id,
  对手id,
  is我的回合,
  moves,
  所有棋子,
  我吃_敌_被保护,
  我吃_敌_无保护,
  敌吃_我_被保护,
  敌吃_我_无保护,
  offline,
  buff,
  is将军,
} from './data'

effect(() => {
  if (is将军.value) {
    alert('将军')
  }
})
</script>

<template>
  <!-- <button style="margin: 10px; padding: 10px" @click="() => SEND('发起悔棋')">悔棋</button> -->

  <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
  <div>先手: {{ is先手 ? '先手' : '后手' }}</div>
  <div>myBtType: {{ myTB }}</div>

  <div style="font-size: 30px">{{ 对手id ? (is我的回合 ? '该你走了~~~' : '轮到敌...') : '等待对手加入...' }}</div>

  <component
    v-if="对手id || offline"
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
      v-for="{ i, j, qz } in 所有棋子"
      :key="qz.idx"
      :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
      :class="[
        'roles',
        qz.tb,
        {
          canMove: moves.find((item) => item.i === i && item.j === j),
          jieCls: !qz.jie,
          selected: 起始棋子 === `${i}-${j}`,
          ...(buff && {
            我吃敌被保护cls: 我吃_敌_被保护.find((item) => item.i === i && item.j === j),
            我吃敌无保护cls: 我吃_敌_无保护.find((item) => item.i === i && item.j === j),
            敌吃我被保护cls: 敌吃_我_被保护.find((item) => item.i === i && item.j === j),
            敌吃我无保护cls: 敌吃_我_无保护.find((item) => item.i === i && item.j === j),
          }),
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
.canMove {
  cursor: pointer;
}
.canMove::before,
:is(.我吃敌被保护cls, .我吃敌无保护cls, .敌吃我被保护cls, .敌吃我无保护cls)::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 1%;
  aspect-ratio: 1;
  width: 10px;
  background: black;
}
.我吃敌被保护cls::after {
  background: green;
  width: 7px;
}
.敌吃我被保护cls::after {
  background: green;
  width: 7px;
}
.我吃敌无保护cls::after {
  background: red;
  width: 15px;
}
.敌吃我无保护cls::after {
  background: red;
  width: 15px;
}
</style>

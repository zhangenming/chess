<script setup lang="ts">
import 棋盘 from './components/棋盘.vue'
import { action } from './gameTick'
import {
  起点位置,
  is先手,
  我的id,
  对手id,
  is我的回合,
  所有棋子_生死,
  offline,
  buff,
  我吃_敌_被保护,
  我吃_敌_无保护,
  敌吃_我_被保护,
  敌吃_我_无保护,
  is将军,
} from './data'
</script>

<template>
  <!-- <button style="margin: 10px; padding: 10px" @click="() => SEND('发起悔棋')">悔棋</button> -->

  <div>
    <div :style="{ fontSize: '70px', opacity: is将军 ? 1 : 0 }">将军</div>
    <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
    <div style="font-size: 30px">{{ 对手id ? (is我的回合 ? '该你走了~~~' : '轮到对方...') : '等待对手加入...' }}</div>
  </div>

  <component
    v-if="对手id || offline"
    :is="棋盘"
    @click="action"
    :style="{
      margin: '50px',
      '--该你走了': is我的回合 ? 'black' : '#999',
      '--后手需要反转': is先手 ? '0deg' : '180deg',
      '--top_weight': is先手 ? 100 : 900,
      '--bot_weight': is先手 ? 900 : 100,
      '--top_color': is先手 ? 'red' : 'black',
      '--bot_color': is先手 ? 'black' : 'red',
    }"
  >
    <dom棋子
      v-for="{ i, j, tb, role, jie, deadIdx } of 所有棋子_生死"
      :style="
        deadIdx
          ? {
              zIndex: deadIdx,
              // transition: 'none',
              top: tb === 'top' ? '500px' : '-50px',
              left: `${(deadIdx - 1) * 24}px`,
            }
          : { top: `${i * 50}px`, left: `${j * 50}px` }
      "
      :class="[
        tb,
        deadIdx
          ? 'dead'
          : {
              jieCls: jie === '〇',
              selected: 起点位置 === `${i}-${j}`,
              ...(buff && {
                // 我吃敌被保护cls: 我吃_敌_被保护.find((item) => item.i === i && item.j === j),
                我吃敌无保护cls: 我吃_敌_无保护.find((item) => item.i === i && item.j === j),
                // // 敌吃我被保护cls: 敌吃_我_被保护.find((item) => item.i === i && item.j === j),
                敌吃我无保护cls: 敌吃_我_无保护.find((item) => item.i === i && item.j === j),
              }),
            },
      ]"
      :i
      :j
      :role
      :jie
    >
      {{ jie }}
    </dom棋子>
  </component>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  transform: scale(0.83);
}

dom棋子 {
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
  transform: rotate(var(--后手需要反转));
  border-color: var(--top_color);
  color: var(--top_color);
  font-weight: var(--top_weight);
}
.bot {
  border-color: var(--bot_color);
  color: var(--bot_color);
  font-weight: var(--bot_weight);
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
}
.canMove,
.canMove2 {
  cursor: pointer;
  z-index: 1;
}
.canMove::before,
.canMove2::before,
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
.canMove2::before {
  background: blue;
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
.dead {
  top: -50px;
  border-width: 1px;
  font-size: 20px;
}
</style>

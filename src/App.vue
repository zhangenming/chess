<script setup lang="ts">
import 棋盘 from './components/棋盘.vue'
import { action } from './gameTick'
import {
  type t棋子,
  起点位置,
  is先手,
  我的id,
  对手id,
  回合数,
  is我的回合,
  base棋子,
  one,
  buff,
  filt棋子_生,
  filt棋子_死,
  filt棋子_我,
  filt棋子_我_死,
  filt棋子_我_生,
  filt棋子_我_生_吃,
  filt棋子_我_生_吃_我,
  filt棋子_我_生_吃_敌,
  filt棋子_我_生_吃_敌_有保护,
  filt棋子_我_生_吃_敌_无保护,
  filt棋子_敌,
  filt棋子_敌_生,
  filt棋子_敌_死,
  filt棋子_敌_生_吃,
  filt棋子_敌_生_吃_敌,
  filt棋子_敌_生_吃_我,
  filt棋子_敌_生_吃_我_有保护,
  filt棋子_敌_生_吃_我_无保护,
  正在被吃,
  走棋信息,
  暗子牌库,
} from './data'

function diff_jie(arr: t棋子[]) {
  const l = arr.filter((item) => item.jie === '〇')
  const r = arr.filter((item) => item.jie !== '〇')
  return `${l.length}/${r.length}`
}
</script>

<template>
  <!-- <button style="margin: 10px; padding: 10px" @click="() => SEND('发起悔棋')">悔棋</button> -->

  <div>
    <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
    <div>is先手: {{ is先手 }}</div>
    <div>回合数: {{ 回合数 }}</div>
    <div style="font-size: 30px">{{ 对手id ? 走棋信息 : '等待对手加入...' }}</div>
  </div>

  <component
    v-if="对手id || one"
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
      v-for="{ i, j, tb, role, jie, deadIdx } of base棋子"
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
                // 我吃敌有保护cls: 我吃_敌_有保护.find((item) => item.i === i && item.j === j),
                我吃敌无保护cls: filt棋子_我_生_吃_敌_无保护.find((item) => item.i === i && item.j === j),
                // 敌吃我有保护cls: 敌吃_我_有保护.find((item) => item.i === i && item.j === j),
                敌吃我无保护cls: filt棋子_敌_生_吃_我_无保护.find((item) => item.i === i && item.j === j),
                // 正在被吃cls: 正在被吃.find((item) => item.i === i && item.j === j),
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

  <div v-if="buff" class="dbg">
    <div>{{ 暗子牌库.top }}</div>
    <div>{{ 暗子牌库.bot }}</div>
    <div>
      <div></div>
      <div>我{{ diff_jie(filt棋子_我) }}</div>
      <div>敌{{ diff_jie(filt棋子_敌) }}</div>
    </div>
    <div>
      <div>生{{ diff_jie(filt棋子_生) }}</div>
      <div>我生{{ diff_jie(filt棋子_我_生) }}</div>
      <div>敌生{{ diff_jie(filt棋子_敌_生) }}</div>
    </div>
    <div>
      <div>死{{ diff_jie(filt棋子_死) }}</div>
      <div>我死{{ diff_jie(filt棋子_我_死) }}</div>
      <div>敌死{{ diff_jie(filt棋子_敌_死) }}</div>
    </div>
  </div>
</template>

<style>
.dbg {
  margin-top: 80px;
}
.dbg > div {
  display: flex;
  gap: 10px;
}
.dbg > div > div {
  width: 100px;
}
body {
  /* transform: scale(0.83); */
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
:is(.我吃敌有保护cls, .我吃敌无保护cls, .敌吃我有保护cls, .敌吃我无保护cls, .正在被吃cls)::after {
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
.我吃敌有保护cls::after {
  background: green;
  width: 7px;
}
.敌吃我有保护cls::after {
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
.正在被吃cls::after {
  background: yellow;
  width: 15px;
}
</style>

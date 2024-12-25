<script setup lang="ts">
import 棋盘 from './components/棋盘.vue'
import { 上次点击位置, is先手, 我的id, 对手id, 回合数, is我的回合, base棋子, one, buff, 走棋信息 } from './data'
import { isMaster } from './data'
</script>

<template>
  <div v-if="!isMaster">
    <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
    <div>is先手: {{ is先手 }}</div>
    <div>回合数: {{ 回合数 }}</div>
    <div style="font-size: 30px">{{ 对手id ? 走棋信息 : '等待对手加入...' }}</div>
  </div>

  <component
    v-if="(对手id || one) && !isMaster"
    :is="棋盘"
    :style="{
      '--该你走了': is我的回合 ? 'black' : '#999',
      '--后手需要反转': is先手 ? '0deg' : '180deg',
      '--top_weight': is先手 ? 100 : 900,
      '--bot_weight': is先手 ? 900 : 100,
      '--top_color': is先手 ? 'red' : 'black',
      '--bot_color': is先手 ? 'black' : 'red',
    }"
  >
    <dom棋子
      v-for="{ i, j, tb, jie, deadIdx } of base棋子"
      :style="
        deadIdx
          ? {
              zIndex: deadIdx,
              // transition: 'none',
              top: tb === 'top' ? '510px' : '-40px',
              left: `${(deadIdx - 1) * 24}px`,
            }
          : { top: `${i * 50}px`, left: `${j * 50}px` }
      "
      :class="[
        tb,
        deadIdx
          ? 'dead'
          : {
              selected: 上次点击位置?.i === i && 上次点击位置?.j === j,
              ...(buff &&
                {
                  // // 我吃敌有保护cls: 我吃_敌_有保护.find((item) => item.i === i && item.j === j),
                  // 我吃敌无保护cls: findItem(filt棋子_我_生_吃_敌_无保护, { i, j }),
                  // // 敌吃我有保护cls: 敌吃_我_有保护.find((item) => item.i === i && item.j === j),
                  // 敌吃我无保护cls: findItem(filt棋子_敌_生_吃_我_无保护, { i, j }),
                  // // 正在被吃cls: 正在被吃.find((item) => item.i === i && item.j === j),
                }),
            },
      ]"
      :jie
    >
      {{ jie }}
    </dom棋子>
  </component>

  <div popover id="popover" style="position: absolute; left: 50%; top: 50%; translate: -50% -50%; padding: 50px">对方退出</div>
</template>

<style>
body {
  /* transform: scale(0.83); */
}

dom位置 {
  position: absolute;
  width: 50px;
  aspect-ratio: 1;
  top: calc(var(--i) * 50px);
  left: calc(var(--j) * 50px);
}

dom棋子 {
  font-family: fangsong;
  width: 50px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  line-height: 1em;
  text-align: center;
  position: absolute;
  transition-property: all;
  transition-duration: 0.3s;
  background: color-mix(in oklab, currentColor, white 90%);
  border-radius: 50%;
  outline-width: 2px;
  outline-style: solid;
  transform: rotate(var(--后手需要反转));
  outline-color: var(--top_color);
  color: var(--top_color);
  font-weight: var(--top_weight);
}
.bot {
  outline-color: var(--bot_color);
  color: var(--bot_color);
  font-weight: var(--bot_weight);
}
[jie='〇'] {
  color: #aaa;
}
[jie='车'] {
  outline-width: 7px;
  font-weight: 900;
}
[jie='马'] {
  outline-width: 5px;
  font-weight: 900;
}
[jie='炮'] {
  outline-width: 5px;
  font-weight: 900;
}
.selected {
  border-radius: 0;
}
.dead {
  outline-width: 1px;
  font-size: 20px;
  width: 25px;
}
/* dom位置.canMove位置,
dom位置.canMove位置2 {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
dom位置.canMove位置::before,
dom位置.canMove位置2::before,
:is(dom棋子.我吃敌有保护cls, dom棋子.我吃敌无保护cls, dom棋子.敌吃我有保护cls, dom棋子.敌吃我无保护cls, dom棋子.正在被吃cls)::before {
  content: '';
  width: 15px;
  aspect-ratio: 1;
  border-radius: 1%;
  position: absolute;
  background: #1500fb;
}
dom位置.canMove位置2::before {
  background: blue;
}
dom棋子.我吃敌有保护cls::before {
  background: green;
  width: 7px;
}
dom棋子.敌吃我有保护cls::before {
  background: green;
  width: 7px;
}
dom棋子.我吃敌无保护cls::before {
  background: red;
  width: 15px;
}
dom棋子.敌吃我无保护cls::before {
  background: red;
  width: 15px;
}
dom棋子.正在被吃cls::before {
  background: yellow;
  width: 15px;
} */
</style>

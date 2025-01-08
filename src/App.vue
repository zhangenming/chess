<script setup lang="ts">
import comp棋盘 from './components/棋盘.vue'
import { 上次点击位置, is先手, 对手id, 回合数, is我的回合, base棋子 } from './data'
import { 走子信息, 走子延迟 } from './gameTick'
import { 我的id, isMaster, isOne, isBuff } from './lib/constant'
</script>

<template>
  <comp棋盘
    v-if="对手id || isOne"
    :style="{
      '--后手需要反转': is先手 ? '0deg' : '180deg',
      '--top_color': is先手 ? 'red' : 'black',
      '--bot_color': is先手 ? 'black' : 'red',
    }"
  >
    <dom棋子
      v-for="{ i, j, tb, 暗, deadIdx } of base棋子"
      :style="
        deadIdx
          ? {
              zIndex: deadIdx,
              // transition: 'none',
              top: tb === 'top' ? '510px' : '-40px',
              left: `${(deadIdx - 1) * 20}px`,
            }
          : { top: `${i * 50}px`, left: `${j * 50}px` }
      "
      :class="[
        tb,
        deadIdx
          ? 'dead'
          : {
              selected: 上次点击位置?.i === i && 上次点击位置?.j === j,
              ...(isBuff &&
                {
                  // // 我吃敌有保护cls: 我吃_敌_有保护.find((item) => item.i === i && item.j === j),
                  // 我吃敌无保护cls: findItem(filt棋子_我_生_吃_敌_无保护, { i, j }),
                  // // 敌吃我有保护cls: 敌吃_我_有保护.find((item) => item.i === i && item.j === j),
                  // 敌吃我无保护cls: findItem(filt棋子_敌_生_吃_我_无保护, { i, j }),
                  // // 正在被吃cls: 正在被吃.find((item) => item.i === i && item.j === j),
                }),
            },
      ]"
      :暗
    >
      {{ 暗 }}
    </dom棋子>
  </comp棋盘>

  <div style="position: absolute; bottom: 0; width: 100%">
    <div style="font-size: 30px">{{ 走子信息 }}</div>
    <div>走子延迟: {{ 走子延迟 }}</div>
    <div>我的id: {{ 我的id }} vs 对手id: {{ 对手id }}</div>
    <div>回合数: {{ 回合数 }}</div>
  </div>

  <div popover id="popover" style="position: absolute; left: 50%; top: 50%; translate: -50% -50%; padding: 50px">对方退出</div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
.bot {
  outline-color: var(--bot_color);
  color: var(--bot_color);
}
[暗='〇'] {
  color: #aaa;
}
[暗='车'] {
  outline-width: 7px;
  font-weight: 900;
}
[暗='马'] {
  outline-width: 5px;
  font-weight: 900;
}
[暗='炮'] {
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

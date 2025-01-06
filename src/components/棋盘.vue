<script setup lang="ts">
import { 可移动位置, isTop回合, isBot回合, top被将, bot被将, 我被将军, 危险位置, 安全位置, 活棋子_我敌, 我的活棋子s, 敌的活棋子s } from '../data'
import { findItem, 位置2棋子, get棋子role, hasFlag } from '../utils'
import { action, 走子提示 } from '../gameTick'
import { isBuff } from '@/lib/constant'
import { effect } from 'vue'

effect(() => {
  if (我被将军) {
    navigator.vibrate([200, 50, 200])
  }
})
</script>

<template>
  <dom棋盘 :style="{ '--棋盘颜色': 我被将军 ? 'red' : 'black' }">
    <div class="横">
      <div class="h" v-for="i in 10" :style="{ left: '25px', top: `${(i - 1) * 50 + 25}px` }"></div>
    </div>

    <div class="竖">
      <div class="s" v-for="i in 9" :style="{ left: `${(i - 1) * 50 + 25}px`, top: '25px' }"></div>
    </div>

    <div class="河"></div>

    <div class="士">
      <div
        class="士-1"
        :style="{
          ...(isTop回合 && { background: 'color-mix(in oklab, var(--top_color), white 50%)' }),
        }"
      >
        <div class="士-h"></div>
        <div class="士-s"></div>
      </div>
      <div
        class="士-2"
        :style="{
          ...(isBot回合 && { background: 'color-mix(in oklab, var(--bot_color), white 50%)' }),
        }"
      >
        <div class="士-h"></div>
        <div class="士-s"></div>
      </div>
    </div>

    <div class="炮">
      <div>
        <div style="top: 125px; left: 75px">
          <div v-for="i in 4"></div>
        </div>
        <div style="top: 125px; left: 375px">
          <div v-for="i in 4"></div>
        </div>
        <div :style="{ top: '175px', left: `${(i - 1) * 100 + 25}px` }" v-for="i in 5">
          <div v-for="i in 4"></div>
        </div>
      </div>
      <div>
        <div style="top: 375px; left: 75px">
          <div v-for="i in 4"></div>
        </div>
        <div style="top: 375px; left: 375px">
          <div v-for="i in 4"></div>
        </div>
        <div :style="{ top: '325px', left: `${(i - 1) * 100 + 25}px` }" v-for="i in 5">
          <div v-for="i in 4"></div>
        </div>
      </div>
    </div>

    <div class="棋子s">
      <slot></slot>
    </div>

    <div class="位置s">
      <template v-for="i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
        <dom位置
          v-for="j of [0, 1, 2, 3, 4, 5, 6, 7, 8]"
          @click="action"
          :style="{ '--i': i, '--j': j }"
          :class="[
            {
              // 走子提示1: 走子提示?.[0].i === i && 走子提示?.[0].j === j,
              // 走子提示2: 走子提示?.[1].i === i && 走子提示?.[1].j === j,
              canMove位置: findItem(可移动位置, { i, j }),
              ...(isBuff && {
                // canMove位置2: findItem(可移动位置2, { i, j }),
                存在我方棋子: findItem(我的活棋子s, { i, j }),
                存在敌方棋子: findItem(敌的活棋子s, { i, j }),
                主力棋子: ['车', '马', '炮'].includes(get棋子role(位置2棋子({ i, j })) || ''),
              }),
            },
            isBuff &&
              (() => {
                const 危险位置cls = findItem(危险位置, { i, j })
                const 安全位置cls = findItem(安全位置, { i, j })
                if (安全位置cls && 危险位置cls) {
                  return '混乱位置cls'
                }
                if (危险位置cls) {
                  return '危险位置cls'
                }
                if (安全位置cls) {
                  return '安全位置cls'
                }
                return '中立位置cls'
              })(),
          ]"
        />
      </template>
    </div>
  </dom棋盘>
</template>

<style>
dom棋盘 {
  margin-top: 30px;
  display: block;
  width: 450px;
  height: 500px;
  transform: rotate(var(--后手需要反转));
  user-select: none;
  position: relative;
  outline: var(--棋盘颜色) solid 30px;
}

.h,
.s {
  background-color: #999;
  position: absolute;
  width: 400px;
  height: 1px;
}
.s {
  width: 1px;
  height: 450px;
}
.h:nth-child(5),
.h:nth-child(6) {
  height: 3px;
  background-color: #666;
}
.h:nth-child(6) {
  top: calc(275px - 2px) !important;
}

.河 {
  width: 302px;
  height: 45px;
  background-color: white;
  position: absolute;
  left: 75px;
  top: calc(225px + 3px);
}

.士-1,
.士-2 {
  opacity: 0.3;
  position: absolute;
  width: 100px;
  aspect-ratio: 1;
  top: 25px;
  left: 175px;
}
.士-2 {
  top: auto;
  bottom: 25px;
}
.士-h,
.士-s {
  width: 140px;
  transform: rotate(45deg);
  transform-origin: left;
}
.士-s {
  transform: rotate(-45deg) translate(-69px, 69px);
}
.士-1 :is(.士-h, .士-s) {
  border-top: 2px dashed var(--top_color);
}
.士-2 :is(.士-h, .士-s) {
  border-top: 2px dashed var(--bot_color);
}

.炮 > div > div {
  position: absolute;
}
.炮 > div > div div {
  width: 10px;
  aspect-ratio: 1;
  border: 1px solid #111;
  margin: 3px;
  position: absolute;
}
.炮 > div > div div:nth-child(1) {
  border-right: none;
  border-bottom: none;
}
.炮 > div > div div:nth-child(2) {
  border-left: none;
  border-bottom: none;
  left: -16px;
}
.炮 > div > div div:nth-child(3) {
  border-right: none;
  border-top: none;
  top: -16px;
}
.炮 > div > div div:nth-child(4) {
  border-left: none;
  border-top: none;
  left: -16px;
  top: -16px;
}
div.炮 > div:nth-child(2) > div:nth-child(7) > div:nth-child(1),
div.炮 > div:nth-child(2) > div:nth-child(7) > div:nth-child(3),
div.炮 > div:nth-child(1) > div:nth-child(7) > div:nth-child(3),
div.炮 > div:nth-child(1) > div:nth-child(7) > div:nth-child(1),
div.炮 > div:nth-child(1) > div:nth-child(3) > div:nth-child(4),
div.炮 > div:nth-child(1) > div:nth-child(3) > div:nth-child(2),
div.炮 > div:nth-child(2) > div:nth-child(3) > div:nth-child(4),
div.炮 > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) {
  display: none;
}

.canMove位置 {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.canMove位置::before {
  content: '';
  width: 15px;
  aspect-ratio: 1;
  border-radius: 1%;
  position: absolute;
  background: black;
}

.走子提示1 {
  border: 2px solid #1500fb;
}
.走子提示2 {
  border: 4px solid #1500fb;
}

.混乱位置cls {
  background: color-mix(in oklab, yellow, transparent 80%);
}
.危险位置cls {
  background: color-mix(in oklab, red, transparent 90%);
}
.安全位置cls {
  background: color-mix(in oklab, black, transparent 90%);
}

/* .混乱位置cls.主力棋子 {
  background: color-mix(in oklab, red, transparent 70%);
} */

.危险位置cls.存在我方棋子,
.安全位置cls.存在敌方棋子 {
  background: color-mix(in oklab, red, transparent 60%);
}
</style>

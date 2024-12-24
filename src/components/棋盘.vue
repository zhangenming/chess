<script setup lang="ts">
import { computed } from 'vue'
import { 可移动位置, 可移动位置2, 走子提示, isTop回合, isBot回合, buff, 我被将军, 敌被将军, myIsTop, top被将, bot被将 } from '../data'

const 走子提示format = computed(() =>
  走子提示.value!.map((item) => ({
    top: item.i * 50 + 25 + 'px',
    left: item.j * 50 + 25 + 'px',
  }))
)
</script>

<template>
  <dom棋盘>
    <div class="走子提示" v-if="走子提示" :style="走子提示format[0]" style="width: 30px"></div>
    <div class="走子提示" v-if="走子提示" :style="走子提示format[1]"></div>

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
        :class="{
          被将军: top被将,
        }"
        :style="{
          '--将军颜色': 'var(--top_color)',
          ...(isTop回合 && { background: 'color-mix(in oklab, var(--top_color), white 50%)' }),
        }"
      >
        <div class="士-h"></div>
        <div class="士-s"></div>
      </div>
      <div
        class="士-2"
        :class="{
          被将军: bot被将,
        }"
        :style="{
          '--将军颜色': 'var(--bot_color)',
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
          :class="{
            canMove: 可移动位置.find((item) => item.i === i && item.j === j),
            canMove2: buff && 可移动位置2.find((item) => item.i === i && item.j === j),
          }"
          v-for="j of [0, 1, 2, 3, 4, 5, 6, 7, 8]"
          :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
          :i="i"
          :j="j"
        ></dom位置>
      </template>
    </div>
  </dom棋盘>
</template>

<style>
dom棋盘 {
  display: block;
  width: 450px;
  height: 500px;
  /* outline: 26px solid beige;
  box-shadow: 0px 0px 0px 35px var(--该你走了); */
  transform: rotate(var(--后手需要反转));
  user-select: none;
  position: relative;
}

.h,
.s {
  background-color: #999;
  position: absolute;
  width: 400px;
  height: 1px;
}
.h:nth-child(5),
.h:nth-child(6) {
  height: 3px;
  background-color: #666;
}
.h:nth-child(6) {
  top: calc(275px - 2px) !important;
}
.s {
  width: 1px;
  height: 450px;
}
.河 {
  width: 302px;
  height: 45px;
  background-color: white;
  position: absolute;
  left: 50px;
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

.走子提示 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  translate: -50% -50%;
  position: absolute;
  background: #1500fb;
  opacity: 0.5;
  /* transition: all 0.5s; */
}
.被将军 {
  outline: 25px solid var(--将军颜色);
}
</style>

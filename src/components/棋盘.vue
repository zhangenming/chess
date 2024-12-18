<script setup lang="ts">
import { moves } from '../data'
import { 吃子列表, 走子提示 } from '../data'
</script>

<template>
  <div class="container">
    <div class="吃子列表top">
      <span v-if="吃子列表.top.length === 0" style="opacity: 0"></span>
      <span v-for="(role, idx) of 吃子列表.top">{{ role }}</span>
      <!-- 最多15个 -->
    </div>

    <div class="wrap">
      <div class="qipan">
        <div class="走子提示" v-if="走子提示" :style="{ left: 走子提示[0].j * 50 + 'px', top: 走子提示[0].i * 50 + 'px' }"></div>
        <div class="走子提示" v-if="走子提示" :style="{ left: 走子提示[1].j * 50 + 'px', top: 走子提示[1].i * 50 + 'px' }"></div>

        <!-- 横 -->
        <div>
          <div class="h" v-for="i in 10" :style="{ top: `${(i - 1) * 50}px` }"></div>
        </div>

        <!-- 竖 -->
        <div>
          <div class="s" v-for="i in 9" :style="{ left: `${(i - 1) * 50}px` }"></div>
        </div>

        <div class="河"></div>

        <!-- 士 -->
        <div>
          <div class="士-1">
            <div class="士-h"></div>
            <div class="士-s"></div>
          </div>
          <div class="士-2">
            <div class="士-h"></div>
            <div class="士-s"></div>
          </div>
        </div>

        <!-- 炮 -->
        <div>
          <div>
            <div class="炮" style="top: 100px; left: 50px">
              <div v-for="i in 4"></div>
            </div>
            <div class="炮" style="top: 100px; left: 350px">
              <div v-for="i in 4"></div>
            </div>
            <div class="炮" :style="{ top: '150px', left: `${(i - 1) * 100}px` }" v-for="i in 5">
              <div v-for="i in 4"></div>
            </div>
          </div>
          <div>
            <div class="炮" style="top: 350px; left: 50px">
              <div v-for="i in 4"></div>
            </div>
            <div class="炮" style="top: 350px; left: 350px">
              <div v-for="i in 4"></div>
            </div>
            <div class="炮" :style="{ top: '300px', left: `${(i - 1) * 100}px` }" v-for="i in 5">
              <div v-for="i in 4"></div>
            </div>
          </div>
        </div>

        <div class="位置s">
          <template v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
            <div
              :class="[
                '位置',
                {
                  canMove: moves.find((item) => item.i === i && item.j === j),
                },
              ]"
              v-for="j in [0, 1, 2, 3, 4, 5, 6, 7, 8]"
              :style="{ top: `${i * 50}px`, left: `${j * 50}px` }"
              :i="i"
              :j="j"
            ></div>
          </template>
        </div>

        <div class="棋子s">
          <slot></slot>
        </div>
      </div>
    </div>

    <div class="吃子列表top 吃子列表bot">
      <span v-if="吃子列表.bot.length === 0" style="opacity: 0"></span>
      <span v-for="(role, idx) of 吃子列表.bot">{{ role }}</span>
    </div>
  </div>
</template>

<style>
.wrap {
  width: 400px;
  height: 450px;
  outline: 26px solid beige;
  box-shadow: 0px 0px 0px 35px var(--该你走了);
}
.qipan {
  user-select: none;
  position: relative;
}

.h {
  width: 400px;
  height: 1px;
  background-color: #999;
  position: absolute;
  left: 0;
}
.h:nth-child(5),
.h:nth-child(6) {
  height: 3px;
  background-color: #666;
}
.h:nth-child(6) {
  top: 248px !important;
}
.s {
  width: 1px;
  height: 450px;
  background-color: #999;
  position: absolute;
  top: 0;
}
.河 {
  width: 302px;
  height: 45px;
  background-color: white;
  position: absolute;
  left: 50px;
  top: 203px;
}
.士-1,
.士-2 {
  background-color: #6ce5fa;
  opacity: 0.3;
  position: absolute;
  width: 100px;
  aspect-ratio: 1;
  left: 151px;
}
.士-2 {
  top: 351px;
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
  border-top: 2px dashed var(--后手color);
}
.士-2 :is(.士-h, .士-s) {
  border-top: 2px dashed var(--先手color);
}

.炮 {
  position: absolute;
}
.炮 div {
  width: 10px;
  aspect-ratio: 1;
  border: 1px solid #111;
  margin: 3px;
  position: absolute;
}
.炮 div:nth-child(1) {
  border-right: none;
  border-bottom: none;
}
.炮 div:nth-child(2) {
  border-left: none;
  border-bottom: none;
  left: -16px;
}
.炮 div:nth-child(3) {
  border-right: none;
  border-top: none;
  top: -16px;
}
.炮 div:nth-child(4) {
  border-left: none;
  border-top: none;
  left: -16px;
  top: -16px;
}

.位置 {
  position: absolute;
  width: 30px;
  aspect-ratio: 1;
  translate: -50% -50%;
}
.吃子列表top {
  position: relative;
  display: flex;
  margin: 0 -35px;
  top: -40px;
  color: var(--bot_color);
}
.吃子列表bot {
  top: 40px;
  color: var(--top_color);
}
.吃子列表top span {
  border: 1px solid currentColor;
  border-radius: 50%;
  aspect-ratio: 1;
  width: 35px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -3px;
}
.container,
.container .棋子s .roles,
.container .吃子列表top {
  transform: rotate(var(--后手需要反转));
}

.走子提示 {
  width: 45px;
  border-radius: 50%;
  aspect-ratio: 1;
  /* 事件穿透 */
  pointer-events: none;
  translate: -50% -50%;
  position: absolute;
  z-index: 1;
  background: #1500fb;
  opacity: 0.5;
}
</style>

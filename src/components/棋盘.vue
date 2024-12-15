<script setup lang="ts">
import { moves } from '../move'
import { 走棋提示2 } from '../data'
</script>

<template>
  <div class="wrap">
    <div class="qipan">
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
        <template v-for="i in 10">
          <div
            :class="[
              '位置',
              {
                canMove: moves.find((item) => item.i === i - 1 && item.j === j - 1),
                走棋提示2: 走棋提示2.i === i - 1 && 走棋提示2.j === j - 1,
              },
            ]"
            v-for="j in 9"
            :style="{ top: `${(i - 1) * 50}px`, left: `${(j - 1) * 50}px` }"
            :i="i - 1"
            :j="j - 1"
          ></div>
        </template>
      </div>

      <div class="棋子s">
        <slot></slot>
      </div>
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
  height: 100px;
  left: 151px;
}
.士-2 {
  top: 351px;
}
.士-h {
  width: 140px;
  height: 1px;
  background-color: #000;
  transform: rotate(45deg);
  transform-origin: left;
}
.士-s {
  width: 140px;
  height: 1px;
  background-color: #000;
  transform: rotate(-45deg) translate(-69px, 69px);
  transform-origin: left;
}

.炮 {
  position: absolute;
}
.炮 div {
  width: 10px;
  height: 10px;
  border: 1px solid black;
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
  height: 30px;
  translate: -50% -50%;
}
</style>

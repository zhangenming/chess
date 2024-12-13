<script setup lang="ts">
import { computed } from 'vue'
import { positions, select, 回合, 先手, myColor } from './data'
import { moves } from './move'
import { getRoleType } from './utils'
import './online'
import { SEND } from './online'

function action({ target }) {
  if (!该你走了.value) return

  const i = Number(target.getAttribute('i'))
  const j = Number(target.getAttribute('j'))

  if (target.classList.contains('canMove')) {
    SEND('走', {
      old: [select.value.i, select.value.j],
      clicked: [i, j],
    })
  }

  select.value = undefined

  if (getRoleType(i, j) === myColor.value) {
    select.value = { i, j }
  }
}

const 该你走了 = computed(() => {
  return 回合.value % 2 === (先手.value ? 0 : 1)
})
</script>

<template>
  <template v-if="回合 === undefined"> 等待对手加入 </template>

  <template v-else>
    <div>回合: {{ 回合 }}</div>
    <div>该你走了: {{ 该你走了 }}</div>
    <div>先手: {{ 先手 }}</div>
    <div>myColor: {{ myColor }}</div>
  </template>

  <div class="app" :class="{ 该你走了, 先手 }" @click="action">
    <div class="flex" v-for="(line, i) of positions">
      <div class="item" v-for="(role, j) of line" :i :j>
        <div
          :class="{
            selected: i === select?.i && j === select?.j,
            canMove: moves.find((item) => item.i === i && item.j === j),
            [role.qz?.color]: role.qz,
            kong: !role.qz,
            jieCls: !role.qz?.showJie,
          }"
          :i
          :j
        >
          {{ role.qz && (role.qz.showJie ? role.qz.jie : '〇') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.app {
  border: 5px solid #eee;
}
.app.该你走了 {
  border: 5px solid green;
}
.app.先手 {
  transform: rotate(180deg);
}
.item {
  width: 50px;
  height: 50px;
  position: relative;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.先手 .item > div {
  transform: rotate(180deg);
}
.item::before {
  content: '';
  position: absolute;
  top: 25px;
  width: 50px;
  height: 1px;
  background: black;
}
.item::after {
  content: '';
  position: absolute;
  left: 25px;
  width: 1px;
  height: 50px;
  background: black;
}
.item[i='0']::after {
  height: 25px;
  top: 25px;
}
.item[i='4']::before {
  height: 2px;
}
.item[i='4'] {
  /* background: linear-gradient(180deg, #eee 0%, #ffffff 60%); */
}
.item[i='5'] {
  /* background: linear-gradient(180deg, #999 0%, #ffffff 50%); */
}
.item[i='4']:not([j='0'], [j='8'])::after {
  height: 25px;
  top: 0px;
}
.item[i='5']::before {
  height: 2px;
}
.item[i='5']:not([j='0'], [j='8'])::after {
  height: 25px;
  top: 25px;
}
.item[i='9']::after {
  height: 25px;
  top: 0;
}
.item[j='0']::before {
  width: 25px;
  left: 25px;
}

.item[j='8']::before {
  width: 25px;
  left: 0;
}

/* 炮位 */
.item[i='7'][j='7'],
.item[i='7'][j='1'],
.item[i='2'][j='1'],
.item[i='2'][j='7'] {
  /* background-color: #eee; */
}

.该你走了 .item:has(.black),
.canMove {
  cursor: pointer;
}
.item > div {
  z-index: 1;
}
.red,
.black {
  font-family: cursive;
  font-size: 35px;
  line-height: 1em;
  padding: 5px;
  border-radius: 50%;
  background: white;
  transition: border-width 0.3s;
}
.black {
  border: 1px solid black;
  color: black;
  font-weight: 900;
}
.red {
  border: 1px solid red;
  color: red;
}
.jieCls {
  color: #999;
}
.item .selected {
  border-width: 8px;
  z-index: 9;
}
.canMove.kong {
  background: black;
  width: 10px;
  height: 10px;
  padding: 5px;
  border: 10px solid white;
  border-radius: 50%;
}
.canMove.red::before {
  content: '';
  background: red;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid black;
}
</style>

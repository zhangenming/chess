import GoEasy from 'goeasy'
import { positions, 先手, 回合 } from './data'
if (location.search.includes('l')) {
  localStorage.setItem('my_channel', Math.random().toString())
}

const goEasy = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io', //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
  appkey: 'BC-c12db807824d4c98923bc16c498935bf', // common key,
  modules: ['pubsub'],
})

goEasy.connect({})

goEasy.pubsub.subscribe({
  channel: localStorage.getItem('my_channel'),
  onMessage: function ({ content }) {
    const msg = JSON.parse(content)
    console.log('收到', msg)

    if (msg.身份) {
      if (msg.身份 === 身份) {
        玩家1数据 = msg.身份
      } else {
        玩家2数据 = msg.身份
      }
      if (玩家1数据 && 玩家2数据) {
        SEND({ 游戏开始: 身份 })
      }
    }

    if (msg.游戏开始) {
      if (msg.游戏开始 === 身份) {
        console.log('我是房主 我先手')
        先手.value = 0
      } else {
        console.log('对手是房主 对手先手')
        先手.value = 1
      }
    }

    if (msg.走) {
      const clicked = positions[msg.走.r.i][msg.走.r.j]
      const old = positions[msg.走.l.i][msg.走.l.j]
      ;[clicked.qz, old.qz] = [old.qz, clicked.qz]
      回合.value++

      if (clicked.qz.showB === false) {
        clicked.qz.showB = true
      }
    }
  },
})

const 身份 = Math.random()
let 玩家1数据
let 玩家2数据

setTimeout(() => {
  SEND({
    身份,
  })
}, 111)

export async function SEND(data: any) {
  console.log('SEND', data)

  await new Promise((resolve) => setTimeout(resolve, 回合.value * 10))

  goEasy.pubsub.publish({
    channel: localStorage.getItem('my_channel'),
    message: JSON.stringify(data),
  })
}

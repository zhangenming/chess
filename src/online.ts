import GoEasy from 'goeasy'
import { positions, 先手, 回合 } from './data'

const goEasy = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io', //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
  appkey: 'BC-c12db807824d4c98923bc16c498935bf', // common key,
  modules: ['pubsub'],
})

goEasy.connect({})

goEasy.pubsub.subscribe({
  channel: 'my_channel',
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
        console.log('游戏开始')
        SEND({ 游戏开始: '游戏开始', 玩家1数据, 玩家2数据 })
      }
    }

    if (msg.游戏开始) {
      console.log('游戏开始', msg.玩家1数据, msg.玩家2数据)
      if (msg.玩家1数据 > msg.玩家2数据) {
        if (msg.玩家1数据 === 身份) {
          console.log('我赢了 我先手')
        } else {
          console.log('对手赢了 对手先手')
        }
        先手.value = msg.玩家1数据 === 身份 ? 0 : 1
      }
    }

    if (msg.走) {
      const clicked = positions[msg.走.r.i][msg.走.r.j]
      const old = positions[msg.走.l.i][msg.走.l.j]
      ;[clicked.qz, old.qz] = [old.qz, clicked.qz]
      回合.value++
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

export function SEND(data: any) {
  console.log('SEND', data)

  goEasy.pubsub.publish({
    channel: 'my_channel',
    message: JSON.stringify(data),
  })
}

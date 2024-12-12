import GoEasy from 'goeasy'
import { positions, 先手, 回合 } from './data'
if (location.search.includes('l')) {
  localStorage.setItem('大厅', Math.random().toString())
}

const 身份 = Number(localStorage.getItem('身份')) || 0
localStorage.setItem('身份', String(身份 + 1))

console.log('身份', 身份)

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: 'BC-c12db807824d4c98923bc16c498935bf',
  modules: ['pubsub'],
})

connect({ id: 身份 })

// 先判断大厅里有没有人

export async function SEND(channel: string, type: string, data: any) {
  console.log('SEND', type, data)

  await new Promise((resolve) => setTimeout(resolve, 回合.value * 10))

  pubsub.publish({
    channel,
    message: JSON.stringify({ type, data }),
  })
}

pubsub.hereNow({
  channel: '大厅',
  onSuccess({ content: { members } }) {
    console.log('members', members)
    if (members.length === 0) {
      console.log('第1个人第1次') // 第1个人第1次
      // 没人 我进入大厅 等待新玩家加入
      pubsub.subscribe({
        channel: '大厅',
        presence: {
          enable: true,
        },
        onMessage({ content }) {
          console.log('第1个人第2次')
          const { type, data } = JSON.parse(content)
          console.log('收到', type, data)

          if (type === '新玩家加入') {
            // 新玩家加入 我退出大厅 进入房间
            pubsub.unsubscribe({
              channel: '大厅',
              onSuccess() {},
            })
            pubsub.subscribe({
              channel: data,
              onMessage({ content }) {
                // 第1个人游戏逻辑
                const { type, data } = JSON.parse(content)
                console.log('收到', type, data)
              },
            })
          }
        },
      })
    }
    if (members.length === 1) {
      // 第2个人第1次
      // 已经有一个人 创建房间和他匹配开始游戏
      // 房间号 第一个人id+第二个人id
      const 房间号 = members[0].id + ':' + 身份

      // 第2个人进入房间
      pubsub.subscribe({
        channel: 房间号,
        onMessage({ content }) {
          // 第2个人游戏逻辑
          const { type, data } = JSON.parse(content)
          console.log('收到', type, data)
        },
      })

      // 通知第1个人 我来了 可以开始游戏(新玩家加入)
      SEND('大厅', '新玩家加入', 房间号)
    }
  },
})
// setTimeout(() => {
//   while (1) {
//     while (Date.now() % 10000 > 9000) {
//       return
//     }
//   }
// }, 3333)

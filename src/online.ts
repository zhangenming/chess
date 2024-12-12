import GoEasy from 'goeasy'
import { isMaster, positions, 先手, 回合 } from './data'

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: 'BC-c12db807824d4c98923bc16c498935bf',
  modules: ['pubsub'],
})

const 身份 = (() => {
  if (isMaster) {
    return 'master'
  } else {
    const 身份 = Number(localStorage.getItem('身份')) || 0
    localStorage.setItem('身份', String(身份 + 1))
    return 身份
  }
})()

connect({ id: 身份 })

console.log({ 身份 })

export async function SEND(channel: string, type: string, data: any) {
  console.log('SEND', type, data)

  await new Promise((resolve) => setTimeout(resolve, 回合.value * 10))

  pubsub.publish({
    channel,
    message: JSON.stringify({
      type,
      data,
    }),
  })
}

if (isMaster) {
  // todo 监听成员上下线
  setInterval(() => {
    pubsub.hereNow({
      channel: '大厅',
      onSuccess({ content: { members } }) {
        console.log(members)

        while (members.length >= 2) {
          const l = members.pop()
          const r = members.pop()
          SEND('大厅', '匹配成功', {
            ol房间号: `-${l.id}-${r.id}-`,
            ol先手: Math.max(l.id, r.id),
          })
        }
      },
    })
  }, 3000)
} else {
  pubsub.subscribe({
    channel: '大厅',
    presence: {
      enable: true,
    },
    onMessage({ content }) {
      const { type, data } = JSON.parse(content)
      console.log('接收', type, data)

      if (type === '匹配成功' && data.ol房间号.includes(`-${身份}-`)) {
        pubsub.unsubscribe({
          channel: '大厅',
          onSuccess() {},
        })
        pubsub.subscribe({
          channel: data.ol房间号,
          onMessage({ content }) {
            const { type, data } = JSON.parse(content)
            console.log('接收', type, data)
          },
        })

        先手.value = data.ol先手 === 身份
      }
    },
  })
}
// setTimeout(() => {
//   while (1) {
//     while (Date.now() % 10000 > 9000) {
//       return
//     }
//   }
// }, 3333)

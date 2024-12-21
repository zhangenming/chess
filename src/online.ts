import GoEasy from 'goeasy'
import { isMaster, isMe, is先手, 回合, 我的id, 对手id, isBoss, offline } from './data'
import { RECEIVE } from './gameTick'

let channel = '大厅'

const who = isMaster ? '主机' : `${我的id}[${Math.random().toFixed(2).slice(2)}]`

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: isBoss ? 'BC-c12db807824d4c98923bc16c498935bf' : 'BC-db04ee8988eb4f18b6b64f18afd33c40', // online2 : home
  modules: ['pubsub'],
})

connect({ id: who, data: { username: 我的id } })

// GoEasy
if (isMaster) {
  let memberA
  pubsub.subscribePresence({
    channel,
    onSuccess() {},
    onPresence({ action, member: memberB, members }) {
      console.log(action, memberB.id)
      if (action === 'join') {
        if (
          memberA &&
          members.find((e) => e.id === memberA.id) // 此时a可能已经离开
        ) {
          SEND('匹配成功', {
            ol_房间号: `${memberA.id}--VS--${memberB.id}`,
          })
          memberA = null
        } else {
          memberA = memberB
        }
      }
    },
  })
} else if (offline) {
  channel = 'offline_channel'
  pubsub.subscribe({
    channel,
    onMessage: RECEIVE,
  })
} else {
  pubsub.subscribe({
    channel,
    presence: {
      enable: true,
    },
    onMessage({ content }) {
      const { type, data } = JSON.parse(content)
      console.log('接收', type, data)

      if (type === '匹配成功' && data.ol_房间号.includes(who)) {
        pubsub.unsubscribe({
          channel,
          onSuccess() {},
        })

        channel = data.ol_房间号

        const [后手, 先手] = data.ol_房间号.split('--VS--')
        is先手.value = 先手 === who
        对手id.value = 先手 === who ? 后手 : 先手

        pubsub.subscribe({
          channel,
          presence: {
            enable: true,
          },
          onMessage: RECEIVE,
        })

        pubsub.subscribePresence({
          channel,
          onSuccess() {},
          onPresence({ action }) {
            if (action === 'timeout') {
              console.log('对方退出')
              if (!isMe) {
                alert('对方退出')
                // location.reload() //todo
              }
            }
          },
        })
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

//
//
//
export async function SEND(type: string, data = {}) {
  console.log('1 SEND', type, data)

  await new Promise((resolve) => setTimeout(resolve, 回合.value / 2))

  pubsub.publish({
    channel,
    message: JSON.stringify({
      type,
      data,
      time: Date.now(),
    }),
  })
}

import GoEasy from 'goeasy'
import { is先手, 对手id } from './data'
import { RECEIVE } from './gameTick'
import { isBoss, isMaster, isOne, 我的id } from './lib/constant'

let channel = '大厅'

const who = isMaster ? '主机' : `${我的id}[${Math.random().toFixed(2).slice(2)}]`

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: isBoss ? 'BC-0a3b4d5d90b6483d8ce63922db9671c7' : 'BC-719aadae85b7430c9e1d79edd47d2c10', // online2 : home
  modules: ['pubsub'],
})

connect({ id: who, data: { username: 我的id } })

//todo 重构 现在发一次 两个人会接受到消息. 重构成一个人接受

// GoEasy
if (isMaster) {
  console.log('isMaster')

  let memberA
  pubsub.subscribePresence({
    channel,
    onSuccess() {},
    onPresence({ action, member: memberB, members }) {
      console.log(action, memberB, memberB.id)
      if (action === 'join') {
        if (
          memberA &&
          members.find((e) => e.id === memberA.id) && // 此时a可能已经离开
          memberA.data.username != memberB.data.username
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
} else if (isOne) {
  channel = 'one_channel'
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
    onSuccess() {},
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
              document.querySelector<HTMLElement>('#popover')!.showPopover()
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
// 避免一个人走多个回合
export let 全局loading = false // todo remove

export async function SEND(type: string, data = {}) {
  console.log('1 SEND', type, data)

  // await new Promise((resolve) => setTimeout(resolve, 2444))

  全局loading = true
  setTimeout(() => {
    全局loading = false
  }, 500)

  pubsub.publish({
    channel,
    message: JSON.stringify({
      type,
      data,
      time: Date.now(),
    }),
  })
}

import GoEasy from 'goeasy'
import {
  isMaster,
  isMe,
  positions,
  is先手,
  回合,
  我的id,
  对手id,
  走棋提示1,
  走棋提示2,
  吃子列表,
  isBoss,
  offline,
  roles,
} from './data'
import { getItemRandom } from './utils'

let channel = '大厅'

export async function SEND(type: string, data: any) {
  console.log('SEND', type, data)

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

const who = isMaster ? '主机' : `${我的id}[${Math.random().toFixed(2).slice(2)}]`

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: isBoss ? 'BC-c12db807824d4c98923bc16c498935bf' : 'BC-db04ee8988eb4f18b6b64f18afd33c40', // online2 : home
  modules: ['pubsub'],
})

connect({ id: who, data: { username: 我的id } })

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
            ol房间号: `${memberA.id}--VS--${memberB.id}`,
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
    onMessage: gameTick,
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

      if (type === '匹配成功' && data.ol房间号.includes(who)) {
        pubsub.unsubscribe({
          channel,
          onSuccess() {},
        })

        channel = data.ol房间号

        const [后手, 先手] = data.ol房间号.split('--VS--')
        is先手.value = 先手 === who
        对手id.value = 先手 === who ? 后手 : 先手

        pubsub.subscribe({
          channel,
          presence: {
            enable: true,
          },
          onMessage: gameTick,
        })

        pubsub.subscribePresence({
          channel,
          onSuccess() {},
          onPresence({ action }) {
            if (action === 'timeout') {
              console.log('对方退出')
              if (!isMe) {
                alert('对方退出')
                location.reload()
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

function gameTick({ content }) {
  const { type, data, time } = JSON.parse(content) // 两个data
  console.log('接收', type, data)

  if (type === '走') {
    回合.value++

    const {
      old: [selectI, selectJ],
      clicked: [i, j],
      jie,
      jieEat,
    } = data

    const clicked = positions[i][j]
    const old = positions[selectI][selectJ]

    const { qz } = clicked
    if (qz) {
      吃子列表[qz.tb === 'top' ? 'bot' : 'top'].push(qz.jie || jieEat)
    }

    clicked.qz = {
      ...old.qz,
      jie: jie || old.qz.jie,
    }
    delete old.qz

    走棋提示1.value = { i, j }
    走棋提示2.value = { i: selectI, j: selectJ }

    console.log(+new Date() - time)
  }
}

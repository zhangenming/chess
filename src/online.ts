import GoEasy from 'goeasy'
import { isMaster, isMe, is先手, 回合, 我的id, 对手id, 走棋提示1, 走棋提示2, 吃子列表, isBoss, offline } from './data'
import { ij2item, 取反 } from './utils'

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

//
//
//
// gameTick
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

//todo 多步悔棋
const 悔棋数据 = []
// 两种思路
// 1. 可变数据 记录走棋数据，然后悔棋的时候，根据走棋数据，反向走棋
// 2. 不可变数据 时间旅行

function RECEIVE({ content }) {
  const { type, data, time } = JSON.parse(content)
  console.log('2 RECEIVE', +new Date() - time, type, data)
  console.log('\n')

  if (type === '走棋') {
    回合.value++

    // old -> clicked
    const { ol_起始棋子, ol_目标位置, ol_揭开暗子, ol_吃掉暗子 } = data

    const clicked = ij2item(ol_目标位置)
    const old = ij2item(ol_起始棋子)

    const { qz } = clicked
    if (qz) {
      吃子列表[取反(qz.tb)].push(qz.jie || ol_吃掉暗子)
    }

    clicked.qz = {
      ...old.qz,
      jie: ol_揭开暗子 || old.qz.jie,
    }
    delete old.qz

    悔棋数据.push(data)

    // todo refac 数据依附到棋盘上
    走棋提示1.value = ol_目标位置
    走棋提示2.value = ol_起始棋子
  }

  if (type === '发起悔棋') {
    //  clicked -> old
    const { ol_起始棋子, ol_目标位置, ol_揭开暗子, ol_吃掉暗子 } = 悔棋数据.pop()

    const clicked = ij2item(ol_目标位置)
    const old = ij2item(ol_起始棋子)

    // 1.走 暗子
    // 2.走
    // 3.吃
    // 4.吃 暗子
    old.qz = clicked.qz
    delete clicked.qz
  }
}

// setInterval(() => {
//   console.log({
//     走棋提示1: 走棋提示1.value,
//     走棋提示2: 走棋提示2.value,
//   })
// }, 1000)

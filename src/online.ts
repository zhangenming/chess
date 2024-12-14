import GoEasy from 'goeasy'
import { isMaster, isMe, positions, 先手, 回合, username, 对手 } from './data'

let channel = '大厅'
export async function SEND(type: string, data: any) {
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

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: 'BC-db04ee8988eb4f18b6b64f18afd33c40',
  modules: ['pubsub'],
})

const 随机id = Math.random().toFixed(2).slice(2)
const who = isMaster ? '主机' : `${username}[${随机id}]`

connect({ id: who, data: { username } })

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
            ol房间号: `${memberA.id}=VS=${memberB.id}`,
            ol先手: memberB.id,
          })
          memberA = null
        } else {
          memberA = memberB
        }
      }
    },
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

        pubsub.subscribe({
          channel,
          presence: {
            enable: true,
          },
          onMessage({ content }) {
            const { type, data } = JSON.parse(content) // 两个data
            console.log('接收', type, data)

            if (type === '走') {
              const {
                old: [selectI, selectJ],
                clicked: [i, j],
                jie,
              } = data

              const clicked = positions[i][j]
              const old = positions[selectI][selectJ]

              clicked.qz = {
                ...old.qz,
                jie: jie || old.qz.jie,
              }
              delete old.qz

              回合.value++
            }
          },
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

        const [olPlayerA, olPlayerB] = data.ol房间号.split('=VS=')
        对手.value = (olPlayerA === who ? olPlayerB : olPlayerA).slice(0, -4)
        先手.value = data.ol先手 === who
        回合.value = 0
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

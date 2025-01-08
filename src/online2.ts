import GoEasy from 'goeasy'
import { is先手, 对手id } from './data'
import { RECEIVE } from './gameTick'
import { isBoss, isMaster, isOne, 我的id } from './lib/constant'

const { connect, pubsub } = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io',
  appkey: isBoss ? 'BC-0a3b4d5d90b6483d8ce63922db9671c7' : 'BC-719aadae85b7430c9e1d79edd47d2c10', // online2 : home
  modules: ['pubsub'],
})

connect({
  id: isMaster ? '主机' : 我的id,
  // data: { username: 我的id },
})

pubsub.subscribe({
  channel: 'channel',
  presence: {
    enable: true,
  },
  onSuccess: function () {
    pubsub.subscribePresence({
      channel: 'channel',
      onSuccess: function () {
        //监听成功
        console.log('subscribe presence successfully.')
      },
      onFailed: function (error) {
        //监听失败
        console.log('Failed to subscribe presence, code:' + error.code + ',error:' + error.content)
      },
      onPresence: function (presenceEvent) {
        console.log('Presence events: ', presenceEvent)
      },
    })
  },
  onMessage: RECEIVE,
})

export let 全局loading = false // todo remove

export async function SEND(type: string, data = {}) {
  console.log('1 SEND', type, data)

  pubsub.publish({
    channel: 'channel',
    message: JSON.stringify({
      type,
      data,
      time: Date.now(),
    }),
  })
}

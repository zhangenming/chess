import GoEasy from 'goeasy'

const goEasy = GoEasy.getInstance({
  host: 'hangzhou.goeasy.io', //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
  appkey: 'BC-c12db807824d4c98923bc16c498935bf', // common key,
  modules: ['pubsub'],
})

goEasy.connect({})

goEasy.pubsub.subscribe({
  channel: 'my_channel',
  onMessage: function (message) {
    console.log(message)
  },
})

setTimeout(() => {
  goEasy.pubsub.publish({
    channel: 'my_channel',
    message: '123',
  })
}, 1333)

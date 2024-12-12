import { Client } from '@leancloud/play'

const client = new Client({
  appId: '2TLyMobqEWuwgiyTLaMNOLce-gzGzoHsz',
  appKey: '7skKyRM5qiwbBmIiM2xi7lMm',
  playServer: 'https://2tlymobq.lc-cn-n1-shared.com',
  userId: '234234',
  gameVersion: '0.0.1',
})
await client.connect()

// client.joinRandomRoom().then(console.log, console.log)

import { computed, reactive, ref } from 'vue'
import { getMyId, ij2item, qzA, qzB, raw } from './utils'
import { getQzMoves } from './move'

export const 回合 = ref(0)
export const is先手 = ref(true)
export const 对手id = ref()
export const 我的id = getMyId() // 非响应式

export const is我的回合 = computed(() => 回合.value % 2 === (is先手.value ? 0 : 1))
export const myBt = computed(() => (is先手.value ? 'bot' : 'top'))
export const drBt = computed(() => (is先手.value ? 'top' : 'bot'))

export const isMaster = location.search.includes('master')
export const isBoss = location.search.includes('boss')
export const isMe = location.search.includes('me')
export const offline = location.search.includes('offline')
export const buff = location.search.includes('buff')

export const 起始棋子 = ref('')

export const 走棋提示1 = ref('')
export const 走棋提示2 = ref('')

export const 吃子列表 = reactive<{
  top: string[]
  bot: string[]
}>({
  top: [],
  bot: [],
})

export const moves = computed(() => {
  const S = 起始棋子.value
  if (!S) return []

  return getQzMoves(ij2item(S)).filter((e) => {
    // 存在棋子 说明是吃 需要判断是敌人棋子
    if (e.qz) return e.qz.tb === drBt.value
    // 不存在棋子 说明是走 不需要判断
    return true
  })
})

type 位置 = {
  i: number
  j: number
}
type 棋子 = {
  idx: string
  role: string
  jie?: string
  tb: 'top' | 'bot'
}
type 位置with棋子 = 位置 & { qz: 棋子 }

export const roles = {
  top: qzA,
  bot: qzB,
}

export const positions = reactive(
  raw.map((line, i) =>
    line.map((r, j) => ({
      i,
      j,
      ...(r != '空' && {
        qz: {
          idx: `${i}-${j}`,
          role: r,
          jie: r === '帅' ? '帅' : '',
          tb: i < 5 ? ('top' as const) : ('bot' as const),
        },
      }),
    }))
  )
)
;(window as any).positions = positions

export const positionsFlat = positions.flat()
export const 所有棋子 = computed(() => {
  return positionsFlat.filter((p) => p.qz).sort((a, b) => a.qz.idx.localeCompare(b.qz.idx))
})
// 我
export const 我棋子 = computed(() => {
  return 所有棋子.value.filter((p) => p.qz.tb === myBt.value)
})
export const 我吃_敌我 = computed(() => {
  return 我棋子.value
    .map(getQzMoves)
    .flat()
    .filter((p) => p.qz)
})
export const 我吃_我 = computed(() => {
  return 我吃_敌我.value.filter((p) => p.qz.tb === myBt.value)
})
export const 我吃_敌 = computed(() => {
  return 我吃_敌我.value.filter((p) => p.qz.tb !== myBt.value)
})
export const 我吃敌_被保护 = computed(() => {
  return 我吃_敌.value.filter((p) => 敌吃_敌.value.includes(p))
})
export const 我吃敌_无保护 = computed(() => {
  return 我吃_敌.value.filter((p) => !敌吃_敌.value.includes(p))
})
// 敌
export const 敌棋子 = computed(() => {
  return 所有棋子.value.filter((p) => p.qz.tb !== myBt.value)
})
export const 敌吃_敌我 = computed(() => {
  return 敌棋子.value
    .map(getQzMoves)
    .flat()
    .filter((p) => p.qz)
})
export const 敌吃_敌 = computed(() => {
  return 敌吃_敌我.value.filter((p) => p.qz.tb !== myBt.value)
})
export const 敌吃我 = computed(() => {
  return 敌吃_敌我.value.filter((p) => p.qz.tb === myBt.value)
})
export const 敌吃我_被保护 = computed(() => {
  return 敌吃我.value.filter((p) => 我吃_我.value.includes(p))
})
export const 敌吃我_无保护 = computed(() => {
  return 敌吃我.value.filter((p) => !我吃_我.value.includes(p))
})

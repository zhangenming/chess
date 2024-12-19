import { computed, reactive, ref } from 'vue'
import { getMyId, stringIJ2棋子, qzA, qzB, raw } from './utils'
import { get棋子_可移动_位置 } from './move'

export const 回合 = ref(0)
export const is先手 = ref(true)
export const 对手id = ref()
export const 我的id = getMyId() // 非响应式

export const is我的回合 = computed(() => 回合.value % 2 === (is先手.value ? 0 : 1))
export const myTB = computed(() => (is先手.value ? 'bot' : 'top'))
export const drTB = computed(() => (is先手.value ? 'top' : 'bot'))

export const isMaster = location.search.includes('master')
export const isBoss = location.search.includes('boss')
export const isMe = location.search.includes('me')
export const offline = location.search.includes('offline')
export const buff = location.search.includes('buff')

export const 起始棋子 = ref<string>() // `${i}-${j}`// todo 棋子

export const 走子提示 = ref<[{ i: number; j: number }, { i: number; j: number }]>()

export const moves = computed(() => {
  const S = 起始棋子.value
  if (!S) return []

  return get棋子_可移动_位置(stringIJ2棋子(S)!)
})

export const 暗棋棋子 = {
  top: qzA,
  bot: qzB,
}

export type t棋子 = {
  tb: 'top' | 'bot'
  role: string
  jie: string
  deadIdx: number

  i: number
  j: number
  idx: string
}

export const 全部棋子 = [] as t棋子[]

export const 位置 = reactive(
  raw.map((line, i) =>
    line.map((role, j) => {
      if (role != '空') {
        全部棋子.push({
          tb: i < 5 ? 'top' : 'bot',
          role,
          jie: role === '帅' ? '帅' : '',
          deadIdx: 0, // 死亡顺序 0表示存活

          i,
          j,
          idx: `${i}-${j}`,
        })
      }
      return {
        i,
        j,
      }
    })
  )
)
export const 位置一维 = 位置.flat()

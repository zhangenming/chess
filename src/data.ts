import { computed, reactive, ref } from 'vue'
import { getMyId, stringIJ2棋子, raw, 位置2棋子 } from './utils'
import { get棋子_可移动_位置 } from './move'

export const 回合 = ref(0)
export const is先手 = ref(true)
export const 对手id = ref()
export const 我的id = getMyId() // 非响应式

export const is我的回合 = computed(() => 回合.value % 2 === (is先手.value ? 0 : 1))
export const isTop回合 = computed(() => 回合.value % 2 === 1)
export const isBot回合 = computed(() => 回合.value % 2 === 0)
export const myTB = computed(() => (is先手.value ? 'bot' : 'top'))
export const drTB = computed(() => (is先手.value ? 'top' : 'bot'))

export const isMaster = location.search.includes('master')
export const isBoss = location.search.includes('boss')
export const isMe = location.search.includes('me')
export const offline = location.search.includes('offline')
export const buff = location.search.includes('buff')

export const 起点位置 = ref<string>()

export const 走子提示 = ref<[string, string]>()

export const 可移动位置 = computed(() => {
  const S = 起点位置.value
  if (!S) return []

  const 棋子 = stringIJ2棋子(S)!
  return get棋子_可移动_位置(棋子).filter((位置) => 位置2棋子(位置)?.tb != 棋子.tb)
})

export type t棋子 = {
  tb: 'top' | 'bot'
  role: string
  jie: string
  deadIdx: number

  i: number
  j: number
}

const _所有棋子 = [] as t棋子[]
export const 所有位置 = reactive(
  raw.map((line, i) =>
    line.map((role, j) => {
      if (role != '空') {
        _所有棋子.push({
          tb: i < 5 ? 'top' : 'bot',
          role,
          jie: role === '帅' ? '帅' : '', // todo 〇
          deadIdx: 0, // 死亡顺序 0表示存活

          i,
          j,
        })
      }
      return {
        i,
        j,
      }
    })
  )
)
export const 所有棋子_生死 = reactive(_所有棋子)
export const 所有棋子_生 = computed(() => 所有棋子_生死.filter((p) => p.deadIdx === 0))

export const 所有位置一维 = 所有位置.flat()

// 我
export const 我棋子 = computed(() => {
  return 所有棋子_生.value.filter((p) => p.tb === myTB.value)
})
export const 我吃_敌我 = computed(() => {
  return 我棋子.value
    .map(get棋子_可移动_位置)
    .flat()
    .map(位置2棋子)
    .filter((e) => e !== undefined)
})
export const 我吃_我 = computed(() => {
  return 我吃_敌我.value.filter((p) => p.tb === myTB.value)
})
export const 我吃_敌 = computed(() => {
  return 我吃_敌我.value.filter((p) => p.tb !== myTB.value)
})
export const 我吃_敌_被保护 = computed(() => {
  return 我吃_敌.value.filter((p) => 敌吃_敌.value.includes(p))
})
export const 我吃_敌_无保护 = computed(() => {
  return 我吃_敌.value.filter((p) => !敌吃_敌.value.includes(p))
})

// 敌
export const 敌棋子 = computed(() => {
  return 所有棋子_生.value.filter((p) => p.tb !== myTB.value)
})
export const 敌吃_敌我 = computed(() => {
  return 敌棋子.value
    .map(get棋子_可移动_位置)
    .flat()
    .map(位置2棋子)
    .filter((e) => e !== undefined)
})
export const 敌吃_敌 = computed(() => {
  return 敌吃_敌我.value.filter((p) => p.tb !== myTB.value)
})
export const 敌吃_我 = computed(() => {
  return 敌吃_敌我.value.filter((p) => p.tb === myTB.value)
})
export const 敌吃_我_被保护 = computed(() => {
  return 敌吃_我.value.filter((p) => 我吃_我.value.includes(p))
})
export const 敌吃_我_无保护 = computed(() => {
  return 敌吃_我.value.filter((p) => !我吃_我.value.includes(p))
})
// 不完全 不会提示送子

export const is将军 = computed(() => {
  return 敌吃_我.value.some((p) => p.role === '帅')
})

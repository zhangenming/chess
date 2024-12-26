import { computed, reactive, ref, watch } from 'vue'
import { raw, 位置2棋子, qzA, qzB, clearLL, LL, hasFlag } from './utils'
import { get棋子_可走_位置, get棋子_可吃_位置 } from './move'
import type { 棋子, 位置 } from './type'
import { 走子提示 } from './gameTick'

export const 回合数 = ref(0)
export const is先手 = ref(true)
export const 对手id = ref()

export const is我的回合 = computed(() => 回合数.value % 2 === (is先手.value ? 0 : 1))
export const isTop回合 = computed(() => 回合数.value % 2 === 1)
export const isBot回合 = computed(() => 回合数.value % 2 === 0)
export const myTB = computed(() => (is先手.value ? 'bot' : 'top'))
export const drTB = computed(() => (is先手.value ? 'top' : 'bot'))
export const myIsTop = computed(() => myTB.value === 'top')

export const 上次点击位置 = ref<位置>()

export const 可移动位置 = computed(() => {
  const 棋子 = 位置2棋子(上次点击位置.value)
  if (!棋子) return []
  return get棋子_可走_位置(棋子, 所有位置一维).filter((位置) => 位置2棋子(位置)?.tb !== 棋子.tb)
})

export const 可移动位置2 = computed(() => {
  return []

  const 棋子 = 位置2棋子(上次点击位置.value)!
  return get棋子_可走_位置(棋子, 所有位置一维).filter((位置) => 位置2棋子(位置)?.tb === 棋子.tb)
})

const _base棋子 = [] as 棋子[]
export const 所有位置 = reactive(
  raw.map((line, i) =>
    line.map((role, j) => {
      if (role != '空') {
        _base棋子.push({
          tb: i < 5 ? 'top' : 'bot',
          role,
          jie: role === '帅' ? '帅' : '〇',

          deadIdx: 0, // 死亡顺序 0表示存活

          i,
          j,
        })
      }
      return {
        i,
        j,
        idx: `${i}${j}`,
      }
    })
  )
)
export const 所有位置一维 = 所有位置.flat()

export const 暗子牌库 = reactive({
  top: qzA,
  bot: qzB,
})

function is我棋子(棋子: undefined | 位置 | 棋子) {
  if (棋子 === undefined) return false
  if (!('tb' in 棋子)) 棋子 = 位置2棋子(棋子)
  if (棋子 === undefined) return false
  return (棋子 as 棋子).tb === myTB.value
}
function is敌棋子(棋子: undefined | 位置 | 棋子) {
  if (棋子 === undefined) return false
  if (!('tb' in 棋子)) 棋子 = 位置2棋子(棋子)
  if (棋子 === undefined) return false
  return (棋子 as 棋子).tb === drTB.value
}
function is生棋子(棋子: 棋子) {
  return 棋子.deadIdx === 0
}
function is死棋子(棋子: 棋子) {
  return !is生棋子(棋子)
}

export const base棋子 = reactive(_base棋子)
export const filt棋子_生 = computed(() => base棋子.filter(is生棋子))
export const filt棋子_死 = computed(() => base棋子.filter(is死棋子))

export const filt棋子_我 = computed(() => base棋子.filter(is我棋子))
export const filt棋子_我_死 = computed(() => filt棋子_我.value.filter(is死棋子))
export const filt棋子_我_生 = computed(() => filt棋子_我.value.filter(is生棋子))
export const filt棋子_我_生_吃 = computed(() =>
  filt棋子_我_生.value
    .map((棋子) => get棋子_可走_位置(棋子, 所有位置一维))
    .flat()
    .map(位置2棋子)
    .filter((e) => e !== undefined)
)
export const filt棋子_我_生_吃_我 = computed(() => filt棋子_我_生_吃.value.filter(is我棋子))
export const filt棋子_我_生_吃_敌 = computed(() => filt棋子_我_生_吃.value.filter(is敌棋子))
export const filt棋子_我_生_吃_敌_有保护 = computed(() => filt棋子_我_生_吃_敌.value.filter((p) => filt棋子_敌_生_吃_敌.value.includes(p)))
export const filt棋子_我_生_吃_敌_无保护 = computed(() => filt棋子_我_生_吃_敌.value.filter((p) => !filt棋子_敌_生_吃_敌.value.includes(p)))

// 敌
export const filt棋子_敌 = computed(() => base棋子.filter(is敌棋子))
export const filt棋子_敌_死 = computed(() => filt棋子_敌.value.filter(is死棋子))
export const filt棋子_敌_生 = computed(() => filt棋子_敌.value.filter(is生棋子))
export const filt棋子_敌_生_吃 = computed(() =>
  filt棋子_敌_生.value
    .map((棋子) => get棋子_可走_位置(棋子, 所有位置一维))
    .flat()
    .map(位置2棋子)
    .filter((e) => e !== undefined)
)
export const filt棋子_敌_生_吃_敌 = computed(() => filt棋子_敌_生_吃.value.filter(is敌棋子))
export const filt棋子_敌_生_吃_我 = computed(() => filt棋子_敌_生_吃.value.filter(is我棋子))
export const filt棋子_敌_生_吃_我_有保护 = computed(() => filt棋子_敌_生_吃_我.value.filter((p) => filt棋子_我_生_吃_我.value.includes(p)))
export const filt棋子_敌_生_吃_我_无保护 = computed(() => filt棋子_敌_生_吃_我.value.filter((p) => !filt棋子_我_生_吃_我.value.includes(p)))
// 不完全 不会提示送子

export const 我被将军 = computed(() => filt棋子_敌_生_吃_我.value.some((p) => p.role === '帅'))
export const 敌被将军 = computed(() => filt棋子_我_生_吃_敌.value.some((p) => p.role === '帅'))

export const 正在被吃 = computed(() => [...filt棋子_我_生_吃_敌.value, ...filt棋子_敌_生_吃_我.value])

export const top被将 = computed(() => 正在被吃.value.find((e) => e.role === '帅' && e.tb === 'top'))
export const bot被将 = computed(() => 正在被吃.value.find((e) => e.role === '帅' && e.tb === 'bot'))

export const 走棋信息 = ref('...')

export const 危险位置 = computed(() => filt棋子_敌_生.value.map((棋子) => get棋子_可吃_位置(棋子, 所有位置一维)).flat())
export const 安全位置 = computed(() =>
  filt棋子_我_生.value
    .filter(({ i, j }) => 上次点击位置.value?.i !== i || 上次点击位置.value?.j !== j)
    .map((棋子) => get棋子_可吃_位置(棋子, 所有位置一维))
    .flat()
)

export const 活棋子_我敌 = computed(() => base棋子.filter(is生棋子))
export const 我的活棋子 = computed(() => 活棋子_我敌.value.filter(is我棋子))
export const 敌的活棋子 = computed(() => 活棋子_我敌.value.filter(is敌棋子))

const 我可以吃的棋子 = computed(() => {
  const v_flags = filt棋子_敌_生_吃_敌.value
  return 我的活棋子.value.map((棋子) => {
    const 所有可吃棋子 = get棋子_可吃_位置(棋子, 所有位置一维).map(位置2棋子)
    const 吃空地 = 所有可吃棋子.filter((棋子) => !棋子)
    const 吃我 = 所有可吃棋子.filter(is我棋子) as 棋子[]
    const 吃敌 = 所有可吃棋子.filter(is敌棋子) as 棋子[]

    return {
      k: `${棋子.i}${棋子.j}`,

      // 所有可吃棋子,

      // 吃空地,

      // 吃我,

      吃敌,

      吃敌_有保护: 吃敌.filter((p) => v_flags.includes(p)),
      吃敌_无保护: 吃敌.filter((p) => !v_flags.includes(p)),
    }
  })
})

const 敌可以吃的棋子 = computed(() => {
  const v_flags = filt棋子_我_生_吃_我.value
  return 敌的活棋子.value.map((棋子) => {
    const 所有可吃棋子 = get棋子_可吃_位置(棋子, 所有位置一维).map(位置2棋子)
    const 吃我 = 所有可吃棋子.filter(is我棋子) as 棋子[]

    return {
      k: `${棋子.i}${棋子.j}`,
      吃我_有保护: 吃我.filter((p) => v_flags.includes(p)),
      吃我_无保护: 吃我.filter((p) => !v_flags.includes(p)),
    }
  })
})

setTimeout(() => {
  watch(
    回合数,
    () => {
      clearLL()

      // todo 主力

      hasFlag('d') &&
        敌可以吃的棋子.value.forEach(({ k: l, 吃我_有保护, 吃我_无保护 }) => {
          hasFlag('1') && 吃我_有保护.forEach((r) => LL(l, `${r.i}${r.j}`))
          hasFlag('2') && 吃我_无保护.forEach((r) => LL(l, `${r.i}${r.j}`, { size: 4 }))
        })

      hasFlag('w') &&
        我可以吃的棋子.value.forEach(({ k: l, 吃敌_有保护, 吃敌_无保护 }) => {
          hasFlag('1') && 吃敌_有保护.forEach((r) => LL(l, `${r.i}${r.j}`, { color: 'green' }))
          hasFlag('2') && 吃敌_无保护.forEach((r) => LL(l, `${r.i}${r.j}`, { color: 'green', size: 4 }))
        })

      if (走子提示.value) {
        const [l, r] = 走子提示.value
        LL(
          //
          `${l.i}${l.j}`,
          `${r.i}${r.j}`,
          {
            color: '#1500fb',
            path: 'straight',
            size: 5,
            dash: { animation: true, len: 10, gap: 3 },
          }
        )
      }
    },
    {
      immediate: true,
    }
  )
})

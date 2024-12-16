import { computed, reactive, ref, watch } from 'vue'
import { getMyId, qzA, qzB, raw, shuffle } from './utils'
import { getQzMoves } from './move'

export const rolesA = shuffle(qzA)
export const rolesB = shuffle(qzB)

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

export const select = ref<{ i: number; j: number }>()

export const 走棋提示1 = ref({ i: -1, j: -1 })
export const 走棋提示2 = ref({ i: -1, j: -1 })

export const 吃子列表 = reactive<{
  top: string[]
  bot: string[]
}>({
  top: ['x', 'y'],
  bot: [],
})

export const moves = computed(() => {
  const S = select.value
  if (!S) return []

  return getQzMoves(S)
})

export const allQz = computed(() => {
  return positionsFlat.filter((p) => p.qz)
})
// export const allQz2 = () => positions.flat().filter((p) => p.qz)

export const allMyQz = computed(() => {
  return allQz.value.filter((p) => p.qz.tb === myBt.value)
})
export const allDrQz = computed(() => {
  return allQz.value.filter((p) => p.qz.tb !== myBt.value)
})

console.log(allMyQz.value.map(getQzMoves))
console.log(allDrQz.value.map(getQzMoves))

import { computed, reactive, ref, watch } from 'vue'
import { getArrItemRandom, shuffle } from './utils'

const raw = [
  ['车', '马', '象', '士', '帅', '士', '象', '马', '车'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['卒', '空', '卒', '空', '空', '空', '卒', '空', '卒'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['卒', '空', '卒', '空', '空', '空', '卒', '空', '卒'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['车', '马', '象', '士', '帅', '士', '象', '马', '车'],
]

export const rolesA = shuffle([
  '士',
  '卒',
  '马',
  '卒',
  '车',
  '象',
  '车',
  '炮',
  '炮',
  '卒',
  '马',
  '卒',
  '士',
  '象',
  '卒',
])
export const rolesB = shuffle([
  '卒',
  '车',
  '炮',
  '卒',
  '马',
  '象',
  '车',
  '炮',
  '卒',
  '卒',
  '士',
  '卒',
  '马',
  '象',
  '士',
])

export const positions = reactive(
  raw.map((line, i) =>
    line.map((r, j) => ({
      i,
      j,
      ...(r != '空' && {
        qz: {
          idx: `${i}-${j}`,
          role: r,
          jie: r === '帅' ? '帅' : '', //getArrItemRandom(i < 5 ? rolesA : rolesB),
          tb: i < 5 ? ('top' as const) : ('bot' as const),
        },
      }),
    }))
  )
)
;(window as any).positions = positions

export const positionsFlat = positions.flat()

export const select = ref<{ i: number; j: number }>()

export const role = computed(() => select.value && positions[select.value[0]][select.value[1]])

export const 回合 = ref<number | undefined>(undefined)
export const 先手 = ref(false)

export const myBt = computed(() => (先手.value ? 'bot' : 'top'))
export const drBt = computed(() => (先手.value ? 'top' : 'bot'))

export const isMaster = location.search.includes('master')
export const isMe = location.search.includes('me')

export const username =
  [...new URLSearchParams(location.search).keys()].filter((k) => !['me', 'master'].includes(k))[0] ||
  (() => {
    const username = localStorage.getItem('username') || Math.random().toFixed(4).slice(2)
    localStorage.setItem('username', username)
    return username
  })()

export const 对手 = ref('')

export const 走棋提示1 = ref({ i: -1, j: -1 })
export const 走棋提示2 = ref({ i: -1, j: -1 })

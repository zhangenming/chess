import { computed, reactive, ref, watch } from 'vue'
import { getArrItemRandom } from './utils'

const raw = [
  ['车', '马', '象', '士', '帅', '士', '象', '马', '车'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['卒', '空', '卒', '空', '卒', '空', '卒', '空', '卒'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['卒', '空', '卒', '空', '卒', '空', '卒', '空', '卒'],
  ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
  ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
  ['车', '马', '象', '士', '帅', '士', '象', '马', '车'],
]

const rolesA = ['士', '卒', '马', '卒', '车', '象', '车', '炮', '炮', '卒', '马', '卒', '士', '象', '卒']

const rolesB = [...rolesA]

export const positions = reactive(
  raw.map((line, i) =>
    line.map((r, j) => ({
      i,
      j,
      ...(r != '空' && {
        qz: {
          role: r,
          roleB: r === '帅' ? '帅' : getArrItemRandom(i < 5 ? rolesA : rolesB),
          showB: false,
          color: i < 5 ? ('red' as const) : ('black' as const),
        },
      }),
    }))
  )
)

export const positionsFlat = positions.flat()

export const select = ref<{ i: number; j: number }>()

export const role = computed(() => select.value && positions[select.value[0]][select.value[1]])

// pro plus max utral
// 帅也随机 暗器

export const 回合 = ref(0)
export const 先手 = ref()

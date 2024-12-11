import { computed, reactive, ref, watch } from 'vue'

export const positions = reactive(
  [
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
  ].map((line, i) =>
    line.map((role, j) => ({
      i,
      j,
      ...(role != '空' && {
        qz: {
          role,
          color: i < 5 ? 'red' : 'black',
        } as {
          role: string
          color: 'red' | 'black'
        },
      }),
    }))
  )
)

export const positionsFlat = positions.flat()

export const select = ref<{ i: number; j: number }>()

export const role = computed(() => select.value && positions[select.value[0]][select.value[1]])

watch(select, (v) => {
  console.log('select change', v)
})

import { computed, reactive, ref } from 'vue'

export const positions = reactive(
  [
    ['车', '马', '象', '仕', '帅', '仕', '象', '马', '车'],
    ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
    ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
    ['兵', '空', '兵', '空', '兵', '空', '兵', '空', '兵'],
    ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
    ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
    ['兵', '空', '兵', '空', '兵', '空', '兵', '空', '兵'],
    ['空', '炮', '空', '空', '空', '空', '空', '炮', '空'],
    ['空', '空', '空', '空', '空', '空', '空', '空', '空'],
    ['车', '马', '象', '仕', '帅', '仕', '象', '马', '车'],
  ].map((line, i) => line.map((role, j) => ({ role, i, j })))
)
export const positionsFlat = positions.flat()

export const select = ref<{ i: number; j: number }>()

export const role = computed(() => select.value && positions[select.value[0]][select.value[1]])

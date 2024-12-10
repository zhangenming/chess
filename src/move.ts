import { computed } from 'vue'
import { roles, select } from './data'

export const moves = computed(() => {
  if (!select.value) return []

  const [i, j] = select.value

  const 空 = roles
    .map((line, i) => line.map((role, j) => ({ i, j, role })))
    .flat()
    .filter((item) => item.role === '空')
  // todo 炮可以翻墙打

  const role = roles[i][j]

  if (role === '军') {
    const 可移动位置2 = 空.filter((item) => item.j === j || item.i === i)
    return 可移动位置2
  }
  if (role === '兵') {
    const 可移动位置2 = 空.filter((item) => item.j === j || item.i === i).filter((item) => 距离({ i, j }, item) === 1)
    return 可移动位置2
  }
  if (role === '帅') {
    const 可移动位置2 = 空.filter((item) => item.j === j || item.i === i).filter((item) => 距离({ i, j }, item) === 1)
    return 可移动位置2
  }

  return []
})

function 距离({ i: i1, j: j1 }: { i: number; j: number }, { i: i2, j: j2 }: { i: number; j: number }) {
  return Math.abs(i1 - i2) + Math.abs(j1 - j2)
}

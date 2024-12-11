import { computed, watch } from 'vue'
import { roles, select } from './data'

export const moves = computed(() => {
  const x = select.value
  if (!x) return []

  const role = roles[x.i][x.j]

  if (role.role === '军') {
    return [
      ...军可移动位置(get下侧全部棋子(x), x),
      ...军可移动位置(get上侧全部棋子(x), x),
      ...军可移动位置(get右侧全部棋子(x), x),
      ...军可移动位置(get左侧全部棋子(x), x),
    ]
  }
  if (role.role === '兵') {
    return [get下侧全部棋子(x)[0], get上侧全部棋子(x)[0], get右侧全部棋子(x)[0], get左侧全部棋子(x)[0]].filter(
      (e) => e?.role === '空'
    )
  }
  if (role.role === '帅') {
  }

  return []
})

watch(moves, (moves) => {
  console.log(moves)
})

type 位置 = { i: number; j: number }
function 距离(a: 位置, b: 位置) {
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j)
}

function get左侧全部棋子({ i, j }: 位置) {
  return roles[i].slice(0, j).reverse()
}

function get右侧全部棋子({ i, j }: 位置) {
  return roles[i].slice(j + 1)
}

function get上侧全部棋子({ i, j }: 位置) {
  return roles
    .slice(0, i)
    .map((line) => line[j])
    .reverse()
}

function get下侧全部棋子({ i, j }: 位置) {
  return roles.slice(i + 1).map((line) => line[j])
}

function 军可移动位置(datas: { i: number; j: number; role: string }[], x: 位置) {
  return datas.filter((item) => item.role === '空').filter((item, i) => 距离(x, item) === i + 1)
}

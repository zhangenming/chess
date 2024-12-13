import { computed } from 'vue'
import { drColor, myColor, positions, positionsFlat, select, 先手 } from './data'
import { get下侧全部棋子, get上侧全部棋子, get右侧全部棋子, get左侧全部棋子, 距离i, 距离j, 距离 } from './utils'
import type { coord } from './utils'

const _moves = computed(() => {
  const x = select.value
  if (!x) return []

  const { role: _r, showJie, jie } = positions[x.i][x.j].qz
  const role = showJie ? jie : _r

  if (role === '车') {
    return [
      ...军可移动位置(get下侧全部棋子(x), x),
      ...军可移动位置(get上侧全部棋子(x), x),
      ...军可移动位置(get右侧全部棋子(x), x),
      ...军可移动位置(get左侧全部棋子(x), x),
    ]
  }

  if (role === '马') {
    return positionsFlat
      .filter((p) => (距离i(x, p) === 1 && 距离j(x, p) === 2) || (距离i(x, p) === 2 && 距离j(x, p) === 1))
      .filter(({ i, j }) => {
        if (i - x.i === 2) {
          return get下侧全部棋子(x)[0].qz === undefined
        }
        if (i - x.i === -2) {
          return get上侧全部棋子(x)[0].qz === undefined
        }
        if (j - x.j === 2) {
          return get右侧全部棋子(x)[0].qz === undefined
        }
        if (j - x.j === -2) {
          return get左侧全部棋子(x)[0].qz === undefined
        }
        console.error('马')
      })
  }

  if (role === '炮') {
    return [
      ...炮可移动位置(get下侧全部棋子(x)),
      ...炮可移动位置(get上侧全部棋子(x)),
      ...炮可移动位置(get右侧全部棋子(x)),
      ...炮可移动位置(get左侧全部棋子(x)),
    ]
  }

  if (role === '象') {
    return positionsFlat
      .filter((p) => 距离i(x, p) === 2 && 距离j(x, p) === 2)
      .filter(({ i, j }) => {
        if (i - x.i === 2 && j - x.j === 2) {
          return positions[x.i + 1][x.j + 1].qz === undefined
        }
        if (i - x.i === -2 && j - x.j === -2) {
          return positions[x.i - 1][x.j - 1].qz === undefined
        }
        if (i - x.i === 2 && j - x.j === -2) {
          return positions[x.i + 1][x.j - 1].qz === undefined
        }
        if (i - x.i === -2 && j - x.j === 2) {
          return positions[x.i - 1][x.j + 1].qz === undefined
        }
        console.error('象')
      })
  }

  if (role === '士') {
    return positionsFlat
      .filter((p) => 距离i(x, p) === 1 && 距离j(x, p) === 1)
      .filter(({ j }) => {
        if (showJie) return true
        return j === 3 || j === 4 || j === 5
      })
  }

  if (role === '卒') {
    return 先手.value
      ? [get下侧全部棋子(x)[0], ...(x.i > 4 ? [get右侧全部棋子(x)[0], get左侧全部棋子(x)[0]] : [])]
      : [get上侧全部棋子(x)[0], ...(x.i < 5 ? [get右侧全部棋子(x)[0], get左侧全部棋子(x)[0]] : [])]
  }

  if (role === '帅') {
    return positionsFlat
      .filter((p) => (距离i(x, p) === 1 && 距离j(x, p) === 0) || (距离i(x, p) === 0 && 距离j(x, p) === 1))
      .filter(({ i, j }) => (j === 3 || j === 4 || j === 5) && (i === 7 || i === 8 || i === 9))
  }

  console.error('move')
})

export const moves = computed(() => {
  return _moves.value.filter((p) => p && p.qz?.color !== myColor.value)
})

function 军可移动位置(datas: { i: number; j: number; qz?: { role: string; color: string } }[], x: coord) {
  let meetDr = false
  return datas
    .filter((item) => {
      if (meetDr) return false
      if (!item.qz) return true
      if (!meetDr && item.qz.color === drColor.value) {
        meetDr = true
        return true
      }
    })
    .filter((item, i) => 距离(x, item) === i + 1)
}

function 炮可移动位置(datas: { i: number; j: number; qz?: { role: string; color: string } }[]) {
  let 炮架 = false
  let 找到目标 = false
  return datas.filter((item) => {
    if (!炮架 && !item.qz) return true
    if (炮架 && item.qz && !找到目标) {
      找到目标 = true
      return true
    }
    if (item.qz) {
      炮架 = true
    }
  })
}

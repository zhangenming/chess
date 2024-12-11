import { computed } from 'vue'
import { positions, positionsFlat, select } from './data'
import { get下侧全部棋子, get上侧全部棋子, get右侧全部棋子, get左侧全部棋子, 距离i, 距离j, 距离 } from './utils'
import type { coord } from './utils'

const _moves = computed(() => {
  const x = select.value
  if (!x) return []

  const { role: _r, showB, roleB } = positions[x.i][x.j].qz
  const role = showB ? roleB : _r

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
      .filter((p) => {
        if (p.i - x.i === 2) {
          return get下侧全部棋子(x)[0].qz === undefined
        }
        if (p.i - x.i === -2) {
          return get上侧全部棋子(x)[0].qz === undefined
        }
        if (p.j - x.j === 2) {
          return get右侧全部棋子(x)[0].qz === undefined
        }
        if (p.j - x.j === -2) {
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
      .filter((p) => {
        if (p.i - x.i === 2 && p.j - x.j === 2) {
          return positions[x.i + 1][x.j + 1].qz === undefined
        }
        if (p.i - x.i === -2 && p.j - x.j === -2) {
          return positions[x.i - 1][x.j - 1].qz === undefined
        }
        if (p.i - x.i === 2 && p.j - x.j === -2) {
          return positions[x.i + 1][x.j - 1].qz === undefined
        }
        if (p.i - x.i === -2 && p.j - x.j === 2) {
          return positions[x.i - 1][x.j + 1].qz === undefined
        }
        console.error('象')
      })
  }

  if (role === '士') {
    return positionsFlat.filter((p) => 距离i(x, p) === 1 && 距离j(x, p) === 1)
  }

  if (role === '卒') {
    return [get上侧全部棋子(x)[0], ...(x.i < 5 ? [get右侧全部棋子(x)[0], get左侧全部棋子(x)[0]] : [])]
  }

  if (role === '帅') {
    return positionsFlat
      .filter((p) => (距离i(x, p) === 1 && 距离j(x, p) === 0) || (距离i(x, p) === 0 && 距离j(x, p) === 1))
      .filter((e) => (e.j === 3 || e.j === 4 || e.j === 5) && (e.i === 7 || e.i === 8 || e.i === 9))
  }

  console.error('move')
})

export const moves = computed(() => {
  return _moves.value.filter((p) => p && p.qz?.color !== 'black')
})

function 军可移动位置(datas: { i: number; j: number; qz?: { role: string; color: string } }[], x: coord) {
  let meetRed = false
  return datas
    .filter((item) => {
      if (meetRed) return false
      if (!item.qz) return true
      if (!meetRed && item.qz.color === 'red') {
        meetRed = true
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

import { computed } from 'vue'
import { positions, positionsFlat, select } from './data'

const _moves = computed(() => {
  const x = select.value
  if (!x) return []

  const role = positions[x.i][x.j].qz.role

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

  // 不局限左右后退
  if (role === '卒') {
    return [get下侧全部棋子(x)[0], get上侧全部棋子(x)[0], get右侧全部棋子(x)[0], get左侧全部棋子(x)[0]]
  }

  // 不局限九宫格
  if (role === '帅') {
    return positionsFlat.filter(
      (p) => (距离i(x, p) === 1 && 距离j(x, p) === 0) || (距离i(x, p) === 0 && 距离j(x, p) === 1)
    )
  }

  console.error('move')
})
export const moves = computed(() => {
  return _moves.value.filter((p) => p && p.qz?.color !== 'black')
})

type 位置 = { i: number; j: number }
function 距离(a: 位置, b: 位置) {
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j)
}
function 距离i(a: 位置, b: 位置) {
  return Math.abs(a.i - b.i)
}
function 距离j(a: 位置, b: 位置) {
  return Math.abs(a.j - b.j)
}

function get左侧全部棋子({ i, j }: 位置) {
  return positions[i].slice(0, j).reverse()
}

function get右侧全部棋子({ i, j }: 位置) {
  return positions[i].slice(j + 1)
}

function get上侧全部棋子({ i, j }: 位置) {
  return positions
    .slice(0, i)
    .map((line) => line[j])
    .reverse()
}

function get下侧全部棋子({ i, j }: 位置) {
  return positions.slice(i + 1).map((line) => line[j])
}

function 军可移动位置(datas: { i: number; j: number; qz?: { role: string; color: string } }[], x: 位置) {
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
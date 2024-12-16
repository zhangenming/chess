import { positions } from './data'

export const raw = [
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

export const qzA = ['车', '车', '马', '马', '象', '象', '士', '士', '炮', '炮', '帅', '卒', '卒', '卒', '卒', '卒']
export const qzB = ['车', '车', '马', '马', '象', '象', '士', '士', '炮', '炮', '帅', '卒', '卒', '卒', '卒', '卒']

export type coord = { i: number; j: number }

export function 距离(a: coord, b: coord) {
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j)
}
export function 距离i(a: coord, b: coord) {
  return Math.abs(a.i - b.i)
}
export function 距离j(a: coord, b: coord) {
  return Math.abs(a.j - b.j)
}

export function get左侧全部位置({ i, j }: coord) {
  return positions[i].slice(0, j).reverse()
}

export function get右侧全部位置({ i, j }: coord) {
  return positions[i].slice(j + 1)
}

export function get上侧全部位置({ i, j }: coord) {
  return positions
    .slice(0, i)
    .map((line) => line[j])
    .reverse()
}

export function get下侧全部位置({ i, j }: coord) {
  return positions.slice(i + 1).map((line) => line[j])
}

export function getRoleType(i: number, j: number) {
  const { qz } = positions[i][j]
  if (!qz) return 'empty'

  return qz.tb
}

// 删除选中的元素 防止下次继续选中
export function getArrItemRandom<T>(arr: T[]) {
  const index = 0 // Math.floor(Math.random() * arr.length)
  const item = arr[index]
  arr.splice(index, 1)
  return item
}

// 洗牌算法
export function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function getMyId() {
  return (
    [...new URLSearchParams(location.search).keys()].filter((k) => !['master', 'boss', 'me'].includes(k))[0] ||
    (() => {
      const username = localStorage.getItem('username') || Math.random().toFixed(4).slice(2)
      localStorage.setItem('username', username)
      return username
    })()
  )
}

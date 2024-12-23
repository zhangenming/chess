import { type t棋子, 所有位置, filt棋子_生, 暗子牌库 } from './data'

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

export const qzA = ['车', '车', '马', '马', '象', '象', '士', '士', '炮', '炮', '卒', '卒', '卒', '卒', '卒']
export const qzB = ['车', '车', '马', '马', '象', '象', '士', '士', '炮', '炮', '卒', '卒', '卒', '卒', '卒']

export type 位置or棋子 = { i: number; j: number }

export function 距离(a: 位置or棋子, b: 位置or棋子) {
  return Math.abs(a.i - b.i) + Math.abs(a.j - b.j)
}
export function 距离i(a: 位置or棋子, b: 位置or棋子) {
  return Math.abs(a.i - b.i)
}
export function 距离j(a: 位置or棋子, b: 位置or棋子) {
  return Math.abs(a.j - b.j)
}

export function get左侧位置({ i, j }: 位置or棋子): 位置or棋子 | undefined {
  return 所有位置[i]?.[j - 1]
}
export function get右侧位置({ i, j }: 位置or棋子): 位置or棋子 | undefined {
  return 所有位置[i]?.[j + 1]
}
export function get上侧位置({ i, j }: 位置or棋子): 位置or棋子 | undefined {
  return 所有位置[i - 1]?.[j]
}
export function get下侧位置({ i, j }: 位置or棋子): 位置or棋子 | undefined {
  return 所有位置[i + 1]?.[j]
}

export function get左侧全部位置({ i, j }: 位置or棋子) {
  return 所有位置[i].slice(0, j).reverse()
}
export function get右侧全部位置({ i, j }: 位置or棋子) {
  return 所有位置[i].slice(j + 1)
}
export function get上侧全部位置({ i, j }: 位置or棋子) {
  return 所有位置
    .slice(0, i)
    .map((line) => line[j])
    .reverse()
}
export function get下侧全部位置({ i, j }: 位置or棋子) {
  return 所有位置.slice(i + 1).map((line) => line[j])
}

// 保证每次取数据都是随机的(添加到时候不必在意 直接添加就好)保证悔完棋的时候随机
export function get暗棋Random(棋子: t棋子) {
  // return 棋子.role

  return shuffle(暗子牌库[棋子.tb])[0] // 这个是单人逻辑 为了保持数据一致性 在双人逻辑处做数据删除处理

  // 洗牌算法 原地修改
  function shuffle<T>(arr: T[]) {
    arr = [...arr]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }
}

export function getMyId() {
  return (
    new URLSearchParams(location.search).get('id') ||
    (() => {
      const username = localStorage.getItem('username') || Math.random().toFixed(4).slice(2)
      localStorage.setItem('username', username)
      return username
    })()
  )
}

export function test(bool: any, text: any) {
  if (bool) {
    console.error(text)
  }
}
export function 位置2棋子(位置or棋子: 位置or棋子 | undefined): t棋子 | undefined {
  return 位置or棋子 && filt棋子_生.value.find((e) => e.i === 位置or棋子.i && e.j === 位置or棋子.j)
}

export function stringIJ2棋子(s: string): t棋子 | undefined {
  const [i, j] = s.split('-').map((e) => Number(e))
  return filt棋子_生.value.find((e) => e.i === i && e.j === j)
}

export function 取反(tb: 'top' | 'bot') {
  if (tb === 'top') return 'bot'
  if (tb === 'bot') return 'top'
  throw new Error('取反失败')
}

export function deleteItem<T>(arr: T[], item: T) {
  const index = arr.indexOf(item)
  if (index > -1) arr.splice(index, 1)
}

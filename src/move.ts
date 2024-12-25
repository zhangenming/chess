import type { 棋子, 位置 } from './type'
import {
  get上侧位置,
  get下侧位置,
  get右侧位置,
  get左侧位置,
  get下侧全部位置,
  get上侧全部位置,
  get右侧全部位置,
  get左侧全部位置,
  距离i,
  距离j,
  距离,
  位置2棋子,
  get棋子role,
} from './utils'

function 行动_位置(棋子: 棋子, 行动: '走' | '吃' = '走', 所有位置一维: 位置[]): 位置[] {
  const role = get棋子role(棋子)

  if (role === '马') {
    return 所有位置一维
      .filter((p) => (距离i(棋子, p) === 1 && 距离j(棋子, p) === 2) || (距离i(棋子, p) === 2 && 距离j(棋子, p) === 1))
      .filter(({ i, j }) => {
        if (i - 棋子.i === 2) {
          return !位置2棋子(get下侧位置(棋子))
        }
        if (i - 棋子.i === -2) {
          return !位置2棋子(get上侧位置(棋子))
        }
        if (j - 棋子.j === 2) {
          return !位置2棋子(get右侧位置(棋子))
        }
        if (j - 棋子.j === -2) {
          return !位置2棋子(get左侧位置(棋子))
        }
      })
  }

  if (role === '象') {
    return 所有位置一维
      .filter((p) => 距离i(棋子, p) === 2 && 距离j(棋子, p) === 2)
      .filter(({ i, j }) => {
        if (i === 棋子.i + 2 && j === 棋子.j + 2) {
          return !位置2棋子({ i: 棋子.i + 1, j: 棋子.j + 1 })
        }
        if (i === 棋子.i - 2 && j === 棋子.j - 2) {
          return !位置2棋子({ i: 棋子.i - 1, j: 棋子.j - 1 })
        }
        if (i === 棋子.i + 2 && j === 棋子.j - 2) {
          return !位置2棋子({ i: 棋子.i + 1, j: 棋子.j - 1 })
        }
        if (i === 棋子.i - 2 && j === 棋子.j + 2) {
          return !位置2棋子({ i: 棋子.i - 1, j: 棋子.j + 1 })
        }
      })
  }

  if (role === '士') {
    return 所有位置一维
      .filter((p) => 距离i(棋子, p) === 1 && 距离j(棋子, p) === 1)
      .filter(({ j }) => {
        if (棋子.jie !== '〇') return true
        return j === 3 || j === 4 || j === 5
      })
  }

  if (role === '车') {
    return [
      ...filter军可移动位置(get下侧全部位置(棋子)),
      ...filter军可移动位置(get上侧全部位置(棋子)),
      ...filter军可移动位置(get右侧全部位置(棋子)),
      ...filter军可移动位置(get左侧全部位置(棋子)),
    ]
  }

  if (role === '炮') {
    return [
      ...filter炮可移动位置(get下侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get上侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get右侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get左侧全部位置(棋子), 行动),
    ]
  }

  if (role === '卒') {
    return 所有位置一维
      .filter((p) => 距离(棋子, p) === 1)
      .filter(({ i, j }) => (棋子.tb === 'top' ? 棋子.i <= i : 棋子.i >= i))
      .filter(({ i, j }) => {
        const 已经过河 = 棋子.tb === 'top' ? i > 4 : i < 5
        if (已经过河) {
          return true
        } else {
          return 棋子.j === j
        }
      })
  }

  if (role === '帅') {
    const 九宫 = 所有位置一维
      .filter((p) => (距离i(棋子, p) === 1 && 距离j(棋子, p) === 0) || (距离i(棋子, p) === 0 && 距离j(棋子, p) === 1))
      .filter(({ i, j }) => (j === 3 || j === 4 || j === 5) && (i === 0 || i === 1 || i === 2 || i === 7 || i === 8 || i === 9))

    const 敌方帅 = (() => {
      const 到敌方帅的位置 = 棋子.tb === 'bot' ? get上侧全部位置(棋子) : get下侧全部位置(棋子)
      for (const 位置 of 到敌方帅的位置) {
        const 棋子 = 位置2棋子(位置)
        if (!棋子) continue
        if (棋子.role !== '帅') break
        if (棋子.role === '帅') return 位置
      }
    })()

    return 敌方帅 ? [...九宫, 敌方帅] : 九宫
  }

  return []

  function filter军可移动位置(位置s: { i: number; j: number }[]) {
    let 已经遇到棋子 = false
    return 位置s.filter((位置) => {
      if (已经遇到棋子) return false // 这个判断必须首先判断 遇到敌人之后 无论是空地还是棋子 都要返回false
      if (位置2棋子(位置)) {
        已经遇到棋子 = true
        return true //可吃/保
      } else {
        return true //可走
      }
    })
  }
  function filter炮可移动位置(位置s: { i: number; j: number }[], 行动: '走' | '吃') {
    if (行动 === '走') {
      // 可走和可吃
      let 炮架 = false
      let 找到吃子 = false
      return 位置s.filter((位置) => {
        if (!炮架 && !位置2棋子(位置)) return true
        if (炮架 && 位置2棋子(位置) && !找到吃子) {
          找到吃子 = true
          return true
        }
        if (位置2棋子(位置)) {
          炮架 = true
        }
      })
    } else {
      // 只有可吃
      let 炮架 = false
      let 炮架2 = false
      return 位置s.filter((位置) => {
        if (位置2棋子(位置)) {
          if (炮架) {
            炮架2 = true
            return true
          } else {
            炮架 = true
            return false
          }
        }

        return 炮架 && !炮架2
      })
    }
  }
}

// 得到所有符合规则的移动位置 包括 [空位(走) / 敌(吃)(有保护;无保护) / 我(保)]
// 对炮来说 可走位置和可吃位置 不一致
export function get棋子_可走_位置(棋子: 棋子, 所有位置一维: 位置[]) {
  return 行动_位置(棋子, '走', 所有位置一维)
}
export function get棋子_可吃_位置(棋子: 棋子, 所有位置一维: 位置[]) {
  const x = 行动_位置(棋子, '吃', 所有位置一维)
  x.forEach((位置) => {
    // @ts-expect-error
    位置.被吃 = `${棋子.i}-${棋子.j}`
  })
  return x
}

// setTimeout(() => {
//   console.log(get棋子_可走_位置({ i: 2, j: 1, tb: 'top', role: '炮', jie: '〇', deadIdx: 0 }))
//   console.log(get棋子_可吃_位置({ i: 2, j: 1, tb: 'top', role: '炮', jie: '〇', deadIdx: 0 }))
// }, 11)

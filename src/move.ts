import { 所有位置一维, is先手, drTB, type t棋子, type 位置 } from './data'
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
  位置2棋子,
} from './utils'

function 行动_位置(棋子: t棋子, 行动: '走' | '吃' = '走'): 位置[] {
  const is敌人棋子 = 棋子?.tb === drTB.value

  const { jie, role } = 棋子
  const item = jie === '〇' ? role : jie

  if (item === '马') {
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

  if (item === '象') {
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

  if (item === '士') {
    return 所有位置一维
      .filter((p) => 距离i(棋子, p) === 1 && 距离j(棋子, p) === 1)
      .filter(({ j }) => {
        if (jie !== '〇') return true
        return j === 3 || j === 4 || j === 5
      })
  }

  if (item === '车') {
    return [
      ...filter军可移动位置(get下侧全部位置(棋子)),
      ...filter军可移动位置(get上侧全部位置(棋子)),
      ...filter军可移动位置(get右侧全部位置(棋子)),
      ...filter军可移动位置(get左侧全部位置(棋子)),
    ]
  }

  if (item === '炮') {
    return [
      ...filter炮可移动位置(get下侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get上侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get右侧全部位置(棋子), 行动),
      ...filter炮可移动位置(get左侧全部位置(棋子), 行动),
    ]
  }

  if (item === '卒') {
    return (is敌人棋子 ? !is先手.value : is先手.value)
      ? [get上侧位置(棋子), ...(棋子.i < 5 ? [get右侧位置(棋子), get左侧位置(棋子)] : [])].filter((e) => e !== undefined)
      : [get下侧位置(棋子), ...(棋子.i > 4 ? [get右侧位置(棋子), get左侧位置(棋子)] : [])].filter((e) => e !== undefined)
  }

  if (item === '帅') {
    const 九宫 = 所有位置一维
      .filter((p) => (距离i(棋子, p) === 1 && 距离j(棋子, p) === 0) || (距离i(棋子, p) === 0 && 距离j(棋子, p) === 1))
      .filter(({ i, j }) => (j === 3 || j === 4 || j === 5) && (i === 0 || i === 1 || i === 2 || i === 7 || i === 8 || i === 9))

    const 敌方帅 = (() => {
      //is先手 ???
      const 到敌方帅的位置 = is先手.value ? get上侧全部位置(棋子) : get下侧全部位置(棋子)
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

// 得到所有符合规则的移动位置 包括 [空位(走) / 敌(吃) / 我(保)]
// 对炮来说 可走位置和可吃位置 不一致
export function get棋子_可走_位置(棋子: t棋子) {
  return 行动_位置(棋子, '走')
}
export function get棋子_可吃_位置(棋子: t棋子) {
  const x = 行动_位置(棋子, '吃')
  x.forEach((位置) => {
    位置.被吃 = `${棋子.i}-${棋子.j}`
  })
  return x
}

// setTimeout(() => {
//   console.log(get棋子_可走_位置({ i: 2, j: 1, tb: 'top', role: '炮', jie: '〇', deadIdx: 0 }))
//   console.log(get棋子_可吃_位置({ i: 2, j: 1, tb: 'top', role: '炮', jie: '〇', deadIdx: 0 }))
// }, 11)

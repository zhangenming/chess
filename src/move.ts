import { 所有位置一维, is先手, drTB, type t棋子 } from './data'
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

// 得到所有符合规则的移动位置 包括空位/敌我吃棋
export function get棋子_可移动_位置(棋子: t棋子): {
  i: number
  j: number
}[] {
  const is敌人棋子 = 棋子?.tb === drTB.value

  const { jie, role } = 棋子
  const item = jie || role

  if (item === '马') {
    return 所有位置一维
      .filter((p) => (距离i(棋子, p) === 1 && 距离j(棋子, p) === 2) || (距离i(棋子, p) === 2 && 距离j(棋子, p) === 1))
      .filter(({ i, j }) => {
        if (i - 棋子.i === 2) {
          return 位置2棋子(get下侧位置(棋子)) === undefined
        }
        if (i - 棋子.i === -2) {
          return 位置2棋子(get上侧位置(棋子)) === undefined
        }
        if (j - 棋子.j === 2) {
          return 位置2棋子(get右侧位置(棋子)) === undefined
        }
        if (j - 棋子.j === -2) {
          return 位置2棋子(get左侧位置(棋子)) === undefined
        }
      })
  }

  if (item === '象') {
    return 所有位置一维
      .filter((p) => 距离i(棋子, p) === 2 && 距离j(棋子, p) === 2)
      .filter(({ i, j }) => {
        if (i === 棋子.i + 2 && j === 棋子.j + 2) {
          return 位置2棋子({ i: 棋子.i + 1, j: 棋子.j + 1 }) === undefined
        }
        if (i === 棋子.i - 2 && j === 棋子.j - 2) {
          return 位置2棋子({ i: 棋子.i - 1, j: 棋子.j - 1 }) === undefined
        }
        if (i === 棋子.i + 2 && j === 棋子.j - 2) {
          return 位置2棋子({ i: 棋子.i + 1, j: 棋子.j - 1 }) === undefined
        }
        if (i === 棋子.i - 2 && j === 棋子.j + 2) {
          return 位置2棋子({ i: 棋子.i - 1, j: 棋子.j + 1 }) === undefined
        }
      })
  }

  if (item === '士') {
    return 所有位置一维
      .filter((p) => 距离i(棋子, p) === 1 && 距离j(棋子, p) === 1)
      .filter(({ j }) => {
        if (jie) return true
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
      ...filter炮可移动位置(get下侧全部位置(棋子)),
      ...filter炮可移动位置(get上侧全部位置(棋子)),
      ...filter炮可移动位置(get右侧全部位置(棋子)),
      ...filter炮可移动位置(get左侧全部位置(棋子)),
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
    let meetQz = false
    return 位置s.filter((位置) => {
      if (meetQz) return false // 这个判断必须首先判断 遇到敌人之后 无论是空地还是棋子 都要返回false
      if (!位置2棋子(位置)) return true
      if (!meetQz && 位置2棋子(位置)) {
        meetQz = true
        return true
      }
    })
  }
  function filter炮可移动位置(位置s: { i: number; j: number }[]) {
    let 炮架 = false
    let 找到终点 = false
    return 位置s.filter((位置) => {
      if (!炮架 && !位置2棋子(位置)) return true
      if (炮架 && 位置2棋子(位置) && !找到终点) {
        找到终点 = true
        return true
      }
      if (位置2棋子(位置)) {
        炮架 = true
      }
    })
  }
}

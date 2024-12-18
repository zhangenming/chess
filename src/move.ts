import { positions, positionsFlat, is先手, drBt } from './data'
import { get下侧全部位置, get上侧全部位置, get右侧全部位置, get左侧全部位置, 距离i, 距离j, 距离, 取反 } from './utils'
import type { coord } from './utils'

// 所有可能的移动位置(符合规则) 包括吃棋(敌我)
export function getQzMoves(S: {
  qz: {
    idx: string
    role: string
    jie: string
    tb: 'top' | 'bot'
  }
  i: number
  j: number
}) {
  const is敌人棋子 = S.qz?.tb === drBt.value

  const { jie, role } = positions[S.i][S.j].qz
  const item = jie || role

  if (item === '马') {
    return positionsFlat
      .filter((p) => (距离i(S, p) === 1 && 距离j(S, p) === 2) || (距离i(S, p) === 2 && 距离j(S, p) === 1))
      .filter(({ i, j }) => {
        if (i - S.i === 2) {
          return get下侧全部位置(S)[0].qz === undefined
        }
        if (i - S.i === -2) {
          return get上侧全部位置(S)[0].qz === undefined
        }
        if (j - S.j === 2) {
          return get右侧全部位置(S)[0].qz === undefined
        }
        if (j - S.j === -2) {
          return get左侧全部位置(S)[0].qz === undefined
        }
        console.error('马')
      })
  }

  if (item === '象') {
    return positionsFlat
      .filter((p) => 距离i(S, p) === 2 && 距离j(S, p) === 2)
      .filter(({ i, j }) => {
        if (i - S.i === 2 && j - S.j === 2) {
          return positions[S.i + 1][S.j + 1].qz === undefined
        }
        if (i - S.i === -2 && j - S.j === -2) {
          return positions[S.i - 1][S.j - 1].qz === undefined
        }
        if (i - S.i === 2 && j - S.j === -2) {
          return positions[S.i + 1][S.j - 1].qz === undefined
        }
        if (i - S.i === -2 && j - S.j === 2) {
          return positions[S.i - 1][S.j + 1].qz === undefined
        }
        console.error('象')
      })
  }

  if (item === '士') {
    return positionsFlat
      .filter((p) => 距离i(S, p) === 1 && 距离j(S, p) === 1)
      .filter(({ j }) => {
        if (jie) return true
        return j === 3 || j === 4 || j === 5
      })
  }

  if (item === '车') {
    return [...军可移动位置(get下侧全部位置(S)), ...军可移动位置(get上侧全部位置(S)), ...军可移动位置(get右侧全部位置(S)), ...军可移动位置(get左侧全部位置(S))]
  }

  if (item === '炮') {
    return [...炮可移动位置(get下侧全部位置(S)), ...炮可移动位置(get上侧全部位置(S)), ...炮可移动位置(get右侧全部位置(S)), ...炮可移动位置(get左侧全部位置(S))]
  }

  if (item === '卒') {
    return (is敌人棋子 ? !is先手.value : is先手.value)
      ? [get上侧全部位置(S)[0], ...(S.i < 5 ? [get右侧全部位置(S)[0], get左侧全部位置(S)[0]] : [])].filter(Boolean)
      : [get下侧全部位置(S)[0], ...(S.i > 4 ? [get右侧全部位置(S)[0], get左侧全部位置(S)[0]] : [])].filter(Boolean)
    // 什么时候可以走左右的判断还有问题
  }

  if (item === '帅') {
    const 九宫 = positionsFlat
      .filter((p) => (距离i(S, p) === 1 && 距离j(S, p) === 0) || (距离i(S, p) === 0 && 距离j(S, p) === 1))
      .filter(({ i, j }) => (j === 3 || j === 4 || j === 5) && (i === 0 || i === 1 || i === 2 || i === 7 || i === 8 || i === 9))

    const 敌方帅 = (() => {
      //is先手 ???
      const 到敌方帅的位置 = is先手.value ? get上侧全部位置(S) : get下侧全部位置(S)
      for (const p of 到敌方帅的位置) {
        if (!p.qz) continue
        if (p.qz.role !== '帅') break
        if (p.qz.role === '帅') return p
      }
    })()

    return 敌方帅 ? [...九宫, 敌方帅] : 九宫
  }

  function 军可移动位置(datas: { i: number; j: number; qz?: { role: string; tb: string } }[]) {
    let meetQz = false // 敌我棋子
    return datas.filter((item) => {
      if (meetQz) return false // 这个判断必须首先判断 遇到敌人之后 无论是空地还是棋子 都要返回false
      if (!item.qz) return true
      if (!meetQz && item.qz) {
        meetQz = true
        return true
      }
    })
  }
  function 炮可移动位置(datas: { i: number; j: number; qz?: { role: string; tb: string } }[]) {
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
}

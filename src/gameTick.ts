import { 回合数, 走子提示, drTB, is我的回合, myTB, one, 上次点击位置, filt棋子_死, 走棋信息, 暗子牌库, 可移动位置 } from './data'
import { SEND } from './online'
import { deleteItem, findItem, get暗棋Random, test, 位置2棋子, type 位置or棋子 } from './utils'

type ol = {
  ol_起点位置: 位置or棋子
  ol_终点位置: 位置or棋子
  ol_揭开终点被吃暗子?: string | undefined
  ol_揭开起点暗子?: string | undefined
}

// 这里的逻辑 只有我方阵营会执行
export function action({ target }: { target: HTMLElement }) {
  if (!is我的回合.value && !one) return

  if (target.tagName !== 'DOM位置') return

  const 本次点击位置 = { i: Number(target.getAttribute('i')), j: Number(target.getAttribute('j')) }

  if (findItem(可移动位置.value, 本次点击位置)) {
    const 起点棋子 = 位置2棋子(上次点击位置.value)!
    const 终点棋子 = 位置2棋子(本次点击位置)

    SEND('走棋', {
      ol_起点位置: 上次点击位置.value,
      ol_终点位置: 本次点击位置,
      ...(起点棋子.jie === '〇' && { ol_揭开起点暗子: get暗棋Random(起点棋子.tb) }),
      ...(终点棋子?.jie === '〇' && { ol_揭开终点被吃暗子: get暗棋Random(终点棋子.tb) }),
    } as ol)
  } else {
    上次点击位置.value = 本次点击位置
  }
}

//todo 多步悔棋
const 悔棋数据 = []
// 两种思路
// 1. 可变数据 记录走棋数据，然后悔棋的时候，根据走棋数据，反向走棋
// 2. 不可变数据 时间旅行

// 这里的逻辑 双方阵营会执行
export function RECEIVE({ content }: any) {
  const { type, data, time } = JSON.parse(content)
  console.log('2 RECEIVE', +new Date() - time, type, data)
  console.log('\n')

  if (type === '走棋') {
    回合数.value++

    // 起点 -> 终点
    const { ol_起点位置, ol_终点位置, ol_揭开起点暗子, ol_揭开终点被吃暗子 } = data as ol

    const 起点棋子 = 位置2棋子(ol_起点位置)!
    const 终点棋子 = 位置2棋子(ol_终点位置)

    if (ol_揭开起点暗子) {
      起点棋子.jie = ol_揭开起点暗子

      deleteItem(暗子牌库[起点棋子.tb], ol_揭开起点暗子)
    }

    if (终点棋子) {
      终点棋子.deadIdx = filt棋子_死.value.filter((e) => e.tb === 终点棋子.tb).length + 1

      if (ol_揭开终点被吃暗子) {
        终点棋子.jie = ol_揭开终点被吃暗子
        // if (终点棋子.tb !== myTB.value) {
        // }
        deleteItem(暗子牌库[终点棋子.tb], ol_揭开终点被吃暗子)
      }
    }

    ;({ i: 起点棋子.i, j: 起点棋子.j } = ol_终点位置)

    走子提示.value = [ol_起点位置, ol_终点位置]

    // 悔棋数据.push(data)

    走棋信息.value = (() => {
      if (ol_揭开起点暗子 && ol_揭开终点被吃暗子) {
        return '走暗子: ' + ol_揭开起点暗子 + '; 吃暗子: ' + ol_揭开终点被吃暗子
      }
      if (ol_揭开终点被吃暗子) {
        return '吃暗子: ' + ol_揭开终点被吃暗子
      }
      if (ol_揭开起点暗子) {
        return '走暗子: ' + ol_揭开起点暗子
      }
      return 终点棋子 ? '吃: ' + 终点棋子.role : '走'
    })()
  }

  //   if (type === '发起悔棋') {
  //     //  终点 -> 起点
  //     const { ol_起点位置, ol_终点位置, ol_揭开起点暗子, ol_揭开终点被吃暗子 } = 悔棋数据.pop()

  //     const 终点 = ij2item(ol_终点位置)
  //     const 起点 = ij2item(ol_起点位置)

  //     // 1.走 暗子
  //     // 2.走
  //     // 3.吃
  //     // 4.吃 暗子
  //     起点 = 终点
  //     delete 终点
  //   }
}

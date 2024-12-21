import { 回合, 走子提示, drTB, is我的回合, myTB, offline, 起点位置, 所有棋子_死 } from './data'
import { SEND } from './online'
import { get暗棋Random, stringIJ2棋子, test } from './utils'

// 这里的逻辑 只有我方阵营会执行
export function action({ target }: { target: HTMLElement }) {
  if (!is我的回合.value && !offline) return

  const ol_起点位置 = 起点位置.value
  起点位置.value = undefined

  if (!target.parentElement?.classList.contains('位置s') && !target.parentElement?.classList.contains('棋子s')) return

  const 终点位置 = `${target.getAttribute('i')}-${target.getAttribute('j')}`

  if (ol_起点位置 && target.classList.contains('canMove')) {
    const 起点棋子 = stringIJ2棋子(ol_起点位置)!
    const 终点棋子 = stringIJ2棋子(终点位置)

    SEND('走棋', {
      ol_起点位置,
      ol_终点位置: 终点位置,
      ol_揭开起点暗子: 起点棋子.jie || get暗棋Random(起点棋子),
      ...(终点棋子 && !终点棋子.jie && { ol_揭开终点被吃暗子: get暗棋Random(终点棋子) }),
    })

    test(起点棋子.tb === 终点棋子?.tb, '吃自己')
  }

  // offline的话交替行走俩人的棋子 否则只能走自己的棋子
  if (target.classList.contains(offline ? (is我的回合.value ? myTB.value : drTB.value) : myTB.value)) {
    起点位置.value = 终点位置
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
    回合.value++

    // 起点 -> 终点
    const { ol_起点位置, ol_终点位置, ol_揭开起点暗子, ol_揭开终点被吃暗子 } = data

    const 起点棋子 = stringIJ2棋子(ol_起点位置)!
    const 终点棋子 = stringIJ2棋子(ol_终点位置)

    起点棋子.jie = ol_揭开起点暗子

    if (终点棋子) {
      终点棋子.deadIdx = 所有棋子_死.value.filter((e) => e.tb === 终点棋子.tb).length + 1

      if (ol_揭开终点被吃暗子) {
        终点棋子.jie = ol_揭开终点被吃暗子
        // if (终点棋子.tb !== myTB.value) {
        // }
      }
    }

    ;[起点棋子.i, 起点棋子.j] = ol_终点位置.split('-').map(Number)

    走子提示.value = [ol_起点位置, ol_终点位置]

    // 悔棋数据.push(data)
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

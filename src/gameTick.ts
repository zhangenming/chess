import { 回合, 吃子列表, 走棋提示1, 走棋提示2, drBt, is我的回合, myBt, offline, roles, 起始棋子 } from './data'
import { SEND } from './online'
import { getItemRandom, ij2item, test } from './utils'

// 这里的逻辑 只有我方阵营会执行
export function action({ target }) {
  if (!is我的回合.value && !offline) return

  const ol_起始棋子 = 起始棋子.value
  起始棋子.value = undefined

  if (!target.parentElement?.classList.contains('位置s') && !target.parentElement?.classList.contains('棋子s')) return

  const 目标位置 = `${target.getAttribute('i')}-${target.getAttribute('j')}`

  if (target.classList.contains('canMove') || target.classList.contains('canEat')) {
    const qz起始棋子 = ij2item(ol_起始棋子).qz
    const qz目标位置 = ij2item(目标位置).qz

    SEND('走棋', {
      ol_起始棋子,
      ol_目标位置: 目标位置,
      ...(!qz起始棋子.jie && { ol_揭开暗子: getItemRandom(roles[qz起始棋子.tb]) }),
      ...(qz目标位置 && !qz目标位置.jie && { ol_吃掉暗子: getItemRandom(roles[qz目标位置.tb]) }),
    })

    test(qz起始棋子.tb === qz目标位置?.tb, '吃自己')
  }

  // offline的话交替行走俩人的棋子 否则只能走自己的棋子
  if (target.classList.contains(offline ? (is我的回合.value ? myBt.value : drBt.value) : myBt.value)) {
    起始棋子.value = 目标位置
  }
}

//todo 多步悔棋
const 悔棋数据 = []
// 两种思路
// 1. 可变数据 记录走棋数据，然后悔棋的时候，根据走棋数据，反向走棋
// 2. 不可变数据 时间旅行

// 这里的逻辑 双方阵营会执行
export function RECEIVE({ content }) {
  const { type, data, time } = JSON.parse(content)
  console.log('2 RECEIVE', +new Date() - time, type, data)
  console.log('\n')

  if (type === '走棋') {
    回合.value++

    // 起点 -> 终点
    const { ol_起始棋子, ol_目标位置, ol_揭开暗子, ol_吃掉暗子 } = data

    const 起点 = ij2item(ol_起始棋子)
    const 终点 = ij2item(ol_目标位置)

    if (ol_揭开暗子) {
      test(起点.qz.jie, '起点不应该已经揭开')
      起点.qz.jie = ol_揭开暗子
    }
    if (终点.qz) {
      吃子列表[起点.qz.tb].push(终点.qz.jie || ol_吃掉暗子) //todo
    }

    终点.qz = 起点.qz
    delete 起点.qz

    走棋提示1.value = ol_目标位置
    走棋提示2.value = ol_起始棋子

    悔棋数据.push(data)
  }

  if (type === '发起悔棋') {
    //  终点 -> 起点
    const { ol_起始棋子, ol_目标位置, ol_揭开暗子, ol_吃掉暗子 } = 悔棋数据.pop()

    const 终点 = ij2item(ol_目标位置)
    const 起点 = ij2item(ol_起始棋子)

    // 1.走 暗子
    // 2.走
    // 3.吃
    // 4.吃 暗子
    起点.qz = 终点.qz
    delete 终点.qz
  }
}

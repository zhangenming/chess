export type 位置 = {
  i: number
  j: number
  idx?: string
}

export type 棋子 = {
  tb: 'top' | 'bot'
  明: string
  暗: string
  deadIdx: number

  // idx: string // 动态的 静态无效
} & 位置

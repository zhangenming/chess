export type 位置 = { i: number; j: number }

export type t棋子 = {
  tb: 'top' | 'bot'
  role: string
  jie: string
  deadIdx: number

  i: number
  j: number
} & 位置

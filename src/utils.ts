import { positions } from './data'
export function getRoleType(i: number, j: number) {
  const { qz } = positions[i][j]
  if (!qz) return 'empty'

  return qz.color
}

export function judgeRed(i: number, j: number) {
  return getRoleType(i, j) === 'red'
}
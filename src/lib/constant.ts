import { getMyId, hasFlag } from '@/utils'

export const isMaster = hasFlag('master')
export const isBoss = hasFlag('boss')
export const isOne = hasFlag('one')
export const isBuff = true

export const 我的id = getMyId() // 非响应式

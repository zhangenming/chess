import { getMyId } from '@/utils'

export const isMaster = location.search.includes('master')
export const isBoss = location.search.includes('boss')
export const isOne = location.search.includes('one')
export const isBuff = true

export const 我的id = getMyId() // 非响应式

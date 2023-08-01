export {
  reactive,
  isReactive,
  // markRaw 函数的作用是将一个对象标记为非响应式的原始对象(raw object)。
  // 类似于冻结对象
  markRaw,
  shallowReactive,
  toRaw,
  isRaw,
} from './reactive'
export {
  ref,
  customRef,
  isRef,
  createRef,
  toRefs,
  toRef,
  unref,
  shallowRef,
  triggerRef,
  proxyRefs,
} from './ref'
export { readonly, isReadonly, shallowReadonly } from './readonly'
export { set } from './set'
export { del } from './del'

export type {
  Ref,
  ComputedRef,
  WritableComputedRef,
  ToRefs,
  UnwrapRef,
  UnwrapRefSimple,
  ShallowUnwrapRef,
} from './ref'
export type { DeepReadonly, UnwrapNestedRefs } from './readonly'

// 所有对外暴露的api均处于此处
export * from '../reactivity'
export {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from './lifecycle'
export * from './watch'
export * from './computed'
export * from './inject'
export { useCssModule, useCSSModule } from './useCssModule'
export { App, createApp } from './createApp'
export { nextTick } from './nextTick'
export { createElement as h } from './createElement'
export { warn } from './warn'
export {
  effectScope,
  EffectScope,
  getCurrentScope,
  onScopeDispose,
} from './effectScope'
export { useAttrs, useSlots } from './setupHelpers'

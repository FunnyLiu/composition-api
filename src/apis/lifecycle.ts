import { VueConstructor } from 'vue'
import {
  getVueConstructor,
  setCurrentInstance,
  getCurrentInstance,
  ComponentInternalInstance,
} from '../runtimeContext'
import { getCurrentInstanceForFn } from '../utils/helper'

const genName = (name: string) => `on${name[0].toUpperCase() + name.slice(1)}`
function createLifeCycle(lifeCyclehook: string) {
  return (callback: Function, target?: ComponentInternalInstance | null) => {
    const instance = getCurrentInstanceForFn(genName(lifeCyclehook), target)
    return (
      instance &&
      injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback)
    )
  }
}

function injectHookOption(
  Vue: VueConstructor,
  instance: ComponentInternalInstance,
  hook: string,
  val: Function
) {
  const options = instance.proxy.$options as Record<string, unknown>
  const mergeFn = Vue.config.optionMergeStrategies[hook]
  const wrappedHook = wrapHookCall(instance, val)
  options[hook] = mergeFn(options[hook], wrappedHook)
  return wrappedHook
}

function wrapHookCall(
  instance: ComponentInternalInstance,
  fn: Function
): Function {
  return (...args: any) => {
    let prev = getCurrentInstance()
    setCurrentInstance(instance)
    try {
      return fn(...args)
    } finally {
      setCurrentInstance(prev)
    }
  }
}
// 利用 Vue 的选项合并策略(option merge strategies),
// 通过给组件实例的 $options 注入自定义的生命周期hook函数,来override原有的生命周期选项。

// 生命周期hook函数需要通过 getCurrentInstance() 获取当前活跃的组件实例,
// 并在执行回调前通过 setCurrentInstance()绑定实例,在回调执行完毕后恢复之前的实例。

export const onBeforeMount = createLifeCycle('beforeMount')
export const onMounted = createLifeCycle('mounted')
export const onBeforeUpdate = createLifeCycle('beforeUpdate')
export const onUpdated = createLifeCycle('updated')
export const onBeforeUnmount = createLifeCycle('beforeDestroy')
export const onUnmounted = createLifeCycle('destroyed')
export const onErrorCaptured = createLifeCycle('errorCaptured')
export const onActivated = createLifeCycle('activated')
export const onDeactivated = createLifeCycle('deactivated')
export const onServerPrefetch = createLifeCycle('serverPrefetch')

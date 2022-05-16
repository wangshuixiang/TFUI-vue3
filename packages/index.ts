import { App } from 'vue'
import TFButton from './button'
 
// 所有组件列表
const components = [ TFButton ]
 
// 定义 install 方法， App 作为参数
const install = (app: App): void => {
    // 遍历注册所有组件
    components.map((component) => app.component(component.name, component))
}
 
export {
  TFButton
}
 
export default {
    install
}
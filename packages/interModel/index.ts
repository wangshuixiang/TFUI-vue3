import { App } from 'vue'
import interModel from './src/interModel.vue'
 
// 定义 install 方法， App 作为参数
interModel.install = (app: App): void => {
    app.component(interModel.name, interModel)
}
 
export default interModel
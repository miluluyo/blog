/**
 * 扩展 VuePress 应用
 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  hljs  from 'highlight.js';  
// 样式文件
import 'highlight.js/styles/atom-one-light.css'
import VueLazyload from 'vue-lazyload'



export default ({
  Vue
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(Element)
  Vue.use(hljs)
  Vue.use(VueLazyload)
}
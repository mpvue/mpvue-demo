import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['^pages/index', 'pages/test'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Mpvue示例',
      navigationBarTextStyle: 'black'
    }
  }
}

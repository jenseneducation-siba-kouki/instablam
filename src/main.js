import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.online = window.navigator.onLine;
Vue.prototype.createObjectURL = window.URL.createObjectURL;
Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() =>
       console.log("Registered SW"))
      .catch((error) => 
      console.log("Error with register SW ", error));
    
  }
}

registerServiceWorker();
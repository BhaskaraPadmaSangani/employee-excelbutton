import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4";
//because of this only excel is coming in that color
import "datatables.net-bs4/css/dataTables.bootstrap4.css";

import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.html5";



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import VueSweetAlert2 from 'vue-sweetalert2'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'



Vue.use(VueFire)
Vue.use(VueClipboard)
Vue.use(VueSweetAlert2)
Vue.config.productionTip = false

firebase.initializeApp({
  projectId: 'boobsbuttsanddicks',
  databaseURL: 'https://boobsbuttsanddicks.firebaseio.com'
})

export const db = firebase.firestore()
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

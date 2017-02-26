// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NavBar from 'components/NavBar'
import * as firebase from 'firebase'

Vue.component('navbar', NavBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: 'AIzaSyC2TLBwX_OGeaUNpJzxy_WuxTgAxR7ud84',
  authDomain: 'easyeditor-adaa5.firebaseapp.com',
  databaseURL: 'https://easyeditor-adaa5.firebaseio.com',
  storageBucket: 'easyeditor-adaa5.appspot.com'
}

firebase.initializeApp(config)

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Hello from "./components/Hello";
import About from "./components/About";
import Param from "./components/Param";
import paramdetails from "./components/paramdetails";
Vue.config.productionTip = false;
//tell vue to use the router
Vue.use(VueRouter);

//define routes
const routes = [
  //define the root url of the application.
  { path : '/' , component: Hello },
  //define other routes e.g. the About page
  { path: '/about', component: About },

  { path: '/param', component: Param },
  //route for the paramdetails passing in params
  { path: '/paramdetails/:id', component: paramdetails, name: 'Paramdetails' }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history"
});
/* eslint-disable no-new */
new Vue({
  //define the selector for the root component
  el: "#app",
  //pass the template to the root component
  template: "<App/>",
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount("#app"); //mount the router on the app

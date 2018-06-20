<template>
  <div id="app">
    <!--<img width="25%" src="./assets/logo.png"-->
    <!--<HelloWorld/>-->
    <nav>
    <ul>
      <ol><router-link v-bind:to="'/'">Home</router-link></ol>
      <ol><router-link v-bind:to="'/about'">About</router-link></ol>
      <router-link v-bind:to="'/param'">Param Link</router-link>
    </ul>
    </nav>
   <router-view></router-view> 
  </div>
</template>
<!-- styling for the component -->
<script>
//import HelloWorld from "./components

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

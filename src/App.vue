<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test1">Test 1</router-link> |
      <router-link to="/test2">Test 2</router-link> |
      <router-link to="/test3">Test 3</router-link>
    </div>
    <div id="main">
      <gl ref="gl"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    components: {
      gl: () => import('@/components/GoldenLayout.vue')
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  /* width: calc(100% - 250px - 250px); */
  /* width: 100%; */
  /* height: calc(100% - 61px); */
  min-height: calc(100% - 61px);
  /* float: right; */
  order: 2;
  flex: 1 1 auto;
  overflow: hidden;
  transition: all .5s ease;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#main,
  .fullscreen,
  .lm_item,
  .lm_items,
  .lm_stack,
  .lm_row,
  .lm_maximise_place,
  .lm_item_container,
  .lm_content,
  .glComponent,
  .container-col,
  .container-row,
  .fullpage {
    width: 100% !important;
    height: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
</style>

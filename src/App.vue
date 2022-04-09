<template>
  <div class="header">
    
  </div>
  <div class="content-container">
    <router-view/>
   </div>
</template>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.header{
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: aqua;
}

.content-container{
  width: 100%;
  margin-top: 100px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>

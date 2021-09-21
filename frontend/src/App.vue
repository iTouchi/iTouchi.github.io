<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  min-height: 100vh;
  height: 100%;
}

#nav {
  position: fixed;

  a {
    color: white;
  }
}
</style>

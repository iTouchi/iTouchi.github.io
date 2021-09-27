<template>
  <div class="page home">
    <div class="full-width">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <h1>{{title}}</h1>
      <div class="nav-container">
        <router-link to="/">{{linkNames.home}}</router-link> |
        <!-- <router-link to="/getting-started">{{linkNames.gettingStarted}}</router-link> |
        <router-link to="/router">{{linkNames.router}}</router-link> |
        <router-link to="/vuex-store">{{linkNames.store}}</router-link> |
        <router-link to="/vue-tagmanager">{{linkNames.gtm}}</router-link> |
        <router-link to="/translations">{{linkNames.translations}}</router-link> | -->
        <router-link to="/webxr">{{linkNames.webxr}}</router-link> |
        <router-link to="/banuba">{{linkNames.banuba}}</router-link> |
        <router-link to="/arjs">{{linkNames.ARjs}}</router-link> |
        <router-link to="/8thwall">{{linkNames.Wall}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
   computed: {
    linkNames() {
      return this.$store.getters['translations/getGlobalTranslation']('links');
    },
    title() {
      return this.$store.getters['translations/getTranslationsByPageName']('home').title;
    }
  },
}
</script>

<style lang="scss" scoped>
.page.home {
  background-color: black;
  height: 100vh;

  .full-width { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .logo {
      max-width: 200px;
    }
  }

  h1 {
    margin-top: 32px;
    margin-bottom: 16px;
    color: white;
  }

  .nav-container {
    color: white;

    a {
      margin: 0 8px;
      color: white;
    }
  }
}
</style>

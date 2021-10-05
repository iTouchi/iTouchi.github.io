<template>
  <div class="page home">
    <div class="full-width">
      <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ title }}</h1>
      <div class="nav-container">
        <router-link to="/">{{ linkNames.home }}</router-link> |
        <!-- <router-link to="/getting-started">{{linkNames.gettingStarted}}</router-link> |
        <router-link to="/router">{{linkNames.router}}</router-link> |
        <router-link to="/vuex-store">{{linkNames.store}}</router-link> |
        <router-link to="/vue-tagmanager">{{linkNames.gtm}}</router-link> |
        <router-link to="/translations">{{linkNames.translations}}</router-link> | -->
        <router-link to="/webxr">{{ linkNames.webxr }}</router-link> |
        <router-link to="/banuba">{{ linkNames.banuba }}</router-link> |
        <router-link to="/arjs">{{ linkNames.ARjs }}</router-link> |
        <router-link to="/8thwall">{{ linkNames.Wall }}</router-link> |
        <router-link to="/zapworks">{{ linkNames.Zapworks }}</router-link> |
        <router-link to="/webarkit">{{ linkNames.WebARkit }}</router-link> |
        <router-link to="/unity">{{ linkNames.Unity }}</router-link>
      </div>
      <div>
        <h2>HTML Table</h2>

        <table>
          <tr>
            <th></th>
            <th>Marker-Based AR</th>
            <th>Face AR</th>
            <th>Location-Based AR</th>
            <th>Projection-Based / Spatial AR</th>
            <th>Superimposition</th>
            <th>Aesthetic & Immersion</th>
            <th>Interaction</th>
            <th>Safari</th>
            <th>Chrome</th>
            <th>Monthly Cost</th>
          </tr>
          <tr>
            <th>8th Wall</th>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>$99 - $5000+</td>
          </tr>
          <tr>
            <th>ARCore</th>
            <td>Not on web</td>
            <td>Not on web</td>
            <td></td>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td>With WebXR</td>
            <td>With WebXR</td>
            <td>free</td>
          </tr>
          <tr>
            <th>ARkit</th>
            <td></td>
          </tr>
          <tr>
            <th>AR.js</th>
            <td class="checkmark">✓</td>
            <td></td>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>free</td>
          </tr>
          <tr>
            <th>Banuba</th>
            <td></td>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>free</td>
          </tr>
          <tr>
            <th>PlayCanvas</th>
            <td>Francisco Chang</td>
          </tr>
          <tr>
            <th>Unity</th>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td></td>
            <td class="checkmark">✓</td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>Limited</td>
            <td>Limited</td>
            <td>$0 - $1800+</td>
          </tr>
          <tr>
            <th>WebXR</th>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Not yet</td>
            <td class="checkmark">✓</td>
            <td>free</td>
          </tr>
          <tr>
            <th>WebARkit</th>
            <td class="checkmark">✓</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>free</td>
          </tr>
          <tr>
            <th>Zap.works</th>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td></td>
            <td>Not on web</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="checkmark">✓</td>
            <td class="checkmark">✓</td>
            <td>$55 - $500+</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    linkNames() {
      return this.$store.getters["translations/getGlobalTranslation"]("links");
    },
    title() {
      return this.$store.getters["translations/getTranslationsByPageName"](
        "home"
      ).title;
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid white;
  text-align: left;
  padding: 8px;
  background-color: black;
  color: white;
}
.checkmark {
  color: green;
  font-size: 150%;
  font-weight: bolder[];
}
tr:nth-child(even) {
  background-color: blue;
}

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

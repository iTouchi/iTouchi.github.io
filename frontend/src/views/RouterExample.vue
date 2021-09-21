<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted"/>
      <div class="full-width">
        <h1>Vue Router Example</h1>
        <p class="description">Vue Router is the standard router for Vue applications. You can manage your routes and find some examples on how to pass queries or parameters inside of your url within <MonoSpace class="dark">@/router/index.js</MonoSpace>.</p>
        Example:<a href="https://router.vuejs.org/" class="button" target="_blank" rel="noopener noreferrer">Documentation</a>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Parameters</h2>
          <p v-if="$route.params.parameter"><b>Active parameter: {{$route.params.parameter}}</b></p>
          <p>Inside of your <MonoSpace>@/router/index.js</MonoSpace> you can define parameters inside of your route. You can access these predefined parameters by using Vue Router's <MonoSpace>$route.query</MonoSpace> variable. This type of routing works best for readable URLs that contain constant parameters, like identifiers for detailpages.</p>
          <p>In this example we defined an extra route with <MonoSpace>'/router/:parameter'</MonoSpace> as its path, which means we can access whatever gets written instead of <MonoSpace>:parameter</MonoSpace>.</p>
          <p>Example: <router-link to="/router/example">/router/example</router-link></p>
        </div>
        <div class="container">
          <h2>Queries</h2>
          <p v-if="getQueries.length !== 0"><b>Active queries:</b></p>
          <ul v-if="getQueries.length !== 0">
            <li v-for="(query, index) in getQueries" :key="index"><b>{{query[0]}}:</b> {{query[1]}}</li>
          </ul>
          <p>Lorem ipsum dolor sid amet.</p>
          <p>Example: <router-link :to="`${$route.path}?test=1`">{{`${$route.path}?test=1`}}</router-link></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MonoSpace from '@/components/MonoSpace';

export default {
  name: 'RouterExample',
  components: {
    NavBar,
    MonoSpace
  },
  computed: {
    getQueries() {
      return Object.entries(this.$route.query);
    }
  }
}
</script>

<style lang="scss" scoped>
.page.router-example {
  header {
    background-color: black;
    padding-bottom: 64px;

    h1, p {
      color: white;
      text-align: left;
      color: white;
    }
  
    h1 {
      margin-top: 32px;
    }

    .description {
      margin-top: 16px;

      @include tablet-up {
          max-width: 600px;
      }
    }

    .button {
      display: block;
      width: fit-content;

      margin-top: 24px;
      padding: 12px 24px;

      color: white;
      font-family: Barlow;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;

      border: 1px solid white;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }

  section.content {
    padding: 32px 0;
    .full-width {  
      .container {
        h2 {
          margin-bottom: 12px;
        }

        a {
          display: inline-block;

          color: black;
        }

        p {
          margin-bottom: 12px;
        }

        ul {
          margin-top: 8px;
        }
      }

      @include tablet-up {
        display: flex;
        justify-content: space-between;

        .container {
          width: calc(50% - 16px);
        }
      }
    }
  }
}
</style>
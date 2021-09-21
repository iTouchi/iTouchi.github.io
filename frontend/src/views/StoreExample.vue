<template>
  <div class="page store-example">
    <header>
      <NavBar class="inverted"/>
      <div class="full-width">
        <h1>Vuex Store Example</h1>
        <p class="description">At its base, Vuex is a state management pattern for Vue.js applications. It serves as a centralized store for all the components inside of your app with rules ensuring the state can only be mutated in a controlled and predictable fashion.</p>
        <p class="description">Vuex will not always be as relevant for our engagement projects as it's centred around keeping track of lots of data throughout a project. However, here are some examples to explain the general gist of it.</p>
        <a href="https://vuex.vuejs.org/" class="button" target="_blank" rel="noopener noreferrer">Documentation</a>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>General Concepts</h2>
          <p>Inside of <MonoSpace>@/store/index.js</MonoSpace> you can find some of Vuex's basic store patterns. A Vuex store is made out of 4 key attributes: your <b>state</b>, <b>mutations</b>, <b>actions</b> and <b>getters</b>. At first glance these concepts might seem a bit convoluted, however they are what allows us to more explicitly track what's happening inside of our state for debugging purposes.</p>
          <p>Your <b>state</b> is what keeps track of the data you want to save and edit. Vuex uses a single state tree, which means that all your data gets contained within this one single objects. On top of that it is by itself immutable, this means that you cannot directly edit what's inside of it.</p>
          <p>But then how do you edit your state? This is where <b>mutations</b> come into play. <b>Mutations</b> allow you to change your state by committing payloads to it. These payloads get handled and prepared within our actions.</p>
          <p><b>Actions</b> are the functions you call inside of your opponents when you want to edit something inside of your state. This is usually where you want to prepare your payload before committing it to a mutation. On top of that they also allow you to work asynchronously, meaning that this is where you would launch API calls for when you want to grab data from a database.</p>
          <p>And finally, we use <b>getters</b> to gain access to the data within our state. It is important to note that you can directly read anything you have saved within your state, however for structuring purposes it is recommended to pass it through a getter instead.</p>
        </div>
        <div class="container">
          <h2>Example</h2>
          <p>Count: {{ getCount }}</p>
          <button @click="addCount(1)">+1</button><button @click="addCount(5)">+5</button><button @click="addCount(10)">+10</button>
        </div>
        <div class="container">
          <h2>Modules</h2>
          <p>The final concept of Vuex's store is called <b>modules</b>. Simply put: if a state is a tree, then <b>modules</b> are its branches. We use these to create a deeper structure inside of our state to keep it from becoming bloated and unreadable.</p>
          <p>Much like our general state, modules also benefit from the same <b>state</b>, <b>mutations</b>, <b>actions</b> and <b>getters</b> attributes; conveniently they also work in the same way!</p>
          <p>Modules do have one quirk: by default they are registered under the same global <b>namespace</b> as our root state. This causes our module-specific attributes to also get triggered by the same code as our general state's. This can be handy at times, however if you want to keep it private you can add <br><MonoSpace>namespaced: true</MonoSpace> to your module. This way your module's attributes get nested deeper within your state.</p>
          <p>Example: If you have a namespaced account module, <MonoSpace>commit('login')</MonoSpace> becomes <MonoSpace>commit('account/login')</MonoSpace></p>
        </div>
        <div class="container">
          <h2>Example</h2>
          <div v-if="getUser">
            <p>Current user: {{ getUser }}</p>
            <button @click="logout">Logout</button>
          </div>
          <div v-else>
            <input type="text" v-model="name">
            <div class="row">
              <input type="checkbox" id="remember" v-model="rememberUser"><label for="remember">Remember me</label>
            </div>
            <button @click="login">Login</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MonoSpace from '@/components/MonoSpace';

export default {
  name: 'StoreExample',
  components: {
    NavBar,
    MonoSpace
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
    getUser() {
      return this.$store.getters['account/getUser'];
    }
  },
  data() {
    return {
      name: '',
      rememberUser: false
    }
  },
  methods: {
    addCount(amount) {
      this.$store.dispatch('addCount', amount);
    },
    login() {
      this.$store.dispatch('account/login', {
        user: this.name,
        rememberUser: this.rememberUser
      });
    },
    logout() {
      this.$store.dispatch('account/logout');
    }
  }
}
</script>

<style lang="scss">
.page.store-example {
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
        margin-bottom: 32px;

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

        input {
          display: inline-block;
        }
      }

      @include tablet-up {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .container {
          width: calc(50% - 16px);
        }
      }
    }
  }
}
</style>
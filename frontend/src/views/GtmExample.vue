<template>
  <div class="page gtm-example">
    <header>
      <NavBar class="inverted"/>
      <div class="full-width">
        <h1>Vue Google Tagmanager</h1>
        <p class="description">Most popular libraries have their own Vue version, GTM is no exception to this rule. It's entirely possible to add a GTM script inside of your <MonoSpace class="dark">@/public/index.html</MonoSpace> file but for consistency's sake we define and launch it inside of our application. This way we can control our custom events in the proper Vue way.</p>
        Example:<a href="https://www.npmjs.com/package/@gtm-support/vue2-gtm" class="button" target="_blank" rel="noopener noreferrer">Documentation</a>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
            <h2>Initialisation</h2>
            <p>We initialise our GTM script inside of <MonoSpace>@/public/index.html</MonoSpace>. The only parameter that's absolutely required is your GTM id, if you leave this undefined it <b>will</b> break your application and you'll be unable to properly load it. That's why it's highly recommended to delete this code snippet if GTM is not relevant for your project.</p>
            <p>Besides that you can also add other optional parameters. We have added a few predifined ones that might be interesting during development but please consult the library's documentation if you need want to optimize to the client's needs.</p>
        </div>
        <div class="container">
            <h2>Custom events</h2>
            <p>GTM tracks a lot by default, but all clients have different needs and this means that sometimes it's necessary to add some customized trackers. Luckily Vue GTM eases that process by making its API available through <MonoSpace>this.$gtm</MonoSpace> inside of your components.</p>
            <div v-if="$gtm.enabled()">
                <p v-if="$gtm.options.debug">This event gets logged in your console:</p>
                <button @click="onClickTracker">Click me!</button>
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
    name: 'GtmExample',
    components: {
        NavBar,
        MonoSpace
    },
    methods: {
        onClickTracker() {
            this.$gtm.trackEvent({
                event: null,
                category: 'test button',
                action: 'click',
                label: 'test label'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.page.gtm-example {
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
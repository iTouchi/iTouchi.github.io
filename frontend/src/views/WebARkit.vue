<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>WebARkit</h1>
        <div class="container">
          <div>
            <p class="description">
              WebARkit wants to become the next WebAR standard. The ARtoolkit
              project is dead his successor ARtoolkitX is not so much web
              friendly. That’s why WebARkit wants to develop a newer version
              derived from the two in a smarter sdk especially designed for JS.
            </p>
            <a
              href="https://www.webarkit.org/examples/"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Demos</a
            >
          </div>
        </div>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pros and cons</h2>
          <p>
            Very ambitious open source project but too young to be useful right
            now. There are better options on the market. But definitely one to
            keep an eye on.
          </p>
          <p>
            Right now the documentation is also not that great.
          </p>
        </div>
        <div class="container">
          <h2>Sources</h2>
          <p>
            <a href="https://www.webarkit.org/" target="_blank">WebARkit</a>
          </p>
          <p>
            <a href="https://github.com/webarkit/" target="_blank">Github</a>
          </p>
          <p>
            <a href="https://www.webarkit.org/" target="_blank">WebARkit</a>
          </p>
          <p>
            <a href="https://github.com/artoolkitx/artoolkitx" target="_blank">ARtoolkitX</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
// import MonoSpace from "@/components/MonoSpace";

export default {
  name: "RouterExample",
  components: {
    NavBar,
    // MonoSpace,
  },
  computed: {
    getQueries() {
      return Object.entries(this.$route.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.page.router-example {
  header {
    background-color: black;
    padding-bottom: 64px;
    .full-width {
      .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .sample-container {
          margin-top: 16px;
          margin-right: 16px;
          margin-left: 16px;
          @include tablet-up {
            max-width: 500px;
          }
          .sample-image {
            max-width: 100%;
          }
        }
      }
    }
    h1,
    p {
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
          padding-right: 20px;
        }
      }
    }
  }
}
</style>

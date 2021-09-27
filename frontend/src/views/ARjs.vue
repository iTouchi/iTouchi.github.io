<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>AR.js</h1>
        <div class="container">
          <div>
            <p class="description">
              AR.js is a lightweight library for Augmented Reality on the Web,
              coming with features like Image Tracking, Location-based AR and
              Marker tracking.
            </p>
            <p class="description">
              AR.js can be used with both A-FRAME and Three.js as a render
              library.
            </p>
            <a
              href="https://ar-js-org.github.io/AR.js-Docs/"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
            <a
              href="https://ar-js-org.github.io/AR.js/aframe/examples/marker-based/basic.html"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Demo</a
            >
            <p class="description">
              Before you start the demo print or open
              <a
                href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png"
                target="_blank"
                >this image</a
              >
              on another screen.
            </p>
          </div>
          <div class="sample-container">
            <img
              class="sample-image"
              src="https://ar-js-org.github.io/AR.js-Docs/intro-image.gif"
              alt="ARjs Samples"
            />
          </div>
        </div>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pros and cons</h2>
          <p>
            AR.js seems very easy to use at first sight. But it has a couple of
            issues when trying to import in a custom project. For example the
            image tracking function takes a very long time to load, so long that
            I could not try it out for my elf. It gives an error, even in the
            original example of AR.js on GitHub.
          </p>
          <p>
            On this page you can try out the marker-based demo. I used the demo
            from AR.js GitHub page because I was running in to cross-origin
            problems trying to run it on my own server.
          </p>
          <p>
            The great thing about this library is that it will run on any phone
            with WebGL and WebRTC. Marker-based AR seems very light but
            image-based seems to be more CPU consuming. In regards of location
            Based features, they are only available on A-FRAME.
          </p>
        </div>

        <div class="container">
          <h2>Features</h2>
          <p>
            Banuba SDK has a lot of great futures when it comes to Face-AR.
            Unfortunately not al features are supported on the web. You can find
            the list of features and their support on platforms on
            <a
              href="https://docs.banuba.com/face-ar-sdk/overview/sdk_features#rendering-engine"
              >this page.</a
            >
            Below you can find the list of features that ar supperted on the
            web.
          </p>
          <div>
            <h3>Image-Based</h3>
            <li>Recognizes images</li>
            <li>More CPU consuming</li>
          </div>
          <div>
            <h3>Marker-based</h3>
            <li>More stable then image tracking</li>
            <li>Limited in shape, color and size</li>
            <li>Very lightweight</li>
          </div>
          <div>
            <h3>Location-based</h3>
            <li>
              Uses real world places in order to show AR content on the device
            </li>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>Works with any phone with WebGL and WebRTC</li>
          <li>Marker based is very lightweight</li>
          <li>Image Tracking is more CPU consuming</li>
          <li>Location Based feature is only available on A-Frame</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>
          <p>
            AR.js is an opensource project so it’s basically free. Unless you
            need some support than you can get paid support and new features.
          </p>
          <li><b>Bug Fix Developer Service.</b> $999</li>
          <li><b>Bug Fix Minor Developer Service.</b> $299</li>
          <li><b>1 Support Hour Developer Service. </b> $249</li>
          <p>
            <a href="https://xscode.com/nicolocarpignoli/AR.js">Paid Support</a>
          </p>
        </div>
        <div class="container">
          <h2>Sources</h2>
          <p>
            <a href="https://github.com/AR-js-org">Github</a>
          </p>
          <p>
            <a href="https://ar-js-org.github.io/AR.js-Docs/"
              >AR.js - Augmented Reality on the Web</a
            >
          </p>
          <p>
            <a href="https://twitter.com/ARjs_Library">Twitter page</a>
          </p>
          <p>
            <a href="https://twitter.com/nicolocarp"
              >Twitter page Nicolo Carp (dev)</a
            >
          </p>
          <p>
            <a href="https://ar-js-org.github.io/AR.js-Docs/ui-events/"
              >UI and Custom Events</a
            >
          </p>
          <p>
            <a
              href="https://aframe.io/blog/arjs/#add-augmented-reality-in-your-a-frame-project"
              >Creating Augmented Reality with AR.js and A-Frame</a
            >
          </p>
          <p>
            <a href="https://aframe.io/blog/webxr-ar-module/"
              >Experiment with AR and A-Frame</a
            >
          </p>
          <p>
            <a href="https://aframe.io/blog/arjs3/"
              >Image Tracking and Location-Based AR with A-Frame and AR.js 3</a
            >
          </p>
          <p>
            <a href="https://xr-spinosaurus.glitch.me/">Demo with A-FRAME</a>
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

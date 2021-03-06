<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>WebXR</h1>
        <p class="description">
          WebXR is a group of standards which are used together to support
          rendering 3D scenes to hardware designed for presenting virtual worlds
          (virtual reality, or VR), or for adding graphical imagery to the real
          world, (augmented reality, or AR). The WebXR Device API implements the
          core of the WebXR feature set, managing the selection of output
          devices, render the 3D scene to the chosen device at the appropriate
          frame rate, and manage motion vectors created using input controllers.
        </p>
        <p class="description">
          WebXR is trying to be the next web standard when it come to XR on the
          web. Altough it’s not yet fully supported by al browsers. It has great
          potential and it looks like they are working very hard at the W3C
          group to make this happen. At this point in time it’s not very
          accessible for users because it’s not standardized inside the browsers
          yet.
        </p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API"
          class="button"
          target="_blank"
          rel="noopener noreferrer"
          >Documentation</a
        >
        <a
          href="/webXR/WebXRandThreejs.html"
          class="button"
          target="_blank"
          rel="noopener noreferrer"
          >WebXR Three.js Demo</a
        >
        <!-- <router-link class="button" to="/router/example">DEMO</router-link> Three.js + VUE don't shot textures atm-->
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pros and cons</h2>
          <p v-if="$route.params.parameter">
            <b>Active parameter: {{ $route.params.parameter }}</b>
          </p>
          <p>
            Works on any device that runs Chrome broswer version 79 and higher
          </p>
          <p>
            To view WebXR on an iPhone with Safari the user needs to download
            <MonoSpace class="light">XRViewer</MonoSpace> in order to run an
            WebXR sample. This is because Apple has not yet finished introducing
            WebXR API to Safari. But this could be very soon because it’s in
            development on the official Webkit page. And there are just 2 bugs
            remaining regarding WebXR:
          </p>
          <p>
            WebKit Bugzilla:
            <a href="https://bugs.webkit.org/show_bug.cgi?id=208988">link</a>
          </p>
          <p>
            On chrome you need to make sure experimental WebXR AR Module is
            enabled under
            <MonoSpace class="light">chrome://flags</MonoSpace> and the page
            must be served over HTTPS.
          </p>
        </div>
        <div class="container">
          <h2>Features</h2>
          <p>Different features of WebXR</p>
          <div class="container">
            <h3>Hit Test</h3>
            <p>
              Allows the phone to understand and track its position relative to
              the world.
              <a
                href="https://developers.google.com/ar/develop/fundamentals#user_interaction"
                >Documentation</a
              >
            </p>
          </div>
          <div class="container">
            <h3>Anchors</h3>
            <p>Allows virtual objects to stay in place in an AR scene</p>
            <a href="https://developers.google.com/ar/develop/webxr/anchors"
              >Documentation</a
            >
          </div>
          <div class="container">
            <h3>Depth</h3>
            <p>Allows virtual objects to stay in place in an AR scene.</p>
            <a href="https://developers.google.com/ar/develop/webxr/anchors"
              >Documentation</a
            >
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>AR-Core-compatible devices</li>
          <li>Google Daydream</li>
          <li>HTC Vive</li>
          <li>Magic Leap One</li>
          <li>Microsoft Hololens</li>
          <li>Windows Mixed Reality Headsets</li>
          <li>Immersive Headsets</li>
          <li>AR Eyeglasses</li>
          <li>AR-enabled smartphones</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>SOURCES</h2>
          <p>
            <a href="https://developers.google.com/ar/develop/webxr"
              >ARCore - WebXR overview</a
            >
          </p>
          <p>
            <a href="https://github.com/immersive-web">Immersive Web at W3C</a>
          </p>
          <p>
            <a
              href="https://github.com/immersive-web/webxr/blob/master/explainer.md"
              >WebXR Device API Explained</a
            >
          </p>
          <p>
            <a
              href="https://github.com/immersive-web/depth-sensing/blob/main/explainer.md"
              >depth-sensing</a
            >
          </p>
          <p>
            <a href="https://www.reddit.com/r/LearnXR/">Learn XR Reddit</a>
          </p>
          <p>
            <a href="https://github.com/immersive-web/dom-overlays"
              >DOM overlays</a
            >
          </p>
          <p>
            <a href="https://immersiveweb.dev/">Immersiveweb.dev</a>
          </p>
          <p>
            <a href="https://immersive-web.github.io/webxr">WebXR Device API</a>
          </p>
          <p>
            <a href="https://immersive-web.github.io/"
              >The Immersive Web Working Group/Community Group</a
            >
          </p>
          <p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API"
              >WebXR Device API</a
            >
          </p>
          <p>
            <a href="https://immersive-web.github.io/webxr-ar-module"
              >WebXR Augmented Reality Module - Level 1</a
            >
          </p>
          <p>
            <a
              href="https://venturebeat.com/2018/02/28/the-webxr-api-opens-the-door-to-a-new-breed-of-cross-reality-games/"
              >The WebXR API opens the door to a new breed of cross-reality
              games</a
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MonoSpace from "@/components/MonoSpace";

export default {
  name: "RouterExample",
  components: {
    NavBar,
    MonoSpace,
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
        }
      }
    }
  }
}
</style>

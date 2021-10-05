<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>Zapworks</h1>
        <div class="container">
          <div>
            <p class="description">
              Zapworks is a complete toolkit. It works great on the web when it
              comes to marker and image-based AR. But it lacks some options
              compared to competitors like 8th wall. On the other hand it’s less
              expensive than 8th wall. Zapworks has a great portfolio with
              projects for well-known brands. It also has good support for
              different 3D JS frameworks and Game engines.
            </p>
            <a
              href="https://docs.zap.works/"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
            <a
              href="https://docs.zap.works/universal-ar/example-project-library/"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Demos</a
            >
          </div>
          <div class="sample-container">
            <img
              class="sample-image"
              src="https://docs.zap.works/static/img/zappar-studio/project-templates/billboardedHotspots/hotspots.gif"
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
            Zap works has a hard time placing virtual objects on the real world.
            The object tend to drift away when moving the camera. This is
            probably the case because world tracking is not supported on the
            web. They however said in the forums that they are working on world
            tracking but they’re not able to give a time frame on it. The one
            thing what I couldn’t find on the examples and demos of other
            solutions. Is the interactivity. In Zapworks you can push virtual
            buttons in AR.
          </p>
        </div>

        <div class="container">
          <h2>Features</h2>
          <p>
            Not all features of Zapworks are available on the web. For example
            world tracking is one of those features that don’t work on the web.
            <a
              href="https://docs.zap.works/general/platform/webar-and-app-platforms/"
              target="_blank"
              >Supported Features</a
            >
          </p>
          <div>
            <h3>Image Tracking</h3>
            <li>
              This makes it possible to create augmented reality experiences
              where digital content appears attached to a physical image as it
              moves around in the camera view
            </li>
          </div>
          <div>
            <h3>Face Tracking</h3>
            <li>
              Face Group: Allows the attachment of 2D/3D objects on the users
              face
            </li>
            <li>
              Face Paint: Projects an image on the users face.
            </li>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>Safari (iOS 11.3+)</li>
          <li>Chrome</li>
          <h3>3D JS FRAMEWORKS AND GAME ENGINES</h3>
          <li>Vanilla JavaScript</li>
          <li>Unity</li>
          <li>PlayCanvas</li>
          <li>A-FRAME</li>
          <li>Three.js</li>
          <li>React Three.js</li>
          <li>Babylon.js</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>

          <h3>Starter - $55 / month</h3>
          <li>Unlimited projects</li>
          <li>Team members: 1</li>
          <li>No Additional members</li>
          <li>Views (Zapper Hosted): 12k / year</li>
          <li>Additional views: $25 / thousand</li>
          <li>Support level: Forum only</li>

          <h3>Pro - $175 / month</h3>
          <li>Unlimited projects</li>
          <li>Team members: 3</li>
          <li>Additional members: $270 / year</li>
          <li>Views (zapper hosted): 30k / year</li>
          <li>Additional views: $20 / thousand</li>
          <li>Support level: Email support</li>

          <h3>Enterprise - $Custom / month</h3>
          <li>Unlimited projects</li>
          <li>Team members: 10</li>
          <li>Additional members: $140 / year</li>
          <li>Views (zapper hosted): 100k / year</li>
          <li>Additional views: from $6 / thousand</li>
          <li>Support level: Priority support</li>
          <li>And more..</li>
          <p>
            On the website you can find more detailed information about the
            pricing:
            <a href="https://zap.works/pricing/" target="_blank"
              >Pricing Plans</a
            >
          </p>
        </div>

        <div class="container">
          <h2>Sources</h2>
          <p>
            <a href="https://zap.works/" target="_blank">Zapworks</a>
          </p>
          <p>
            <a href="https://www.zappar.com/" target="_blank">Zappar</a>
          </p>
          <p>
            <a
              href="https://docs.zap.works/general/platform/webar-and-app-platforms/"
              target="_blank"
              >WebAR and App Platforms</a
            >
          </p>
          <p>
            <a href="https://docs.zap.works/universal-ar/" target="_blank"
              >JS Frameworks and Game Enignes</a
            >
          </p>
          <p>
            <a
              href="https://docs.zap.works/studio/getting-started/world-tracking/"
              target="_blank"
              >World Tracking</a
            >
          </p>
          <p>
            <a
              href="https://forum.zap.works/t/world-tracking-in-webar/5611"
              target="_blank"
              >World Tracking in Web AR</a
            >
          </p>
          <p>
            <a
              href="https://docs.zap.works/studio/getting-started/image-tracking/"
              target="_blank"
              >Image Tracking</a
            >
          </p>
          <p>
            <a
              href="https://docs.zap.works/studio/getting-started/face-tracking/"
              target="_blank"
              >Face Tracking</a
            >
          </p>
          <p>
            <a
              href="https://zap.works/showcase/"
              target="_blank"
              >Showcase</a
            >
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

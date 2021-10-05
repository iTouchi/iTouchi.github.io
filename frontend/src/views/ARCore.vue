<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>ARCore</h1>
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
              href="https://developers.google.com/ar/develop"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
          </div>
          <div class="sample-container">
            <img
              class="sample-image"
              src="https://www.auganix.org/wp-content/uploads/2019/12/Google-Depth-API-Occlusion-Physics.gif"
              alt="ARCore Depth"
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
            Although AR core is Google’s AR platform. It does not work on the
            browser. To use it on the browser WebXR is required. The WebXR
            standard provides augmented reality capabilities in a web browser.
            On Google Chrome, WebXR uses ARCore to provide AR functionalities on
            supported Android devices. See the <b>WebXR</b> page for more
            information.
          </p>
          <p>
            Not all ARCore features are available in WebXR. Features like Hit
            Test, Anchors, Depth API and lighting estimation are available right
            now. But features like Plane Detection, Augmented Faces, Augmented
            Images and Instant Placement are in development or are not available
            on the web.
          </p>
          <p>
            <a
              href="https://developers.google.com/ar/develop/webxr/arcore-comparison"
              >Feature list and availability</a
            >
          </p>
        </div>
        <div class="container">
          <h2>Features</h2>
          <div>
            <h3>Motion Tracking</h3>
            <p>
              Allows the phone to understand and track its position relative to
              the world.
            </p>
          </div>
          <div>
            <h3>Environment Understanding</h3>
            <p>
              Allows the phone to detect the size and location of all type of
              surfaces: horizontal, vertical and angled surfaces like the
              ground, a coffee table or walls.
            </p>
          </div>
          <div>
            <h3>Depth Understanding</h3>
            <p>
              ARcore creates depth maps. This brings possibilities like making
              virtual objects collide with observed surfaces and to make virtual
              objects appear behind real world objects.
            </p>
          </div>
          <div>
            <h3>Light Estimation</h3>
            <p>
              Allows the phone to estimate the environment’s current lighting
              conditions. Based on that information ARCore lights the virtual
              objects under the same conditions as the environment.
            </p>
          </div>
          <div>
            <h3>User Interaction</h3>
            <p>
              This allows users to select or interact with objects in the
              environment.
            </p>
          </div>
          <div>
            <h3>Oriented Points</h3>
            <p>
              Oriented points lets you place virtual objects on angled surfaces.
              ARCore estimates the angle of the surfaces area this does not work
              properly on areas without a texture.
            </p>
          </div>
          <div>
            <h3>Augmented Images</h3>
            <p>
              This features responses to 2D images such as a product packaging.
              ARCore can also track moving images for example a billboard on the
              side of a moving bus. When the camera sees this image it can
              trigger an AR experience
            </p>
          </div>
          <div>
            <h3>Anchors</h3>
            <p>
              Using only environmental understanding can make the objects drift
              away. This can impact the realism and user experience. Anchors
              make sure that objects keep their place realistically and relative
              to each other.
            </p>
            <p>
              <b>Cloud Anchors</b> enables apps to render the same object on
              multiple devices in the same environment.
            </p>
          </div>
          <div>
            <h3>Instant Place</h3>
            <p>
              The instant placement features allow users to place AR objects
              instantly, without having to first move their device to scan the
              area.
            </p>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>Android device emulator</li>
          <li>Android (Google Play)</li>
          <li>Android (China)</li>
          <li>iOS</li>
          <a href="https://developers.google.com/ar/devices"
            >The full list of compatible devices can be found here.</a
          >
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>
          <p>ARCore is free to use</p>
        </div>

        <div class="container">
          <h2>Sources</h2>
          <p><a href="https://developers.google.com/web/updates/2018/06/ar-for-the-web" target="_blank">Augmented Reality for the web</a></p>
          <p><a href="https://developers.google.com/ar/develop/fundamentals" target="_blank">Fundamental Concepts</a></p>
          <p><a href="https://developers.google.com/ar/develop/java/augmented-images" target="_blank">Augmented Images</a></p>
          <p><a href="https://developers.google.com/ar/develop/webxr/anchors" target="_blank">Working with anchors</a></p>
          <p><a href="https://developers.google.com/ar/develop/java/depth/introduction" target="_blank">Depth</a></p>
          <p><a href="https://developers.google.com/ar/develop/java/lighting-estimation/introduction" target="_blank">Light Estimation</a></p>
          <p><a href="https://developers.google.com/ar/develop/java/instant-placement/overview" target="_blank">Instant Placement</a></p>
          <p><a href="https://developers.google.com/ar/develop/java/augmented-faces" target="_blank">Augmented Faces</a></p>
          <p><a href="https://www.auganix.org/google-announces-depth-api-updates-to-arcore-developer-platform-enabling-occlusion-in-augmented-reality/" target="_blank">Depth API Occlusion</a></p>

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

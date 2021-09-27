<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>Banuba</h1>
        <div class="container">
          <div>
            <p class="description">
              Banuba is specialized in Face AR. They have great features for
              this specific AR technology. Their documentation is also great and
              understandable. They do not support other AR technologies than
              Face-AR. The pricing of Banuba is not that open as it could be.
              You really need to contact the team to get a price specified for
              you.
            </p>
            <a
              href="https://docs.banuba.com/face-ar-sdk"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
          </div>
          <div class="sample-container">
            <video
              class="js-video-play"
              poster="https://f.hubspotusercontent10.net/hubfs/4992313/img_F_haircolor@2x-min-1.jpg"
              src="https://f.hubspotusercontent10.net/hubfs/4992313/haircolor-2.mp4"
              playsinline=""
              muted=""
              autoplay=""
              loop=""
            ></video>
          </div>
        </div>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pros and cons</h2>
          <p>
            Requires <MonoSpace class="light">WebGL 2.0</MonoSpace>. On iOS this
            version is only supported from iOS 15. Banuba is great when it comes
            to Face-AR but lacks other features of AR.
          </p>
          <p>
            Here you can see wich broswers support WebGL 2.0:
          </p>
          <!-- <p>
            <a href="https://caniuse.com/?search=webgl2"
              >Can I use WebGL 2.0?</a
            >
          </p> -->
          <iframe src="https://caniuse.com/?search=webgl2" height="480px" width="100%"></iframe>
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
            <h3>Face Detection and Tracking</h3>
            <li>Single Face Tracking</li>
            <li>Multi Face Tracking</li>
            <li>Scripting</li>
            <li>Audio Playback</li>
            <li>Mask on picture from Camera Roll</li>
          </div>
          <div>
            <h3>Rendering Engine</h3>
            <li>3d modeling and animation</li>
            <li>3d modeling and animation</li>
            <li>lighting</li>
            <li>Physically based rendering</li>
            <li>Animation billboards</li>
            <li>Skinned Mesh Animations</li>
            <li>Face Morphing</li>
            <li>High dynamic range imaging (HDRI)</li>
            <li>Video textures</li>
            <li>Multisampling anti-aliasing</li>
            <li>Sprite animation</li>
            <li>Lookup Table (LUT)</li>
            <li>Texture sequences</li>
          </div>
          <div>
            <h3>Other Features</h3>
            <li>
              Face Filter Text Layovers (Text Texture)
            </li>
            <li>Interactive Triggers</li>
            <li>Face-To-Phone Distance (Ruler)</li>
          </div>
          <div>
            <h3>Face AR SDK Add-ons</h3>
            <li>
              Background separation
            </li>
            <li>Hair segmentation</li>
            <li>Eye segmentation</li>
            <li>Lips segmentation</li>
          </div>
          <div>
            <h3>Face AR SDK Experimental Features</h3>
            <li>Pulse (Heart rate)</li>
            <li>Action Units</li>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>Android ( from Android 6.0)</li>
          <li>iOS (from iOS 10.0)</li>
          <li>
            Web (any browser with WebGL 2.0 and higher, that means iOS15 or
            higher for iOs users)
          </li>
          <li>Windows (from Windows 8.1 and up, OpenGL 4.3 and up)</li>
          <li>MacOS (MacOS 10.13 and up, OpenGL 4.1 and up)</li>
          <li>Unity</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>
          <p>Banuba has 4 kinds of pricing models:</p>
          <li>
            <b>License-based.</b> One license unit allow for one app on one
            platform
          </li>
          <li>
            <b>Feature-based.</b> The cost of the license is calculated based on
            the ordered SDK features and platforms.
          </li>
          <li>
            <b>Scalable.</b> You can extend the minimal Kit of features. The SDK
            cost changes respectively.
          </li>
          <li>
            <b>Flat.</b> You pay the same amount of money for a particular set
            of SDK features. 5. Named. The purchased license is associated with
            a specific app and client and can’t be shared with other parties.
          </li>
          <p>
            <a href="https://www.banuba.com/faq/banuba-sdk-pricings"
              >What’s Banuba SDK pricing?:</a
            >
          </p>
        </div>
        <div class="container">
          <h2>Sources</h2>
          <p>
            <a href="https://www.banuba.com/webar-sdk">Banuba WebAR</a>
          </p>
          <p>
            <a href="https://docs.banuba.com/face-ar-sdk/web/web_overview"
              >Banuba SDK Web AR</a
            >
          </p>
          <p>
            <a href="https://github.com/Banuba">Banuba Git</a>
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
          height: 400px;
          @include tablet-up {
            max-width: 600px;
          }
          .js-video-play {
            max-height: 100%;
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

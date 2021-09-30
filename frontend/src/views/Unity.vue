<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>Unity</h1>
        <div class="container">
          <div>
            <p class="description">
              Unity is a game engine that supports AR. Unity can combine ARCore
              (android) with ARKit (apple) on 1 scene. That means that you can
              develop one app/game for 2 platforms simultaneously. Unity does
              not natively support Web AR yet. But there are a couple of plugins
              which you can use to make it work. Even though most features are
              not supported on the web I still find Unity worth mentioning
              because there is a great chance they will support Web AR in the
              future.
            </p>
            <a
              href="https://unity.com/unity/features/ar"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
          </div>
          <div class="sample-container">
            <img
              class="sample-image"
              src="https://www.vrfocus.com/wp-content/uploads/2018/06/project-MARS-1.gif"
              alt="Unity AR"
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
            The down side of Unity is that it’s AR function are not yet
            available for WebGL export. There are 2 libraries/packages worth
            mentioning and to keep an eye on. But both of them are not so great
            right now. They have ambitions and will eventually become worth
            investing your time in to IF the development carries on.
          </p>
          <h3>ARWT</h3>
          <p>
            ARWT is a library that allows to build Web AR applications using
            Unity. It works as a bridge between Unity and WebXR and AR.js
            libraries. This is a great repo with great ambitions but the
            developers state that they don’t have enough time on their hands to
            work full time on this project. That’s why this is not yet an option
            to use. Unless you want to contribute to the project yourself.
          </p>
          <h3>WebXR Exporter</h3>
          <p>
            WebXR Exporter is a Unity package that lets you create VR
            experiences using Unity that you can view directly on your Web
            browser. It should work on any WebXR enabled browser. I tried this
            one out but it gives a lot of “obsolete” errors. According to
            reviews on the Unity Assets Store page, it does not work so great
            with Unity versions greater than 2018.7.14.
            <br />
            <br />
            This project is not updated since April 2020.
          </p>
        </div>

        <div class="container">
          <h2>Features</h2>
          <p>
            Unity has a couple of very great tools when it comes to AR.
            Unfortunately they are not yet available for the web.
          </p>
          <div>
            <h3>
              <a
                href="https://unity.com/unity/features/arfoundation"
                target="_blank"
                >AR Foundation</a
              >
            </h3>
            <p>
              A framework purpose-built for AR development allows you to develop
              your app once, then deploy it across multiple mobile and wearable
              AR devices. It includes core features from each platform, as well
              as unique Unity features that include photorealistic rendering,
              physics, device optimizations, and more.
            </p>
            <p>
              Unfortunately AR Foundation does not have support for Web AR at
              this point in time. That has to do with hardware limitations of
              the web. Because AR foundation does not only use the camera but
              also other systems and sensors of the phone, such as gyro,
              compass, accelerometer, etc..
            </p>
            <p>
              <a
                href="https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/index.html"
                target="_blank"
                >Feature Support Per Platform</a
              >
            </p>
            <p>
              <a
                href="https://forum.unity.com/threads/ar-foundation-and-webgl-i-know-its-not-support-just-read.626374/"
                target="_blank"
                >AR Foundation and WebGL Forum</a
              >
            </p>
          </div>
          <div>
            <h3>
              <a href="https://unity.com/products/unity-mars" target="_blank"
                >Unity Mars $600 / seat / annually</a
              >
            </h3>
            <p>
              Unity MARS provides AR creators across industries with specialized
              tools and a streamlined workflow to create AR experiences that
              intelligently interact with the real world. Unity MARS brings
              environment and sensor data into the creative workflow, so you can
              build intelligent AR apps that are context-aware and responsive to
              physical space, working in any location and with any kind of data.
            </p>
          </div>
          <div>
            <h3>
              <a
                href="https://unity.com/features/unity-as-a-library"
                target="_blank"
                >Unity as a library</a
              >
            </h3>
            <p>
              Insert AR powered by Unity directly into your existing native
              mobile app. Instead of rebuilding your app to add AR
              functionality, you can unlock the full power of Unity’s AR
              offerings by embedding into what you’ve already created.
            </p>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>ARCore (Android)</li>
          <li>ARKite (iOS)</li>
          <li>Magic Leap</li>
          <li>Hololens</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>
          <h3>Unity Personal - $0 / year / seat</h3>
          <p>
            For small businesses with a revenue/funds less than $100k in the
            last 12 months
          </p>
          <h3>Unity Plus - $399 / year / seat</h3>
          <p>
            For businesses with a revenue/funds less than $200k in the last 12
            months
          </p>
          <h3>Unity Pro - $1800 / year / seat</h3>
          <p>
            For businesses with a revenue/funds more than $200k in the last 12
            months
          </p>

          <p>
            <a href="https://store.unity.com/" target="_blank">Pricing Plans</a>
          </p>
        </div>

        <div class="container">
          <h2>Sources</h2>
          <p><a href="www.unity.com" target="_blank">Unity</a></p>
          <p><a href="https://forum.unity.com/forums/ar-vr-xr-discussion.80/" target="_blank">Unity XR Discussion</a></p>
          <p><a href="https://twitter.com/search?q=unitywebvr&src=typed_query&f=top" target="_blank">Twitter #unitywebvr</a></p>
          <h3>ARWT</h3>
          <p><a href="https://github.com/ToughNutToCrack/ARWTCrashDemo" target="_blank">Demo</a></p>
          <p><a href="https://www.youtube.com/watch?v=bcw7mwjXgpE&t=5s" target="_blank">ToughNutToCrack Webiste</a></p>
          <p><a href="https://github.com/ToughNutToCrack/ARWT/wiki" target="_blank">Documentation</a></p>
          <p><a href="https://twitter.com/tntcproject" target="_blank">Twitter</a></p>
          <p><a href="https://github.com/ToughNutToCrack/ARWT" target="_blank">Github</a></p>
          <h3>Unity WebXR Exporter</h3>
          <p><a href="https://blog.mozvr.com/unity-webxr-exporter-update/" target="_blank">Unity WebXR Exporter Update</a></p>
          <p><a href="https://github.com/MozillaReality/unity-webxr-export" target="_blank">Github</a></p>
          <p><a href="https://assetstore.unity.com/packages/tools/integration/webxr-exporter-109152" target="_blank">Unity Asset Store</a></p>
          <p><a href="https://github.com/immersive-web/webxr-polyfill" target="_blank">Polyfilled WebXR</a></p>
          <p><a href="https://assetstore.unity.com/packages/tools/integration/webxr-exporter-109152#reviews" target="_blank">WebXR Exporter Issues</a></p>
          <h3>AR Foundation</h3>
          <p><a href="https://forum.unity.com/threads/ar-foundation-and-webgl-i-know-its-not-support-just-read.626374/" target="_blank">AR Foundation and WebGL Forum</a></p>
          <h3>XR Interaction Toolkit</h3>
          <p><a href="https://blog.unity.com/technology/xr-interaction-toolkit-preview-package-is-here" target="_blank">Package Preview</a></p>
          <p><a href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@1.0/manual/index.html" target="_blank">Documentation</a></p>
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

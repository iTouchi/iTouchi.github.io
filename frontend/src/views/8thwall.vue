<template>
  <div class="page router-example">
    <header>
      <NavBar class="inverted" />
      <div class="full-width">
        <h1>8th Wall</h1>
        <div class="container">
          <div>
            <p class="description">
              8th wall is a complete AR solution.
            </p>
            <a
              href="https://www.8thwall.com/docs/web/"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Documentation</a
            >
            <a
              href="https://www.8thwall.com/8thwall/cubemap-aframe"
              class="button"
              target="_blank"
              rel="noopener noreferrer"
              >Demos</a
            >
          </div>
          <div class="sample-container">
            <img
              class="sample-image"
              src="https://media2.giphy.com/media/M7mqsZshiOs5eWP4FX/giphy.gif?cid=790b76117e87743cf563e64a2d9eb38e4c48cd1e2c18b75e&rid=giphy.gif&ct=g"
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
            8Th wall is great when it comes to AR solutions. It has very
            advanced features like real-time reflections and lightning
            estimation on AR objects. 8th wall can be integrated in a lot of
            different game engines and has support for the most popular 3D
            frameworks. But this complete solution comes with a high price tag.
          </p>
        </div>

        <div class="container">
          <h2>Features</h2>
          <p>
            Features like world effects are really advanced in 8Th wall. But for
            example Face AR is not that impressive.
            <a href="https://www.8thwall.com/docs/web/#supported-features"
              >Supported Features</a
            >
          </p>
          <div>
            <h3>World Effects</h3>
            <li>Surface Estimation</li>
            <li>lightning Estimation</li>
            <li>Relative Scale</li>
            <li>Reflections</li>
          </div>
          <div>
            <h3>Image Targets</h3>
            <li>Works on both flat and curved surfaces</li>
          </div>
          <div>
            <h3>Face Effects</h3>
            <li>
              Anchors 3D Objects to attachement point on a face
            </li>
          </div>
        </div>
        <div class="container">
          <h2>Compatibility</h2>
          <li>Safari (iOS 11+)</li>
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Samsung Internet</li>
          <li>Microsoft Edge</li>
          <h3>3D JS FRAMEWORKS AND GAME ENGINES</h3>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>PlayCanvas</li>
          <li>A-FRAME</li>
          <li>Three.js</li>
          <li>Babylon.js</li>
          <li>Amazon Sumerian</li>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>Pricing</h2>

          <h3>Pro - $99 / month / entire team</h3>
          <li>Unlimited seats</li>
          <li>AR Engine</li>
          <li>Cloud-based code editor</li>
          <li>WebAR project templates</li>
          <li>Free hosting on 8Th Wall</li>
          <li>Ability to selfhost</li>
          <li>Publish non-commercial projects</li>

          <h3>Enterprise - $Customized / month / entire team</h3>
          <li>Everything in Pro Plan</li>
          <li>Custom contracts and invoicing</li>
          <li>Long-term commercial licenses</li>
          <li>Access to exclusive platform APIs</li>
          <li>Priority technical support</li>

          <h3>Commercial licenses</h3>
          <p>
            Commercial projects also require the purchase of a Commercial
            License prior to launching. This depends on how many views you think
            the projects is going to have.
          </p>
          <li><b>Basic: </b>$1250 / 25k views / $0.01 per additional view</li>
          <li>
            <b>Standard: </b>$3000 / 500k views / $0.01 per additional view
          </li>
          <li>
            <b>Premium: </b>$5000 / 1M views / $0.0025 per additional view
          </li>

          <p>
            <a href="https://www.8thwall.com/pricing" target="_blank"
              >Pricing Plans</a
            >
          </p>
        </div>

        <div class="container">
          <h2>Sources</h2>
          <p>
            <a href="https://www.8thwall.com/blog" target="_blank"
              >8th Wall blog</a
            >
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=HU2XNR4aUwo" target="_blank"
              >Getting Started With 8th Wall XR - Augmented Reality App Development</a
            >
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=NPI6hnHlNgs" target="_blank"
              >8th Wall Controller Overview - Build an AR App (unity): </a
            >
          </p>
          <p>
            <a href="https://www.8thwall.com/8thwall" target="_blank"
              >More demos</a
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

<template>
  <div class="page store-example">
    <header>
      <NavBar class="inverted"/>
      <div class="full-width">
        <h1>{{translations.intro.title}}</h1>
        <p class="description">{{translations.intro.description}}</p>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
          <h2>{{translations.general.title}}</h2>
          <p v-html="translations.general.description.introduction"/>
          <p v-html="translations.general.description.secondParagraph"/>
          <p v-html="translations.general.description.thirdParagraph"/>
        </div>
        <div class="container">
          <h2 @click="changeLanguage">{{translations.changeLanguage.title}}</h2>
          <p v-html="translations.changeLanguage.description.introduction"/>
          <button @click="changeLanguage">{{$store.getters['translations/getCurrentLanguage'] === 'en' ? 'NL' : 'EN'}}</button>
          <h2>{{translations.limitations.title}}</h2>
          <p>{{translations.limitations.description.introduction}}</p>
          <p>{{translations.limitations.description.secondParagraph}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'TranslationsExample',
  components: {
    NavBar
  },
  computed: {
    translations() {
      return this.$store.getters['translations/getTranslationsByPageName']('translations');
    }
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {
    changeLanguage() {
      this.$store.dispatch('translations/changeLanguage', this.$store.getters['translations/getCurrentLanguage'] === 'en' ? 'nl' : 'en');
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

          &:not(:first-child) {
            margin-top: 24px;

            @include mobile {
              margin-top: 32px;
            }
          }
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
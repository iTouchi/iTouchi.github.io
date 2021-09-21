<template>
  <div class="page getting-started">
    <header>
      <NavBar class="inverted"/>
      <div class="full-width">
        <h1>Getting Started</h1>
        <p class="description">Hey there! If you're reading this it means you successfully managed to clone LiveWall's Engagement boilerplate, sweet! In this page we'll be touching on some of our best practices and the general use of this boilerplate.</p>
      </div>
    </header>
    <section class="content">
      <div class="full-width">
        <div class="container">
            <h2>Vue file structure</h2>
            <p>This template comes with a handful of premade styling files under <MonoSpace>@/assets/styles</MonoSpace>. This is where we define things like mixins, CSS variables, fonts and anything you might want to have access to inside of your components.</p>
        </div>
        <div class="container">
            <h2>Styling</h2>
            <p>This template comes with a handful of premade styling files under <MonoSpace>@/assets/styles</MonoSpace>. This is where we define things like mixins, CSS variables, fonts and anything you might want to have access to inside of your components.</p>
            <p>Try to keep component-specific styling inside of the file itself to avoid confusion. It's not necessary to keep all component styles scoped but it's recommended for smaller ones to avoid conflict styles on other pages.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import MonoSpace from '@/components/MonoSpace';

export default {
    name: 'GettingStarted',
    components: {
        NavBar,
        MonoSpace
    }
}
</script>

<style lang="scss" scoped>
.page.getting-started {
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
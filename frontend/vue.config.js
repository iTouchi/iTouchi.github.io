module.exports = {
    publicPath: '/iTouchi.github.io/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/styles/main.scss";`
        }
      }
    }
};
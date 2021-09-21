<template>
  <span class="monospace"><slot></slot></span>
</template>

<script>

export default {
  name: 'MonoSpace',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.monospace {
    padding: 2px 4px;
    font-family: 'Lucida Console', monospace;
    font-size: 12px;
    color: black;

    background-color: #fafafa;
    border: 1px solid #c9c9c9;

    &.dark {
        background-color: grey;
        border: 1px solid darkgrey;
    }
}
</style>

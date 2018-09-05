<template>
  <v-toolbar app>
    <v-btn large icon @click="openMenu" class="fit-width">
      <img width="84px" src="/half-stack-logo.png" alt="logo"/>
    </v-btn>
    <v-btn flat large to="/" class="title-wrapper px-0">
      <span class="site-title headline bold" v-text="title"/>
    </v-btn>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    openMenu() {
      this.$store.commit('set-menu', true)
    },
  },
}
</script>

<style scoped>
.title-wrapper:before {
  background-color: initial !important;
}
.site-title {
  text-transform: capitalize;
}
</style>

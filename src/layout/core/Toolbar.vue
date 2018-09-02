<template>
  <v-toolbar app>
    <v-btn large icon @click="openMenu">
      <v-icon large>menu</v-icon>
    </v-btn>
    <v-btn flat large to="/" class="title-wrapper px-0">
      <span class="site-title headline bold" v-text="title"/>
    </v-btn>
    <v-spacer/>
    <dark-mode-toggle/>
  </v-toolbar>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue'

export default {
  props: {
    title: String,
  },
  components: {
    DarkModeToggle,
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

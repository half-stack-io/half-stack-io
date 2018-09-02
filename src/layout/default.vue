<template>
  <v-app class="app-root" :dark="$store.getters.dark">
    <main-menu/>
    <toolbar title="Half-Stack"/>
    <stage/>
    <page-footer/>
  </v-app>
</template>

<script>
import MainMenu from './core/MainMenu.vue'
import Toolbar from './core/Toolbar.vue'
import Stage from './core/Stage.vue'
import PageFooter from './core/PageFooter.vue'

export default {
  components: {
    MainMenu,
    Toolbar,
    PageFooter,
    Stage,
  },
  data: () => ({
    drawer: false,
  })
}
</script>

<style scoped>
.app-root {
  width: 100vw;
  height: 100vh;
}
.app-root >>> .application--wrap {
  width: 100% !important;
  height: 100% !important;
}
</style>


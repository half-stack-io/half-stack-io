<template>
  <v-navigation-drawer temporary fixed v-model="menu" app>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>compare_arrows</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Example</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    menu: {
      get() {
        return this.$store.getters.menu
      },
      set(val) {
        if (this.$store.getters.menu != val) {
          this.$store.commit('set-menu', val)
        }
      },
    }
  },
}
</script>

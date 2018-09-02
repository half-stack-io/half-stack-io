<template>
  <v-content class="stage">
    <router-view/>
  </v-content>
</template>

<style scoped>
.stage,
.stage >>> .v-content__wrap  {
  width: 100% !important;
  height: 100% !important;
}
.stage {
  width: 100% !important;
  height: 100% !important;
}
</style>

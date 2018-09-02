<template>
  <v-flex fill center>
    <v-flex row no-grow>
      <v-btn to="/">
        Home
      </v-btn>
      <v-btn to="/help">
        Help
      </v-btn>
      <v-btn to="/example">
        Example
      </v-btn>
    </v-flex>
  </v-flex>
</template>


<script>
export default {
  title: 'About Us',
  path: '/corp/about'
}
</script>

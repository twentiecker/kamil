<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <Header />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

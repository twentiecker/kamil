<template>
  <v-app id="inspire">
    <Header />
    <router-view></router-view>
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

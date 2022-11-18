<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <router-link to="/">
        <v-img
          lazy-src="http://kamilpasca.itb.ac.id/wp-content/uploads/logoweb.png"
          max-height="120"
          max-width="120"
          src="http://kamilpasca.itb.ac.id/wp-content/uploads/logoweb.png"
        ></v-img>
      </router-link>

      <div v-for="link in links" :key="link.route">
        <router-link :to="{ path: link.route }">
          <v-btn text>
            {{ link.title }}
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <div v-for="(social, i) in socials" :key="i">
        <a class="ml-3" :href="social.route">
          <i :class="social.icon"></i>
        </a>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'HOME', route: '/' },
      { title: 'ABOUT US', route: '/About' },
      { title: 'ADIWIDYA', route: '/Adiwidya' },
      { title: 'CONTACT US', route: '/Contact' },
    ],
    socials: [
      {
        icon: 'bx bxl-twitter bx-sm bx-tada-hover',
        route: 'https://www.instagram.com/kamilpascaitb/?next=%2F',
      },
      {
        icon: 'bx bxl-facebook bx-sm bx-tada-hover',
        route: 'https://www.instagram.com/kamilpascaitb/?next=%2F',
      },
      {
        icon: 'bx bxl-instagram bx-sm bx-tada-hover',
        route: 'https://www.instagram.com/kamilpascaitb/?next=%2F',
      },
      {
        icon: 'bx bxl-youtube bx-sm bx-tada-hover',
        route: 'https://www.instagram.com/kamilpascaitb/?next=%2F',
      },
    ],
  }),
};
</script>

<template>
  <div>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list-item>
        <v-img width="10%" src="../assets/logo.png"></v-img>

        <v-list-item-content>
          <v-list-item-title></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <router-link :to="item.route">
            <v-list-item-icon>
              <i :class="item.icon"></i>
            </v-list-item-icon>
          </router-link>
          <router-link :to="item.route">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <router-link to="/">
          <v-img
            lazy-src="../assets/logo.png"
            max-height="120"
            max-width="120"
            src="../assets/logo.png"
          ></v-img>
        </router-link>

        <div class="hidden-sm-and-down" v-for="link in links" :key="link.route">
          <router-link :to="{ path: link.route }">
            <v-btn text>
              {{ link.title }}
            </v-btn>
          </router-link>
        </div>

        <v-spacer></v-spacer>
        <div v-for="(social, i) in socials" :key="i">
          <a class="hidden-sm-and-up ml-3" :href="social.route" target="_blank">
            <i :class="social.iconXs"></i>
          </a>
          <a class="hidden-xs-only ml-3" :href="social.route" target="_blank">
            <i :class="social.iconSm"></i>
          </a>
        </div>
      </v-container>
    </v-app-bar>
  </div>
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
        iconSm: 'bx bxl-instagram-alt bx-sm bx-tada-hover',
        iconXs: 'bx bxl-instagram-alt bx-xs bx-tada-hover',
        route: 'https://www.instagram.com/kamilpascaitb/',
      },
      {
        iconSm: 'bx bxl-youtube bx-sm bx-tada-hover',
        iconXs: 'bx bxl-youtube bx-xs bx-tada-hover',
        route: 'https://www.youtube.com/channel/UCmaX2KczM1C9dRE0jsbs2xQ',
      },
      {
        iconSm: 'bx bxl-facebook bx-sm bx-tada-hover',
        iconXs: 'bx bxl-facebook bx-xs bx-tada-hover',
        route: 'https://id-id.facebook.com/kamilpascasarjanaitb/',
      },
      {
        iconSm: 'bx bxl-twitter bx-sm bx-tada-hover',
        iconXs: 'bx bxl-twitter bx-xs bx-tada-hover',
        route: 'https://twitter.com/kamilpascaitb',
      },
    ],
    items: [
      {
        title: 'Home',
        icon: 'bx bxs-home-alt-2 bx-sm bx-tada-hover',
        route: '/',
      },
      {
        title: 'About Us',
        icon: 'bx bxs-info-circle bx-sm bx-tada-hover',
        route: '/About',
      },
      {
        title: 'Adiwidya',
        icon: 'bx bxs-award bx-sm bx-tada-hover',
        route: '/Adiwidya',
      },
      {
        title: 'Contact Us',
        icon: 'bx bxs-contact bx-sm bx-tada-hover',
        route: '/Contact',
      },
    ],
    drawer: false,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

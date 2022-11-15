<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-img
          lazy-src="http://kamilpasca.itb.ac.id/wp-content/uploads/logoweb.png"
          max-height="120"
          max-width="120"
          src="http://kamilpasca.itb.ac.id/wp-content/uploads/logoweb.png"
        ></v-img>

        <!-- Navigation -->
        <v-btn v-for="link in links" :key="link" text>
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- Content -->
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ['HOME', 'ABOUT US', 'ADIWIDYA', 'CONTACT US'],
  }),
};
</script>

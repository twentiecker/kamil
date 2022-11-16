<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <!-- Content -->
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <v-container class="col-11 mx-auto py-10">
              <v-card>
                <v-toolbar flat color="primary" dark>
                  <v-toolbar-title><h3>Portal Adiwidya 10</h3></v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                  <v-tab v-for="tab in tabs" :key="tab">
                    <i :class="tab.icon"></i>
                    <span class="ml-2">{{ tab.name }}</span>
                  </v-tab>

                  <v-tab-item v-for="content in contents" :key="content">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          {{ content }}
                        </p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      { icon: 'bx bx-info-circle bx-sm bx-tada-hover', name: 'Informasi' },
      { icon: 'bx bx-exit bx-sm bx-tada-hover', name: 'Pendaftaran' },
      { icon: 'bx bx-notepad bx-sm bx-tada-hover', name: 'Template' },
      { icon: 'bx bx-timer bx-sm bx-tada-hover', name: 'Countdown' },
      { icon: 'bx bx-camera bx-sm bx-tada-hover', name: 'Dokumentasi' },
    ],
    contents: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum voluptatum officiis quas possimus quisquam inventore nisi voluptatem! Velit quo consectetur vel distinctio accusantium nulla dolore, vitae numquam architecto ullam fugit blanditiis soluta. Ex odio quae officia voluptatum autem ipsum pariatur, porro reiciendis dolore totam, dolorem sapiente maiores eaque aut!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum voluptatum officiis quas possimus quisquam inventore nisi voluptatem! Velit quo consectetur vel distinctio accusantium nulla dolore, vitae numquam architecto ullam fugit blanditiis soluta. Ex odio quae officia voluptatum autem ipsum pariatur, porro reiciendis dolore totam, dolorem sapiente maiores eaque aut!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum voluptatum officiis quas possimus quisquam inventore nisi voluptatem! Velit quo consectetur vel distinctio accusantium nulla dolore, vitae numquam architecto ullam fugit blanditiis soluta. Ex odio quae officia voluptatum autem ipsum pariatur, porro reiciendis dolore totam, dolorem sapiente maiores eaque aut!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum voluptatum officiis quas possimus quisquam inventore nisi voluptatem! Velit quo consectetur vel distinctio accusantium nulla dolore, vitae numquam architecto ullam fugit blanditiis soluta. Ex odio quae officia voluptatum autem ipsum pariatur, porro reiciendis dolore totam, dolorem sapiente maiores eaque aut!',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum voluptatum officiis quas possimus quisquam inventore nisi voluptatem! Velit quo consectetur vel distinctio accusantium nulla dolore, vitae numquam architecto ullam fugit blanditiis soluta. Ex odio quae officia voluptatum autem ipsum pariatur, porro reiciendis dolore totam, dolorem sapiente maiores eaque aut!',
    ],
  }),
};
</script>

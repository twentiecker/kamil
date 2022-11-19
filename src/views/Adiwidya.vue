<template>
  <v-container>
    <v-row>
      <!-- Content -->
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
          <v-container class="col-10 mx-auto py-10">
            <!-- Adiwidya 10 -->
            <h1 align="center">Portal Adiwidya</h1>
            <v-card class="mt-10">
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title><h3>Adiwidya 10</h3></v-toolbar-title>
              </v-toolbar>
              <v-tabs vertical>
                <v-tab v-for="(tab, i) in tabs" :key="i">
                  <i :class="tab.icon"></i>
                  <span class="ml-2">{{ tab.name }}</span>
                </v-tab>

                <v-tab-item v-for="(content, i) in contents" :key="i">
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

            <!-- Adiwidya 9 -->
            <v-card class="mt-10">
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title><h3>Adiwidya 9</h3></v-toolbar-title>
              </v-toolbar>
              <v-tabs show-arrows>
                <v-tab v-for="(tab, i) in tabs9" :key="i">
                  <i :class="tab.icon"></i>
                  <span class="ml-2">{{ tab.name }}</span>
                </v-tab>

                <v-tab-item class="mt-5 mx-3">
                  <v-carousel
                    cycle
                    height="350"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item v-for="(slide, i) in slidesTalk" :key="i">
                      <v-img
                        lazy-src="require(`../assets/${slide}`)"
                        :src="require(`../assets/${slide}`)"
                      ></v-img>
                    </v-carousel-item>
                  </v-carousel>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Unde dicta ratione soluta, assumenda id, esse
                        eveniet voluptas fugiat doloribus, aliquam repellat
                        nesciunt animi vero dolorum omnis cumque temporibus
                        ullam odio ea eligendi aspernatur quo quod? Iste, vitae
                        fugiat quos amet blanditiis voluptatum ab maxime minus
                        nostrum in, fuga doloremque eligendi!
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item class="mt-5 mx-3">
                  <v-carousel
                    cycle
                    height="100%"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(slide, i) in slidesPaper"
                      :key="i"
                      :src="require(`../assets/${slide}`)"
                    >
                    </v-carousel-item>
                  </v-carousel>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa tempore odio id deserunt est itaque vel
                        quisquam officiis sunt dolor! Officiis, soluta minus
                        provident ipsum delectus eius molestiae, nostrum sequi
                        quos consequatur at suscipit autem ea fugit, possimus ab
                        enim iure illo facere a quibusdam? Iure odio officiis
                        nemo dolore.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item class="mt-5 mx-3">
                  <v-carousel
                    cycle
                    height="100%"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(slide, i) in slidesInter"
                      :key="i"
                      :src="require(`../assets/${slide}`)"
                    >
                    </v-carousel-item>
                  </v-carousel>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium, ad rem! Eveniet est assumenda nihil animi
                        error excepturi quod, consequuntur corrupti velit harum
                        esse reprehenderit nobis eos expedita debitis illum
                        beatae veritatis amet accusantium temporibus voluptatum
                        laboriosam labore fuga tenetur? Molestiae dolorem
                        temporibus numquam hic blanditiis. Aliquid ad facere a.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item class="mt-5 mx-3">
                  <div align="center">
                    <h3>
                      PROSIDING SENDIPA <br />(Seminar Nasional Adiwidya
                      Pascasarjana)
                    </h3>
                    <p class="mt-2">
                      Prosiding SENDIPA (Seminar Nasional Adiwidya
                      Pascasarjana), ISSN 2746-4865, is proceeding which is
                      issued one edition per year as result of Adiwidya
                      Conference each year. The proceeding covers areas include,
                      but are not limited to science, technology, energy,
                      education, environment, health and humanity. First
                      Prosiding SENDIPA is issued on 2015 (ISSN 2447-3026) with
                      media CD and started on 2020 by media online (ISSN
                      2746-4865). Prosiding SENDIPA is managed by Kamil
                      Pascasarjana ITB through Adiwidya Committee. Kamil
                      Pascasarjana ITB is a graduate student organization from
                      Institut Teknologi Bandung, Indonesia.
                    </p>
                  </div>
                  <div class="pt-3">
                    <h3 align="center">Editorial Team of Prosiding SENDIPA</h3>
                    <v-expansion-panels class="mt-2 mb-5">
                      <v-expansion-panel v-for="(item, i) in items" :key="i">
                        <v-expansion-panel-header>
                          {{ item.header }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div v-for="(content, i) in item.content" :key="i">
                            <div
                              v-if="item.content.length == 1"
                              v-html="content"
                            ></div>
                            <div v-else>
                              <ul>
                                <li>
                                  <div v-html="content"></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Adiwidya 10
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
    // Adiwidya 9
    tabs9: [
      { icon: 'bx bx-info-circle bx-sm bx-tada-hover', name: 'Talkshow' },
      { icon: 'bx bx-exit bx-sm bx-tada-hover', name: 'Call for Paper' },
      {
        icon: 'bx bx-notepad bx-sm bx-tada-hover',
        name: 'International Webinar',
      },
      { icon: 'bx bx-timer bx-sm bx-tada-hover', name: 'Prosiding SENDIPA' },
    ],
    slidesTalk: [
      'talk/3a-Banner-Awal-Talkshow.png',
      'talk/talkshow-banner-scaled.jpg',
    ],
    slidesPaper: [
      'paper/bannerpanjang1.png',
      'paper/7a-Banner-Timeline-2-timelineCFP.png',
      'paper/bannerpanjang3.png',
      'paper/8-Banner-Rules.png',
    ],
    slidesInter: ['inter/1-Banner-Webinar.png', 'inter/2-Banner-Speaker.png'],
    items: [
      {
        header: 'Editor in Chief',
        content: [
          'Pembina KAMIL Pascasarjana ITB<br />Dr. Techn. Muhammad Zuhri Catur Candra,S.T.,M.T.<br />(Institut Teknologi Bandung, Indonesia)',
        ],
      },
      {
        header: 'Advisory Editor Board',
        content: [
          'Hendarko, ST., M.Sc.<br />(Institut Teknologi Bandung, Indonesia)',
          'Dewi Larasati, S.T, M.T, Ph.D.<br />(Institut Teknologi Bandung, Indonesia)',
        ],
      },
      {
        header: 'Contributor Reviewers',
        content: [
          'dr. Dani Ferdian, M.KM.<br />(Universitas Padjadjaran, Indonesia)',
          'dr. Insi Farisa Desy Arya, M.Si.<br />(Universitas Padjadjaran, Indonesia)',
          'Prof. Ir. Tutuka Ariadji, M.Sc., Ph.D.<br />(Institut Teknologi Bandung, Indonesia)',
          'Burhanuddin Halimi, S.T., M.T., Ph.D.<br />(Institut Teknologi Bandung, Indonesia)',
          'Fetty Fitriyanti Lubis, S.T., M.T.<br />(Institut Teknologi Bandung, Indonesia)',
          'Dr. Dwi Purnomo S.T.P., M.T.<br />(Universitas Padjadjaran, Indonesia)',
          'Dr. Muhammad Fedryansyah, S.Sos., M.Si.<br />(Universitas Padjadjaran, Indonesia)',
          'Budi Gunawan, M.A., Ph.D.<br />(Universitas Padjadjaran, Indonesia)',
          'Sahadi Humaedi, S.Sos., M.Si.<br />(Universitas Padjadjaran, Indonesia)',
          'Alhilal Furqan, B.Sc., M.Sc., Ph.D.<br />(Institut Teknologi Bandung, Indonesia)',
        ],
      },
      {
        header: 'Editing Team',
        content: ['Adiwidya Committee'],
      },
    ],
  }),
};
</script>

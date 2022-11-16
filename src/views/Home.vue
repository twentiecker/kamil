<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <!-- Content -->
        <v-col align="center">
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <v-container class="col-11 mx-auto py-10">
              <div class="pt-2">
                <subtitle-1
                  >بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ
                  الرَّحِيْمِ</subtitle-1
                >
                <h1>Selamat Datang</h1>
                <subtitle-1
                  >Portal Informasi – Keluarga Mahasiswa Islam (KAMIL)
                  Pascasarjana ITB</subtitle-1
                >
              </div>
              <div class="mt-10">
                <LazyYoutube
                  class="mb-3"
                  v-for="video in videos"
                  :key="video"
                  :src="video"
                />
              </div>
              <div class="pt-10">
                <h1>Adiwidya 9</h1>
                <p class="pt-3">
                  Merupakan salah satu kegiatan terbesar dari KAMIL Pascasarjana
                  ITB yang bertujuan sebagai wadah bagi mahasiswa untuk membuka
                  wawasan terkait isu nasional, permasalahan negara, keresahan
                  masyarakat serta mengangkat nilai mahasiswa untuk menyampaikan
                  gagasan baik secara sistematis maupun metodologis yang dapat
                  dipertanggungjawabkan. Pada tahun 2021 ini, Adiwidya kembali
                  hadir dalam series Adiwidya 9 dengan tema
                  <b
                    >“Smart-City sebagai Solusi Alternatif Pembangunan dan
                    Pemerataan Kota di Indonesia”</b
                  >.
                </p>
              </div>
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
    videos: [
      'https://youtu.be/GClAnMUgV54',
      'https://youtu.be/j73KKLliONA',
      'https://youtu.be/GqsTgIDVCBs',
    ],
  }),
};
</script>

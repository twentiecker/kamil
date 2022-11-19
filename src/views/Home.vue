<template>
  <v-container>
    <v-row>
      <!-- Content -->
      <v-col align="center">
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
          <v-container class="col-10 mx-auto py-10">
            <div class="pt-2">
              <div class="text-subtitle-1">
                بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
              </div>
              <h1>Selamat Datang</h1>
              <div class="text-subtitle-1">
                Portal Informasi – Keluarga Mahasiswa Islam (KAMIL) Pascasarjana
                ITB
              </div>
            </div>
            <div class="mt-10">
              <div
                v-for="(video, i) in videos"
                :key="i"
                class="mb-3"
                style="--aspect-ratio: 16/9"
              >
                <iframe
                  width="956"
                  height="538"
                  :src="video"
                  allowfullscreen
                ></iframe>
              </div>
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
</template>

<script>
export default {
  data: () => ({
    videos: [
      'https://www.youtube.com/embed/GClAnMUgV54',
      'https://www.youtube.com/embed/j73KKLliONA',
      'https://www.youtube.com/embed/GqsTgIDVCBs',
    ],
  }),
};
</script>

<style scoped>
[style*='--aspect-ratio'] > :first-child {
  width: 100%;
}
[style*='--aspect-ratio'] > img {
  height: auto;
}
@supports (--custom: property) {
  [style*='--aspect-ratio'] {
    position: relative;
  }
  [style*='--aspect-ratio']::before {
    content: '';
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }
  [style*='--aspect-ratio'] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>

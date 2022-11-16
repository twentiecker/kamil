<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <!-- Content -->
        <v-col align="center">
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <v-container class="col-11 mx-auto py-10">
              <h1>
                Badan Pengurus Harian (BPH) Aktif KAMIL Pascasarjana ITB
                2020-2021
              </h1>
              <v-img
                class="mt-10"
                lazy-src="../../public/BPH-min.png"
                max-width="100%"
                src="../../public/BPH-min.png"
              ></v-img>
              <div class="pt-10" align="justify">
                <h1>Visi</h1>
                <h3>
                  KAMIL menjadi rumah cendekiawan muslim berakidah kuat dan
                  berperan sebagai telaga maslahat bangsa
                </h3>
                <h1 class="mt-3">Misi</h1>
                <ol>
                  <li>
                    KAMIL Beriman. KAMIL sebagai tempat belajar ilmu Islam dan
                    sarana meningkatkan kualitas karakter muslim.
                  </li>
                  <li>
                    KAMIL Berkawan. KAMIL tempat berbagi kebahagian. Bekerja
                    bersama seluruh civitas akademika ITB dan masyarakat.
                  </li>
                  <li>
                    KAMIL Berperan. KAMIL mengabdi untuk umat melalui aksi dan
                    gagasan keilmuan sebagi langkah perbaikan bangsa.
                  </li>
                </ol>
                <h1 class="mt-10">Daftar Pengurus Harian</h1>
                <Member />
              </div>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Member from '../components/Member.vue';

export default {
  components: {
    Member,
  },
};
</script>

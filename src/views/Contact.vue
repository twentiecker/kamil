<template>
  <v-container>
    <v-row>
      <!-- Content -->
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
          <v-container class="col-10 mx-auto py-10">
            <div class="pt-2">
              <h2 class="mb-1">Location Map</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7921.942153769916!2d107.611222!3d-6.894063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc25ecdcdcd8bea8e!2sKamil%20Pascasarjana%20ITB!5e0!3m2!1sen!2sid!4v1668555973541!5m2!1sen!2sid"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <v-divider class="mt-5"></v-divider>

            <div class="mt-5">
              <h2>Address</h2>
              <p>
                Sekretariat KAMIL Pascasarjana ITB Gedung Kayu Lt. 2, Komplek
                Masjid Salman Jl. Ganesha No. 7 – Bandung, 40132, Jawa Barat,
                Indonesia
              </p>
              <v-divider></v-divider>
              <h2 class="pt-3">Phone & Mail</h2>
              <p>
                Phone : 081370299798/081223193837 <br />
                E-mail : kamil.pascasarjanaitb@gmail.com
              </p>
              <v-divider></v-divider>
              <h2 class="pt-3">Social Media</h2>
              <p>
                Facebook : Kamil Pascasarjana ITB <br />
                Twitter : @kamilpascaitb <br />
                Instagram : @kamilpascaitb youtube : KAMIL Pascasarjana ITB
              </p>
            </div>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

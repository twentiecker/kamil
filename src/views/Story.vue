<template>
  <v-container>
    <v-row>
      <!-- Content -->
      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <!--  -->
          <v-container class="col-10 mx-auto py-10">
            <StatusStreamVue />
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatusStreamVue from '../components/StatusStream.vue';
export default {
  components: {
    StatusStreamVue,
  },
};
</script>

<style scoped></style>

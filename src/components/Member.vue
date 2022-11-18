<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center"><b>JABATAN</b></th>
          <th class="text-center"><b>NAMA</b></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in members" :key="i">
          <td>{{ item.jabatan }}</td>
          <td>{{ item.nama }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          jabatan: 'Ketua Umum',
          nama: 'Nugra A. Saragih',
        },
        {
          jabatan: 'Sekretaris Umum',
          nama: 'Imam Ghazali Y.',
        },
        {
          jabatan: 'Bendahara Umum',
          nama: 'Vienntiny Safrilianti E.',
        },
        {
          jabatan: 'Bendahara Umum',
          nama: 'Ririn Andriyani',
        },
        {
          jabatan: 'Kepala Departemen PPSDM',
          nama: 'Sayyid Habibullah',
        },
        {
          jabatan: 'Sekretaris Departemen PPSDM',
          nama: 'Liza Jannatul Khulud',
        },
        {
          jabatan: 'Kepala Departemen Syiar & Pelayanan',
          nama: 'Auradha Shukura Muji',
        },
        {
          jabatan: 'Sekretaris Departemen Syiar & Pelayanan',
          nama: 'Suci Wulandari',
        },
        {
          jabatan: 'Kepala Departemen Akpro',
          nama: 'Wandiansyah',
        },
        {
          jabatan: 'Sekretaris Departemen Akpro',
          nama: 'Nadya Anggraini',
        },
        {
          jabatan: 'Kepala Departemen Media',
          nama: 'Aleo Saputra',
        },
        {
          jabatan: 'Sekretaris Departemen Media',
          nama: 'Gita N. Sajida',
        },
        {
          jabatan: 'Kepala Departemen Eksternal',
          nama: 'Niko Rizaldi',
        },
        {
          jabatan: 'Sekretaris Departemen Eksternal',
          nama: 'Putri Rahayu',
        },
        {
          jabatan: 'Kepala Departemen Fundraising',
          nama: 'M. Ihsan Maulana',
        },
        {
          jabatan: 'Sekretaris Departemen Fundraising',
          nama: 'Ashila Nurul Huda',
        },
        {
          jabatan: 'Kepala Departemen Kemuslimahan',
          nama: 'Novitasari',
        },
        {
          jabatan: 'Sekretaris Departemen Kemuslimahan',
          nama: 'Nelly Safitri A',
        },
      ],
    };
  },
};
</script>

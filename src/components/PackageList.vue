<template>
<v-container>
  <v-card>

    <v-card-title>
      Qt Packages
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="" label="Search" single-line hide-details></v-text-field>
    </v-card-title>

    <v-data-table v-model="selected"
      :search="search"
      :headers="headers"
      :items="packages"
      :loading="loading"
      items-per-page=20
      append-icon="search"
      single-expand
      item-key="name"
      show-select
      show-expand
      class="elevation-1">
    </v-data-table>

  </v-card>
</v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: "PackageList",
  data() {
    return {
      loading: true,
      search: '',
      selected: [],
      headers: [{
          text: 'Display Name',
          value: 'displayName'
        },
        {
          text: 'ID Name',
          value: 'name',
        },{
          value: 'data-table-expand'
        }
      ],
      packages: []
    }
  },
  mounted() {
    // this is the url of the back-end spitting out json
    axios.get("../qt_package_list.json")
    .then(response => {
      this.packages = response.data.packages;
      this.loading = false;
    })
  },
  methods: {
  }
}
</script>

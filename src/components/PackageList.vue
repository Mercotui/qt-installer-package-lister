<template>
<v-container>
  <v-card>

    <v-card-title>
      Qt Packages
      <v-spacer></v-spacer>
      Updated on: {{date_updated}}
    </v-card-title>
    <v-text-field v-model="selectedNames" append-icon="mdi-content-copy" readonly solo single-line></v-text-field>
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

    <v-data-table v-model="selected"
      :search="search"
      :headers="headers"
      :items="packages"
      :loading="loading"
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
      packages: [],
      date_updated: ''
    }
  },
  mounted() {
    // this is the url of the back-end spitting out json
    axios.get("../qt_package_list.json")
    .then(response => {
      this.packages = response.data.packages;
      this.date_updated = new Date(response.data.date).toLocaleDateString("nl-NL");
      this.loading = false;
    })
  },
  computed: {
    selectedNames:function(){
      return this.selected.map(e => e.name).join(", ")
    }
  },
  methods: {
  }
}
</script>

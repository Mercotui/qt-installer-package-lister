<template>
<v-container>
  <v-card class="pa-auto">
    <v-card-title>
      Qt Packages
      <v-spacer></v-spacer>
      Updated on: {{date_updated}}
    </v-card-title>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-text-field
          v-on="on"
          class="px-4"
          placeholder="Selected Packages"
          v-model="selectedNames"
          append-icon="mdi-content-copy"
          readonly
          solo
          single-line
          @click="selectedNamesFocused"
          @click:append="selectedNamesFocused"
        >
        </v-text-field>
      </template>
      <span>Click to Copy</span>
    </v-tooltip>
    <v-snackbar
      v-model="copiedBar"
      top
      color="success"
      timeout=1000
    >
          Copied to Clipboard!
    </v-snackbar>

    <v-text-field class="px-4 mb-4" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

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
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Dependencies:
          <pre>{{item.dependencies}}</pre>
        </td>
      </template>
    </v-data-table>
  </v-card>
</v-container>
</template>

<script>
import axios from 'axios';
import copy from 'copy-text-to-clipboard';

export default {
  name: "PackageList",
  data() {
    return {
      loading: true,
      copiedBar: false,
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
    selectedNamesFocused:function() {
      copy(this.selectedNames);
      this.copiedBar = true;
    }
  }
}
</script>

<template>
  <v-app>
    <v-content>
      <PackageList/>
    </v-content>
  </v-app>
</template>

<script>
import PackageList from './components/PackageList';

export default {
  name: 'App',
  components: {
    PackageList,
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <v-main>
      <v-card 
        elevation="2"
        class="ma-6" >
      <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

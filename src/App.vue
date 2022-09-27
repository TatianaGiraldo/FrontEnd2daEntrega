<template>
  <v-app>
    <v-main>
      <div
      class="franja"></div>
      <v-card 
        elevation="0"
        class="ma-6 jhoy" >
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
<style>
  .v-application {
  background-color: #E1E2E1 !important;
}
.colortati{
  color:#424242
  }
.franja{
  width: 100%;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #883997;
}
.jhoy{
  min-height: 60vh;
}

</style>

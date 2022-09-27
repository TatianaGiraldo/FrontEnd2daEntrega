<template>
    <div class="text-center d-flex justify-center jhoy align-center">
      <v-dialog
        v-model="dialog"
        width="800"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="#ab47bc"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 purple lighten-2 white--text">
            VIDEOS
          </v-card-title>
  
          <v-card-text>
            <div class="pa-4"><iframe class="w-100" height="400" src="https://www.youtube.com/embed/sVv_nHhQOhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#883997"
              text
              @click="dialog = false"
            >
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
    export default {
      data () {
        return {
          dialog: false,
        }
      },
    }
  </script>

<style>
    .w-100{
        width: 100%;
    }
</style>
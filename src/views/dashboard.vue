<template>
    <v-card>
      <v-toolbar
      color="#e1bee7"
      dark
        flat
      >  
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="#883997"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
            <p class="colortati">{{ item }}</p>  
            </v-tab>
          <v-tab
          to="/page">
          <p class="colortati">Página de ejemplo</p>  
          </v-tab>
          <v-tab
          to="/videos">
          <p class="colortati">Videos</p>  
          </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat>
            <v-card-text>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis repellendus dicta cupiditate ipsam adipisci aliquid recusandae voluptatibus suscipit omnis! Possimus nulla ullam iure, reprehenderit in eum dolores rerum. Eos, dolore?</p>
            <v-row justify="center"> <v-col cols="3"> <v-img src="https://via.placeholder.com/300"></v-img> </v-col> </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </template>

<script>
    export default {
      data () {
        return {
          tab: null,
          items: [
            'Inicio', 'Nosotros', 'Servicios', 'Redes sociales', 'Ventanas de interés',
          ],
        }
      },
    }
  </script>
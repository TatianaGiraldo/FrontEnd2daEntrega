<template>
    <v-card>
      <v-toolbar
        color="cyan"
        dark
        flat
      >  
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
  
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus unde harum accusamus modi quis perspiciatis laborum itaque eius, illo recusandae, obcaecati libero, quam quisquam fugit autem aut sit repellat.
            <v-img src="https://via.placeholder.com/300"></v-img>
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
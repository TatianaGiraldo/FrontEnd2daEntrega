<template>
    <v-form
    ref="form"
    lazy-validation
    class="pa-6"
  >
  <h1 class="mb-4 text-center">BIENVENIDO</h1>
    <v-text-field
      outlined
      dense 
      :counter="10"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      outlined
      dense 
      v-model="password"
      label="Contraseña"
      required
      :type="!verPassword?'password':'text'"
    ></v-text-field>

    <v-checkbox
      v-model="verPassword"
      label="Ver contraseña"
      required
    ></v-checkbox>

    <div
    class="d-flex justify-space-between">
    <v-btn
      color="error"
      class="mr-4"
    >
      Recuperar contraseña
    </v-btn>

    <v-btn
      color="warning"
    >
      Registrarse
    </v-btn>
    </div>
    <div
    class="d-flex flex-row-reverse">
    <v-btn
      to="/dashboard"
      color="success"
      class="mt-4"
    >
      INGRESE
    </v-btn>
    </div>

  </v-form>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
    password: "",
    verPassword: false,
  }),

  }
</script>

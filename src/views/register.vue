<template>
    <v-form
    ref="form"
    lazy-validation
    class="pa-6"
  >
  <h1 class="mb-4 text-center colortati">Crear usuario</h1>
    <v-text-field
      outlined
      dense 
      :counter="10"
      label="Nombre de usuario"
      required
    ></v-text-field>

    <v-select
     :items="items"
     outlined
     dense 
     label="Tipo de usuario"
    ></v-select>

    <v-text-field
      outlined
      dense 
      v-model="password"
      label="Ingrese contraseña"
      required
      :type="!verPassword?'password':'text'"
    ></v-text-field>

    <v-text-field
      outlined
      dense 
      v-model="passwordconfirm"
      label="Repita la contraseña"
      required
      :type="!verPassword?'password':'text'"
    ></v-text-field>

    <p class="red--text"
    v-if="password!==passwordconfirm"
    >Las contraseñas no coinciden</p>

    <v-checkbox
      v-model="verPassword"
      label="Ver contraseña"
      required
    ></v-checkbox>

    <div
    class="d-flex flex-row-reverse">
    <v-btn
      to="/dashboard"
      dark
      color="#883997"
      class="mt-4"
    >
      CREAR
    </v-btn>
    </div>

  </v-form>
</template>

<script>

  export default {
    name: 'createuser',
    data: () => ({
    password: "",
    verPassword: false,
    passwordconfirm: "",
    items: [
            'Cliente', 'Administrador', 'Super admin',
          ],
  }),

  }
</script>

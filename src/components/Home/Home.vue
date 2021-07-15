<template>
  <v-container>
    <div class="text-center mt-6">
      <v-app-bar-title>Insira a URL a ser encurtada</v-app-bar-title>
    </div>
    <v-form v-on:submit.prevent=""
      ref="form"
      v-model="valid"
      lazy-validation
      class="center-form"
    >
      <v-text-field
        v-model="url"
        :rules="urlRules"
        label="Url"
        required
      ></v-text-field>
      <v-btn
        :disabled="!valid"
        color="#007cba"
        class="col-md-12"
        elevation="2"
        outlined
        @click="validate"
      >
        Encurtar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    url: '',
    urlRules: [
      v => !!v || 'Envie uma URL'
    ]
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    }
  },

}
</script>

<style scoped>
</style>

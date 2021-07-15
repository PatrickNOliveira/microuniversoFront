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
        id="sendButton"
        @click="shortUrl"
      >
        Encurtar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { extend } from "vee-validate";


export default {
  data: () => ({
    valid: true,
    url: '',
    urlRules: [
      v => !!v || 'Envie uma URL'
    ]
  }),

  methods: {
    //Valida o formulário e impede que ele seja enviado caso não atenda aos requisitos
    validate () {
      return this.$refs.form.validate()
    },

    //Função para gerar a string aleatória que será usada para encurtar a URL
    randomString(){
      //Caracteres possíveis
      let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      //Inicia a variável string aleatória com um dos caracteres gerados
      let stringAleatoria = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      //Insere um dos valores aleatórios na variável string aleatória até o limite de 7 caracteres
      // contando com o caractere já iniciado na variável
      for (var i = 0; i < 6; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      }
      //Retorna a string gerada
      return stringAleatoria;
    },

    //Função para criar a url curta
    shortUrl(){
      if (this.validate()){ //Se passar pela validação
        //Faz a requisição http para a API e insere a nova URL curta
        this.$http.post('url', {

          destiny: this.url,
          tinyUrl: this.randomString()

        }).then((r) => {

          this.url = 'localhost:8080/'+r.data.tinyUrl

        })
      }

    }
  },

}
</script>

<style scoped>
</style>

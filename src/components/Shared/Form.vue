<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      id="form"
    >
      <v-alert
        dense
        :type="typeMessage"
        v-if="message"
      >
        {{message}}
      </v-alert>
      <!-- Aqui vão entrar os inputs do formulário -->
      <slot></slot>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="sendForm"
      >
        {{btnText}}
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Form",
  props:['sendFunction', 'btnText', 'message', 'typeMessage', 'clearForm'],
  data(){
    return {
      valid: true
    }
  },
  methods:{
    validate () {
      return this.$refs.form.validate()
    },
    sendForm(){
      if (this.validate()){
        this.sendFunction()
        if (this.clearForm) {
          this.$refs.form.reset()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>

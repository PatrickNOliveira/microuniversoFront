<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-alert
        dense
        type="success"
        v-if="successMessage"
      >
        {{successMessage}}
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
  props:['sendFunction', 'btnText', 'successMessage'],
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
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>

</style>

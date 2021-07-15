<template>
  <app-form
    btn-text="Editar usuário"
    :send-function="register"
    id="register"
    type-message="success"
    :message="successMessage"
  >
    <v-text-field
      v-model="user.firstName"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.lastName"
      :rules="nameRules"
      label="Sobrenome"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.password"
      :rules="passwordRules"
      label="Senha"
      type="password"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.confirmPassword"
      :rules="confirmPasswordRules"
      label="Confirmar senha"
      type="password"
      required
    ></v-text-field>
  </app-form>
</template>

<script>
import Form from "../Shared/Form";

export default {
  name: "EditUser",
  components:{
    'app-form': Form
  },
  data(){
    return {
      user:{}
    }
  }
}
</script>

<style scoped>

</style>

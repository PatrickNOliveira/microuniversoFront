<template>
  <app-form
    btn-text="Cadastrar-se"
    :send-function="sendFunction"
    id="register"
    type-message="success"
    :message="msg"
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

    <v-checkbox
      v-model="user.checkbox"
      v-if="checkbox"
      :rules="[v => !!v || 'Deve aceitar para continuar']"
      label="Aceita os termos de uso ?"
      required
    ></v-checkbox>
  </app-form>
</template>

<script>
import Form from "../../Shared/Form";

export default {
  name: "FormUser",
  components:{
    'app-form': Form
  },
  props:['sendFunction', 'user', 'msg', 'checkbox'],
  data(){
    return{
      nameRules: [
        v => !!v || 'Envie o nome completo',
      ],
      emailRules: [
        v => !!v || 'Envie um e-mail',
        v => /.+@.+\..+/.test(v) || 'Envie um e-mail válido!',
      ],
      passwordRules: [
        v => !!v || 'Envie uma senha',
        v => (v && v.length >= 6) || 'Mínimo 6 caracteres',
      ],
      confirmPasswordRules:[
        v => !!v || 'Confirme a senha',
        v => (v && v === this.user.password ) || 'Senha e confirmação de senha devem ser igual'
      ]
    }
  }
}
</script>

<style scoped>

</style>

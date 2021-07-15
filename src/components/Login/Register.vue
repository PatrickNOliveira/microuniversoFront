<template>
 <app-form
   btn-text="Cadastrar-se"
   :send-function="register"
   :success-message="successMessage"
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
     :rules="[v => !!v || 'Deve aceitar para continuar']"
     label="Aceita os termos de uso ?"
     required
   ></v-checkbox>
 </app-form>
</template>

<script>
import Form from "../Shared/Form";

export default {
  name: "Register",
  components:{
    'app-form': Form
  },
  data(){
    return{
      user:{},
      successMessage: null,
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
  },
  methods:{
    register(){
      this.$http.post('/register', this.user).then((r) => {
        if (r.data) {
          this.successMessage = 'Cadastrado com sucesso !'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

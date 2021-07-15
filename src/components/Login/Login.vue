<template>
  <app-form
    btn-text="fazer login"
    :send-function="logIn"
    type-message="error"
    :message="msg"
  >
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

  </app-form>
</template>

<script>
import Form from "../Shared/Form";

export default {
  name: "Login",
  components:{
    'app-form': Form
  },
  data(){
    return{
      user:{},
      msg: null,
      emailRules: [
        v => !!v || 'Envie um e-mail',
        v => /.+@.+\..+/.test(v) || 'Envie um e-mail válido!',
      ],
      passwordRules: [
        v => !!v || 'Envie uma senha'
      ],
    }
  },
  methods: {
    logIn() {
      this.$http.post('sessions', this.user)
        .then((r) => {
          this.$store.commit('LOGIN_USER', {
            token: r.data.token,
            user: r.data.user
          })
          this.$router.push({name: 'home'})
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.msg = err.response.data.message
          }
        })
    }
  }
}
</script>

<style scoped>

</style>

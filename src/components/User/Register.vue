<template>
 <app-form
   btn-text="Cadastrar-se"
   :send-function="register"
   id="register"
   :type-message="type_message"
   :msg="message"
   :user="user"
   :checkbox="true"
   :password="true"
   :clear-form="true"
 >
 </app-form>
</template>

<script>
import FormUser from "./Shared/FormUser";

export default {
  name: "Register",
  components:{
    'app-form': FormUser
  },
  data() {
    return {
      user: {},
      message: null,
      type_message: ''
    }
  },
  methods:{
    register(){
      this.$http.post('/register', this.user).then((r) => {
        if (r.data) {
          this.type_message = 'success'
          this.message = 'Editado com sucesso !'
        }
      }).catch(e => {
        if (e.response.data == "Validation error"){
          this.type_message = 'error'
          this.message = 'E-mail já está em uso !'

        }
      })
    }
  }
}
</script>

<style scoped>

</style>

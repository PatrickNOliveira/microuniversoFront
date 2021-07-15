<template>
 <app-form
   btn-text="Cadastrar-se"
   :send-function="register"
   id="register"
   type-message="success"
   :msg="successMessage"
   :user="user"
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
      successMessage: null,
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

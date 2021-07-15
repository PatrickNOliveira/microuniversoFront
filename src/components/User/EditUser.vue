<template>
  <app-form
    btn-text="Editar usuário"
    :send-function="editUser"
    id="register"
    type-message="success"
    :msg="successMessage"
    :user="user"
    :checkbox="false"
    :password="false"
    :clear-form="false"
  >
  </app-form>
</template>

<script>
import FormUser from "./Shared/FormUser";

export default {
  name: "EditUser",
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
    editUser(){
      console.log(this.user)
      this.$http.put('/user', this.user).then((r) => {
        if (r.data) {
          this.successMessage = 'Editado com sucesso !'
        }
      }).catch(e => {
        console.log(e.response)
      })
    }
  },
  mounted() {
    this.user = this.$store.state.user
    delete this.user.password
  }
}
</script>

<style scoped>

</style>

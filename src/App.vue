<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="#007cba"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="white"
      >
        <v-tab
          to="/home"
          key="home"
        >
          Home
        </v-tab>
        <v-tab
          to="/login"
          key="login"
          v-if="!usuarioLogado()"
        >
          Login
        </v-tab>
        <v-tab
          to="/register"
          key="register"
          v-if="!usuarioLogado()"
        >
          Registrar-se
        </v-tab>
        <v-tab
          to="/links"
          key="links"
          v-if="usuarioLogado()"
        >
          Meus links
        </v-tab>

      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
             <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.usuarioLogado())
  },
  methods:{
    usuarioLogado() {
      return Boolean(this.$store.state.token);
    }
  }
}
</script>

<style>
</style>

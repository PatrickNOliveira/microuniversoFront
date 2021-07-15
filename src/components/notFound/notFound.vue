<template>
  <v-container>
    <div class="row justify-center mt-16">
      <div class="text-center">
        <v-card-title id="notFound">404 Página não encontrada</v-card-title>
        <router-link to="/home">Clique aqui para encurtar suas URLs</router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "notFound"
}
</script>

<style scoped>
 #notFound {
   font-size: 20pt;
 }
</style>

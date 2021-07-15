<template>
  <v-row align="center" justify="center" class="mt-10">
  <v-progress-circular
    indeterminate
    color="black"
    class="mt-16"
  ></v-progress-circular>
  </v-row>
</template>
<script>
export default {
  name: "Redirect",
  beforeCreate() {
    this.$http.get('/url/'+this.$route.params.code)
      .then((r) => {
        if (r.data.destiny){
          window.location.href = r.data.destiny
        } else {
          this.$router.push({name:'notFound'})
        }
      })
  }
}
</script>

<style scoped>

</style>

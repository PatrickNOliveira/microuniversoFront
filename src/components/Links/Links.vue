<template>
  <app-table
    :headers="headers"
    :search="search"
    :items="urls"
    search-label="Buscar (Destino ou Url encurtada)"
    id="links"
  >
    <template slot="item" scope="props">
      <tr>

      </tr>
    </template>
  </app-table>
</template>

<script>
import Table from "../Shared/Table";

export default {
  name: "Links",
  components:{
    "app-table": Table
  },
  data(){
    return {
      search: '',
      urls:[],
      headers: [
        {
          text: 'Url encurtada',
          align: 'start',
          value: 'tinyUrl',
        },
        { text: 'Destino', value: 'destiny' }
      ],
    }
  },
  mounted() {
    this.$http.get('url').then((r) => {
      this.urls = r.data
    })
  }
}
</script>

<style scoped>

</style>

<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="5"
    item-key="name"
    class="elevation-0"
    :search="search"
    id="table"
  >
    <template v-slot:top>
      <v-card-title class="mb-0 pb-0">
        Links
      </v-card-title>
      <v-container>
        <v-text-field
          v-model="search"
          :label="searchLabel"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-container>
    </template>
    <slot></slot>
  </v-data-table>
</template>

<script>
export default {
  name: "Table",
  props:["search", "headers", "searchLabel", "items"]
}
</script>

<style scoped>

</style>

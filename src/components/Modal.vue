<template lang="html">
  <v-container row wrap grid-list-xs>
    <v-layout >
      <v-card xs12 sm6 v-for="n in 4" height="50vh"  color="deep-purple lighten-3" :key="n">
        <v-card-text>
          {{ n }}
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

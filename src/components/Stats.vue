<template lang="html">
  <v-container grid-list-lg >
    <v-layout column wrap>
      <v-card color="deep-orange lighten-5" height="50vh" class="text-xs-left">
        <div class="mx-3 my-4">
          <h1>Statistikk</h1>
          <p>Det er akkurat nå {{ sumLinks }} på lageret</p>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Stats',
  computed: {
    ...mapGetters(['sumLinks'])
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <v-snackbar
      v-model="snack.open"
      :timeout="timeout"
      auto-height
    >
      <app-progress></app-progress>

      Det ble funnet {{ antallRas }} registrerte ras og {{ antallObs }} registrerte snøobservasjoner
      <v-btn
        flat
        @click="test"
      >
      Close
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'Snackbar',
  data() {
    return {
      timeout: 6000
    }
  },
  props: ['antallRas', 'antallObs'],
  computed: {
    ...mapState(['snack'])
  },
  components: {
    appProgress: Progress
  },
  methods: {
    ...mapMutations(['TOGGLE_SNACK']),
    test() {
      this.TOGGLE_SNACK = !this.snack.open
    }
  }
}
</script>

<style lang="css">
.top{
  position: relative;
}

[faen]{
  position: absolute;
}
</style>


<template>
  <v-progress-circular :value="value"></v-progress-circular>
    <!-- <v-progress-linear
      :value="value"
      height="30"
    ></v-progress-linear> -->
</template>

<script>
  export default {
    name: 'Progress',
    data () {
      return {
        value: 0,
        interval: 0
      }
    },

    mounted () {
      this.startBuffer()
    },
    beforeDestroy () {
       clearInterval(this.interval)
     },
    methods: {
      startBuffer () {
        this.value = 0
        this.interval = setInterval(() => {
                   if (this.value === 100) {
                     clearInterval(this.interval)
                   }
                   this.value += 1
                 },50)
        }
      },
  }
</script>

<style lang="css">
</style>

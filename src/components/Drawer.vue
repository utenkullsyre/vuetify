<template lang="html">
  <div class="">
    <v-navigation-drawer
          v-model="drawer"
          fixed
          temporary
          height="100vh"
          hide-overlay
        >
        <h2>heiheii</h2>
    </v-navigation-drawer>

  </div>


</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Drawer',
  data() {
    return {
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ]
    }
  },
  computed: {
    ...mapState(['drawerOpen']),
    drawer: {
      set(value) {
        this.$store.commit('TOGGLE_DRAWER', value)
      },
      get() {
        return this.drawerOpen
      }
    }

  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="">
    <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
        <h2>heiheii</h2>
        </v-navigation-drawer>
    <v-bottom-sheet v-model="drawer">
     <v-btn
       slot="activator"
       color="purple"
       dark
     >
       Click me
     </v-btn>

     <v-list>
       <v-subheader>Open in</v-subheader>
       <v-list-tile
         v-for="tile in tiles"
         :key="tile.title"
         @click="sheet = false"
       >
         <v-list-tile-avatar>
           <v-avatar size="32px" tile>
             <img
               :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
               :alt="tile.title"
             >
           </v-avatar>
         </v-list-tile-avatar>
         <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
       </v-list-tile>
     </v-list>
   </v-bottom-sheet>

  </div>


</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Drawer',
  date() {
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

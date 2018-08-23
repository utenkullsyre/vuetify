<template>
  <div class="hello">
    <app-snackbar :antallRas="5" :antallObs="10"></app-snackbar>
    <app-drawer></app-drawer>
    <app-gigal></app-gigal>
    <h2>{{ title }}</h2>
    <v-btn color="primary" @click="drawer">drawer</v-btn>
    <v-btn color="primary" @click="modal">modal</v-btn>
    <div class="">
      {{ drawerOpen }}
    </div>
    <v-card>
      <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-text-field
          name="name"
          label="label"
          id="id"
          v-model="newLink"
          @keyup.enter="addLink"
        ></v-text-field>
      </v-flex>
    </v-layout>
    </v-card>


    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6>
          <v-container grid-list-lg>
            <v-layout column>
              <v-card v-for="(link,index) in links" block :key="index">
                <v-card-title primary-title>
                  {{ link }}
                  <v-card-actions>
                    <v-icon medium @click="">close</v-icon>
                  </v-card-actions>
                </v-card-title>
              </v-card>
            </v-layout>

          </v-container>
        </v-flex>
        <v-flex xs12 sm12 md6>
          <app-stats></app-stats>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Stats from '@/components/Stats'
import Drawer from '@/components/Drawer'
import Snackbar from '@/components/Snackbar'
import Gigal from '@/components/Gigal'


import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      newLink: ''
    }
  },
  computed: {
    ...mapState(['title', 'links', 'drawerOpen']),
  },
  components: {
    appStats: Stats,
    appDrawer: Drawer,
    appSnackbar: Snackbar,
    appGigal: Gigal
  },
  methods: {
    ...mapMutations(['TOGGLE_DRAWER', 'TOGGLE_SNACK', 'TOGGLE_MODAL', 'ADD_LINK']),
    drawer() {
      this.TOGGLE_DRAWER(!this.drawerOpen)
      this.TOGGLE_SNACK(true)
    },
    modal(){
      this.TOGGLE_MODAL(true)
    },
    addLink() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

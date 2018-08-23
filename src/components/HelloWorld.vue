<template>
  <div class="hello">
    <app-drawer></app-drawer>
    <h2>{{ title }}</h2>
    <v-btn color="primary" @click="test">text</v-btn>
    <div class="">
      {{ drawerOpen }}
    </div>
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['title', 'links', 'drawerOpen']),
  },
  components: {
    appStats: Stats,
    appDrawer: Drawer
  },
  methods: {
    ...mapMutations(['TOGGLE_DRAWER']),
    test() {
      this.TOGGLE_DRAWER(true)
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
